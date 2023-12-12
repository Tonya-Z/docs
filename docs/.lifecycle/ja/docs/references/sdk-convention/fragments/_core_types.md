<details>
  <summary>OidcConfigResponse</summary>

アイデンティティプロバイダの構成は、`/oidc/.well-known/openid-configuration` APIを通じて取得できます。

**プロパティ**

| 名前                   | タイプ      |
| ---------------------- | ----------- |
| authorizationEndpoint | `string`    |
| tokenEndpoint         | `string`    |
| endSessionEndpoint    | `string`    |
| revocationEndpoint    | `string`    |
| jwksUri               | `string`    |
| issuer                | `string`    |

</details>

<details>
  <summary>CodeTokenResponse</summary>

`/oidc/token`（認可コードによる）のレスポンスデータ。

**プロパティ**

| 名前         | タイプ      | 必須     |
| ------------ | ----------- | -------- |
| accessToken  | `string`    | ✅       |
| refreshToken | `string`    |          |
| idToken      | `string`    | ✅       |
| scope        | `string`    | ✅       |
| expiresIn    | `number`    | ✅       |

</details>

<details>
  <summary>RefreshTokenResponse</summary>

リフレッシュトークンによってトークンを更新する際の、 `/oidc/token` のレスポンスデータ。

**プロパティ**

| 名前         | タイプ      | 必須     |
| ------------ | ----------- | -------- |
| accessToken  | `string`    | ✅       |
| refreshToken | `string`    | ✅       |
| idToken      | `string`    |          |
| scope        | `string`    | ✅       |
| expiresIn    | `number`    | ✅       |

</details>

<details>
  <summary>IdTokenClaims</summary>

IDトークンによって運ばれるクレーム。

**プロパティ**

| 名前      | タイプ      | 必須     |
| --------- | ----------- | -------- |
| sub       | `string`    | ✅       |
| aud       | `string`    | ✅       |
| exp       | `number`    | ✅       |
| iat       | `number`    | ✅       |
| iss       | `string`    | ✅       |
| atHash    | `string`    |          |
| username  | `string`    |          |
| name      | `string`    |          |
| avatar    | `string`    |          |

</details>