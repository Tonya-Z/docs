<details>
  <summary>fetchOidcConfig</summary>

`/oidc/.well-known/openid-configuration` にリクエストして `OidcConfigResponse` を返します。

**Parameters**

| Name     | Type     | Notes                     |
| -------- | -------- | ------------------------- |
| endpoint | `string` | OIDCサービスのエンドポイント |

**Return Type**

`OidcConfigResponse`

**Throws**

- 取得に失敗しました

</details>

<details>
  <summary>generateSignInUri</summary>

**Parameters**

| Name                  | Type       | Required | Notes                                                             |
| --------------------- | ---------- | -------- | ----------------------------------------------------------------- |
| authorizationEndpoint | `string`   | ✅       |                                                                   |
| clientId              | `string`   | ✅       |                                                                   |
| redirectUri           | `string`   | ✅       |                                                                   |
| codeChallenge         | `string`   | ✅       |                                                                   |
| state                 | `string`   | ✅       |                                                                   |
| scopes                | `string[]` |          | 実装は言語仕様によって異なる場合があります。                |
| resources             | `string[]` |          | 実装は言語仕様によって異なる場合があります。                |
| prompt                | `string`   |          | デフォルト：`consent`                                         |

URL は `authorizationEndpoint` を基に生成され、以下のクエリパラメータを含みます。

**サインイン URL クエリパラメータ**

| Query Key             | Required | Notes                                                                                                            |
| --------------------- | -------- | ---------------------------------------------------------------------------------------------------------------- |
| client_id             | ✅       |                                                                                                                  |
| redirect_uri          | ✅       |                                                                                                                  |
| code_challenge        | ✅       |                                                                                                                  |
| code_challenge_method | ✅       | S256 にハードコーディングされます。                                                                             |
| state                 | ✅       |                                                                                                                  |
| scope                 | ✅       | scope には常に openid と offline_access が含まれます。たとえ入力された scope が null または空の場合でも。   |
| resource              |          | リソースを複数回 URI に追加することができます。バックエンドはそれらをリストに変換します。例：`resource=a&resource=b` |
| response_type         | ✅       | code にハードコーディングされます。                                                                             |
| prompt                | ✅       |                                                                                                                  |

**Return Type**

`string`

</details>

<details>
  <summary>generateSignOutUri</summary>

**Parameters**

| Name                  | Type     | Required |
| --------------------- | -------- | -------- |
| endSessionEndpoint    | `string` | ✅       |
| idToken               | `string` | ✅       |
| postLogoutRedirectUri | `string` |          |

生成される URL は `endSessionEndpoint` を基にし、以下のクエリパラメータを含みます。

**サインアウト URL クエリパラメータ**

| Query Key                | Required | Notes                                         |
| ------------------------ | -------- | --------------------------------------------- |
| id_token_hint            | ✅       | 入力された `idToken` パラメータ               |
| post_logout_redirect_uri |          | 入力された `postLogoutRedirectUri` パラメータ |

**Return Type**

`string`

</details>

<details>
  <summary>fetchTokenByAuthorizationCode</summary>

`/oidc/token` にリクエストして（認可コードによって）トークン（`CodeTokenResponse`）を取得します。

**Parameters**

| Name          | Type     | Required |
| ------------- | -------- | -------- |
| tokenEndpoint | `string` | ✅       |
| code          | `string` | ✅       |
| codeVerifier  | `string` | ✅       |
| clientId      | `string` | ✅       |
| redirectUri   | `string` | ✅       |
| resource      | `string` |          |

**HTTP リクエスト**

- エンドポイント：`/oidc/token`
- メソッド：`POST`
- コンテントタイプ：`application/x-www-form-urlencoded`
- ペイロード：

| Query Key     | Type                           | Required |
| ------------- | ------------------------------ | -------- |
| grant_type    | `string: 'authorization_code'` | ✅       |
| code          | `string`                       | ✅       |
| code_verifier | `string`                       | ✅       |
| client_id     | `string`                       | ✅       |
| redirect_uri  | `string`                       | ✅       |
| resource      | `string`                       |          |

**Return Type**

`CodeTokenResponse`

**Throws**

- 取得に失敗しました

</details>

<details>
  <summary>fetchTokenByRefreshToken</summary>

`/oidc/token` を経由してトークン（`RefreshTokenTokenResponse`）を取得します（リフレッシュトークンによって）。

**Parameters**

| Name          | Type       | Required |
| ------------- | ---------- | -------- |
| tokenEndpoint | `string`   | ✅       |
| clientId      | `string`   | ✅       |
| refreshToken  | `string`   | ✅       |
| resource      | `string`   |          |
| scopes        | `string[]` |          |

**HTTP リクエスト**

- エンドポイント：`/oidc/token`
- メソッド：`POST`
- コンテントタイプ：`application/x-www-form-urlencoded`
- ペイロード：

| Query Key     | Type                      | Required | Notes                                                                   |
| ------------- | ------------------------- | -------- | ----------------------------------------------------------------------- |
| grant_type    | `string: 'refresh_token'` | ✅       |                                                                         |
| refresh_token | `string`                  | ✅       |                                                                         |
| client_id     | `string`                  | ✅       |                                                                         |
| resource      | `string`                  |          |                                                                         |
| scope         | `string`                  |          | `scopes` の値をスペースで連結してこの `scope` 文字列を作成します         |

**Return Type**

`RefreshTokenTokenResponse`

**Throws**

- 取得に失敗しました

</details>

<details>
  <summary>revoke</summary>

以前に取得したリフレッシュトークンまたはアクセストークンが不要であることを認可サーバーに通知するために `/oidc/token/revocation` API へリクエストします。

**Parameters**

| Name               | Type     | Notes               |
| ------------------ | -------- | ------------------- |
| revocationEndpoint | `string` |                     |
| clientId           | `string` |                     |
| token              | `string` | 取り消すトークン    |

**HTTP リクエスト**

- エンドポイント：`/oidc/token/revocation`
- メソッド：`POST`
- コンテントタイプ：`application/x-www-form-urlencoded`
- ペイロード：

| Query Key | Type     |
| --------- | -------- |
| client_id | `string` |
| token     | `string` |

**Return Type**

`void`

**Throws**

- 取り消しに失敗しました

</details>