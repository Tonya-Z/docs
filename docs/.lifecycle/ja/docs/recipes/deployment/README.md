---
sidebar_position: 9
---

# 🚀 デプロイ

## 環境変数

私たちはデモのために環境変数の生成されたプリセットを使用しています（`docker-compose.yml`）。あなた自身の環境変数で置き換え、複数のLogtoインスタンス全体で一貫性を保つ必要があります。

Logtoプロジェクトのルートに直接envを設定するか、`.env`ファイルを置くことができます。Dockerでテストしている場合は、 `/etc/logto`にあるイメージで生成された `.env` をチェックしてください。

### 必須

- `DB_URL` Logtoデータベースの[Postgres DSN](https://www.postgresql.org/docs/14/libpq-connect.html#id-1.7.3.8.3.6)。
- `PORT` Logtoがリッスンするポート。デフォルトは `3001` です。
- `ENDPOINT` 本番環境用にカスタムドメインのURLを指定することができます（例: `ENDPOINT=https://logto.domain.com`）。これはまた[OIDC発行元識別子](https://openid.net/specs/openid-connect-core-1_0.html#IssuerIdentifier)の値に影響を与えます。

**管理コンソールを有効にする**

- `ADMIN_PORT` Logto管理コンソールがリッスンするポート。デフォルトは `3002` です。
- `ADMIN_ENDPOINT` 本番環境用にカスタムドメインのURLを指定することができます（例: `ADMIN_ENDPOINT=https://admin.domain.com`）。これはまた管理コンソールのリダイレクトURIの値に影響を与えます。

**管理コンソールを無効にする**

- `ADMIN_DISABLE_LOCALHOST` これを `1` または `true` に設定して管理コンソールのポートを閉じることができます。`ADMIN_ENDPOINT` を設定せずに、管理コンソール全体を完全に無効にすることができます。

環境変数の詳細については、[Configuration](../../references/core/configuration.md)を参照してください。

### HTTPS

Node.jsを使用して直接HTTPSを提供するか、Node.jsの前にHTTPSプロキシ/バランサを設定することができます。詳細は[Enabling HTTPS](../../references/core/configuration.md#enabling-https)を参照してください。

### 逆プロキシ

サーバーで逆プロキシを使用したい場合、例えばNginxの場合、通常、Logtoをアップストリームとして定義する必要があります。
Nginxを使用しており、Logtoインスタンスがポート3001で実行されていると仮定すると、nginx.confに次の構成を追加します：

```
upstream logto_upstream {
  server 127.0.0.1:3001;
}
```

次に、次のリクエストヘッダーを適切に構成していることを確認してください：

```
server {
  listen 80;
  server_name your_domain_url;
  ...

  location / {
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto https;

    proxy_pass http://logto_upstream;
    proxy_redirect off;
  }
}
```

最新の変更を適用するために、Nginxの構成を再読み込みしてください：

```
nginx -s reload
```

以上です。ブラウザを開いて、ドメインURLにアクセスすると、Logtoのウェルカムページが表示されるはずです。

## Logtoを安全にアップグレードするにはどうすればよいですか？

変更履歴に言及されていない場合は、コードやデータベースのスキーマを変更せずにLogtoを安全にアップグレードしていただいて構いません。当社のAPIは[semver](https://semver.org/)に準拠しています。

### データベースの変更

スキーマ変更が避けられない場合、変更スクリプトを提供します。Logtoプロジェクトのルートで`npm run alteration deploy`を実行するだけで、データベースのスキーマを簡単にアップグレードできます。

変更コマンドの詳細については、[Database alteration](../../tutorials/using-cli/database-alteration.mdx)を参照してください。

## コンテナ化

本番環境では、Logtoをコンテナ化するためにDockerを使用することができます。プロジェクトのルートディレクトリにDockerfileがあります。たとえば、LogtoをKubernetesクラスターにデプロイする場合、追加の手順が必要です。

### 共有コネクタフォルダ

デフォルトでは、Logtoは`core`フォルダのルートディレクトリに`connectors`フォルダを作成します。複数のLogtoインスタンスでフォルダを共有することをお勧めします。`packages/core/connectors`フォルダをコンテナにマウントして`npm run cli connector add -- --official`を実行する必要があります。

Kubernetesの最小限の例を示します：

```yaml
apiVersion: extensions/v1beta1
kind: Deployment
metadata:
  name: logto
  namespace: default
spec:
  template:
    spec:
      volumes:
        - name: connectors
          emptyDir: {}
      initContainers:
        - image: ghcr.io/logto-io/logto
          command:
            - /bin/sh
          args:
            - '-c'
            - 'npm run cli connector add -- --official'
          name: init
          volumeMounts:
            - name: connectors
              mountPath: /etc/logto/packages/core/connectors
      containers:
        - image: ghcr.io/logto-io/logto
          name: logto
          volumeMounts:
            - name: connectors
              mountPath: /etc/logto/packages/core/connectors
```

この例では、空のディレクトリをボリュームとして作成し、それをコンテナにマウントします。その後、初期化コンテナで`npm run cli connector add -- --official`を実行してコネクタをダウンロードします。最後に、すべてのコンテナが公式のコネクタがすでに含まれている同じコネクタフォルダを共有します。

:::note
これはyamlの例です。Logtoを実行するには、適切にenvを設定する必要があります。
:::

本番環境では、"empty dir"ボリュームを永続ボリュームで置き換え、"init"のジョブを独自の方法で実行し、何をしているのかを把握してください！

### データベースの変更

コネクタと同様に、データベースの変更は単一のインスタンスで実行する必要があります。変更スクリプトを実行するジョブを使用できます。  
非対話形式で変更を実行する場合は、`CI=true`環境変数が必要です。

```yaml
apiVersion: batch/v1
kind: Job
metadata:
  name: alteration
spec:
  template:
    spec:
      containers:
        - name: alteration
          image: ghcr.io/logto-io/logto
          imagePullPolicy: always
          env:
            - name: CI
              value: true
            - name: DB_URL
              value: postgresql://user:password@localhost:5432/logto
            command:
              - /bin/sh
            args:
              - '-c'
              - 'npm run alteration deploy latest'
      restartPolicy: Never
```

詳細については、[Database alteration](../../tutorials/using-cli/database-alteration.mdx)を参照してください。