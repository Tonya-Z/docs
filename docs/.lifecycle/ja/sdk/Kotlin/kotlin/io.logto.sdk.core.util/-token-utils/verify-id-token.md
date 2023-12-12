# verifyIdToken

`fun verifyIdToken(idToken: String, clientId: String, issuer: String, jwks: JsonWebKeySet)`

IDトークンの検証

## パラメーター

| 名前      | 説明                                    |
| --------- | ---------------------------------------- |
| idToken   | 検証する生の文字列IDトークン            |
| clientId  | このIDトークンに関連するクライアントID  |
| issuer    | IDトークンの発行者                      |
| jwks      | Idpによって発行されたJSON Web Key Set  |

## 例外

| 例外                                      |
| ----------------------------------------- |
| org.jose4j.jwt.consumer.InvalidJwtException |