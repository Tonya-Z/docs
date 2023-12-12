# 設定

## 環境変数

### 使い方

Logtoは以下の順序で環境変数を処理します：

- システムの環境変数
- [dotenv](https://github.com/motdotla/dotenv#readme) フォーマットに準拠したプロジェクトルートの `.env` ファイル

そのため、システムの環境変数は `.env` の値を上書きします。

### 変数

:::注意
プロジェクトのルートで `npm start` を使用して Logto を実行すると、`NODE_ENV` は常に `production` になります。
:::

デフォルト値では、`protocol` はHTTPSの設定に従って `http` または `https` のいずれかになります。

| キー                     | デフォルト値                        | 型                                                       | 説明                                                                                                                                                                                                              |
| ----------------------- | ------------------------------------ | -------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| NODE_ENV                | `undefined`                          | <code>'production' &#124; 'test' &#124; undefined</code> | Logto が実行される環境の種類。                                                                                                                                                                             |
| PORT                    | `3001`                               | `number`                                                 | Logto がリッスンするローカルポート。                                                                                                                                                                                    |
| ADMIN_PORT              | `3002`                               | `number`                                                 | Logto Admin Console がリッスンするローカルポート。                                                                                                                                                                      |
| ADMIN_DISABLE_LOCALHOST | N/A                                  | <code>string &#124; boolean &#124; number</code>         | `1` または `true` と設定すると、Admin Console のポートが無効になります。`ADMIN_ENDPOINT` が未設定の場合、Admin Console は完全に無効になります。                                                                                  |
| DB_URL                  | N/A                                  | `string`                                                 | Logto データベースの[Postgres DSN](https://www.postgresql.org/docs/14/libpq-connect.html#id-1.7.3.8.3.6)。                                                                                                             |
| HTTPS_CERT_PATH         | `undefined`                          | <code>string &#124; undefined</code>                     | 詳細は[HTTPS を有効にする](#enabling-https)を参照してください。                                                                                                                                                                       |
| HTTPS_KEY_PATH          | `undefined`                          | <code>string &#124; undefined</code>                     | 同上。                                                                                                                                                                                                                   |
| TRUST_PROXY_HEADER      | `false`                              | `boolean`                                                | 同上。                                                                                                                                                                                                                   |
| ENDPOINT                | `'protocol://localhost:$PORT'`       | `string`                                                 | オンラインテストまたは本番向けにカスタムドメイン付きのURLを指定できます。これは[OIDC発行者識別子](https://openid.net/specs/openid-connect-core-1_0.html#IssuerIdentifier)の値にも影響します。 |
| ADMIN_ENDPOINT          | `'protocol://localhost:$ADMIN_PORT'` | `string`                                                 | 本番 (例：`ADMIN_ENDPOINT=https://admin.domain.com`) 向けにカスタムドメイン付きのURLを指定できます。これは Admin Console のリダイレクト URI の値にも影響します。                                           |

### HTTPS を有効にする

#### Node を使用

Node はネイティブでHTTPSをサポートしています。HTTPS を有効にするには、`HTTPS_CERT_PATH` と `HTTPS_KEY_PATH` の**両方**を提供します。

`HTTPS_CERT_PATH` はHTTPS証明書へのパスを意味し、`HTTPS_KEY_PATH` はHTTPSキーへのパスを意味します。

#### HTTPSプロキシを使用

もう1つの一般的な方法は、Node の前にHTTPSプロキシを設置することです（例：Nginx）。

この場合、`TRUST_PROXY_HEADER` を `true` に設定する必要があります。これはプロキシヘッダーフィールドを信頼するかどうかを示します。Logto はこの値を[Koaアプリの設定](https://github.com/koajs/koa/blob/master/docs/api/index.md#settings)に渡します。

このフィールドを構成するタイミングについては、[TLSオフロードプロキシを信頼する](https://github.com/panva/node-oidc-provider/blob/main/docs/README.md#trusting-tls-offloading-proxies)を参照してください。

## データベースの設定

多くの環境変数を管理することは効率的でも柔軟ではないため、一般的な設定のほとんどは `logto_configs` テーブルに格納されています。

このテーブルはシンプルなキーと値のストレージであり、キーは以下のように列挙されます：

| キー              | 型                  | 説明                                                                                      |
| ---------------- | --------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| oidc.cookieKeys  | <code>string[]</code> | [署名クッキーキー](https://github.com/panva/node-oidc-provider/blob/main/docs/README.md#cookieskeys)の文字列配列。   |
| oidc.privateKeys | <code>string[]</code> | [OIDC JWT 署名](https://openid.net/specs/openid-connect-core-1_0.html#Signing)のためのプライベートキーのコンテンツ。 |

### サポートされるプライベートキータイプ

- EC（P-256、secp256k1、P-384、および P-521 カーブ）
- RSA
- OKP（Ed25519、Ed448、X25519、X448 サブタイプ）