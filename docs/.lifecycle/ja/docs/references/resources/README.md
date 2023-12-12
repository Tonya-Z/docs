```markdown
import APIResourceSchema from './fragments/\_api_resource_schema.mdx';

# 📁 API リソース

## はじめに

### API リソースとは何ですか？

API リソース、別名[リソースインジケータ](https://www.rfc-editor.org/rfc/rfc8707.html)は、通常、リソースの識別子を表すURI形式の変数で、リクエストされるターゲットのサービスやリソースを示します。

### なぜ API リソースが必要ですか？

認可サーバーとしての Logto は、多くのサービスや API を提供するために設計されています。エンドユーザーがアクセスしようとするAPIリソースを示すことで、Logto はプライベートな暗号化された認可トークンを発行し、対応するオーディエンスの制限を適用することができます。

認可トークンが付与されたガード付きリクエストにより、匿名のアイデンティティによるアクセスや攻撃からプライベートなリソースを保護することができます。

## 定義

### リソースインジケータ

- リソース値は、要求されているアクセス先のサービスまたはリソースを示します。
- その値は絶対URIでなければなりません。
- URIにはフラグメントコンポーネントを含めてはいけません。
- クエリコンポーネントは含めるべきではありません。
- アクセスしようとしている完全なAPIまたはリソースのセットの最も具体的なURIを提供すべきです。

実際には、クライアントは基本URIや対話するアプリケーションやリソースを知っている場合があります。その値をリソースパラメータの値として使用することが適切です。

例: Logto 管理APIの基本URI。

```
https://tenantId.logto.app/api
```

デフォルトでは、このAPIリソースはお使いのLogtoサービスに事前登録されています。このURIの下にあるすべての管理APIはLogtoによって保護されています。

### Logto API リソーススキーマ

<APIResourceSchema />

### 権限とRBAC

詳細については[🔐 RBAC](/docs/recipes/rbac)を参照してください。

## 仕組み

### 1. 認可リクエスト

認可リクエストには、リソースインジケータパラメータのリストを提供します。これにより、ユーザーがリクエストする可能性のある保護されたリソースがすべて示されます。

```bash
GET http://localhost:3001/oidc/auth?response_type=code
    &client_id=s6BhdRkqt3
    &state=tNwzQ87pC6llebpmac_IDeeq-mCR2wLDYljHUZUAWuI
    &redirect_uri=https%3A%2F%2Fclient.example.org%2Fcb
    &resource=https%3A%2F%2Flogto.dev%2Fapi%2Fapplications
    &resource=https%3A%2F%2Flogto.dev%2Fapi%2Fusers
```

Logto はこれらのリソースインジケータを検証して保存します。指定されたリソースに制限されたスコープ付きの`authorization_code`が付与され、返されます。

### 2. アクセストークンリクエスト

アクセストークンリクエストで、`authorization_code`とともに`resource`パラメータが含まれている場合、アクセストークンの対象APIリソースオーディエンスが指定されます。

```bash
POST http://localhost:3001/oidc/token HTTP/1.1

    grant_type=authorization_code
    redirect_uri=https%3A%2F%2Fclient.example.org%2Fcb
    code=10esc29BWC2qZB0acc9v8zAv9ltc2pko105tQauZ
    resource=https%3A%2F%2Flogto.test.dev%2Fusers
```

Logto によって指定されたリクエストされたリソースに制限された暗号化されたアクセストークンが付与されます。このトークンには、リクエストユーザーのアイデンティティとロール、トークンのオーディエンスと有効期限などの認可ステータスを表すために必要なすべてのデータが含まれています。

### 3. API リソースリクエスト

クライアントユーザーは、与えられた`access_token`をAuthorizationヘッダーで表示してAPIリソースにリクエストを送信しました。

```bash
GET http://localhost:3001/api/users

Authorization: Bearer eyJhbGciOiJIUz...
```

:::tip
サーバーサイドのAPIでトークンの検証を実装し、リソースを十分に保護するために、当社の[⚔️ APIの保護](../../recipes/protect-your-api/README.mdx)ガイドに従ってください。
:::

Logtoは、標準のトークンベースの認可プロトコルに従い、APIリソースを保護します。OAuth 2.0の詳細については、OAuth 2.0の[公式ドキュメント](https://datatracker.ietf.org/doc/html/rfc6749#section-1.3.1)を参照してください。
```