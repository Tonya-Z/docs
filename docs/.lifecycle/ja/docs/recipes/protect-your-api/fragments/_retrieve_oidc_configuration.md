### LogtoのOIDC構成を取得する

受け取ったJWSトークンの署名とソースを検証するには、JWK公開キーセットとトークン発行者が必要です。最新の公開Logto認証構成はすべて、`https://<your-logto-domain>/oidc/.well-known/openid-configuration`で見つけることができます。

例：`https://logto.dev/oidc/.well-known/openid-configuration`を呼び出します。そして、応答本文内で次の2つのフィールドを見つけてください：

```json
{
  "jwks_uri": "https://logto.dev/oidc/jwks",
  "issuer": "https://logto.dev/oidc"
}
```