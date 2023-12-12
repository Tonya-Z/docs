# IdTokenClaims

IdTokenClaimsデータクラス

```kotlin
data class IdTokenClaims(val iss: String, val sub: String, val aud: String, val exp: Long, val iat: Long, val atHash: String?)
```

## コンストラクタ

| 名前          | 要約                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IdTokenClaims | fun IdTokenClaims(iss: String, sub: String, aud: String, exp: Long, iat: Long, atHash: String?) |

## プロパティ

| 名前     | 要約                                                                                      |
| -------- | ---------------------------------------------------------------------------------------- |
| name     | val name: String?                                                                         |
| username | val username: String?                                                                     |
| avatar   | val avatar: String?                                                                       |
| atHash   | val atHash: String?                                                                       |
| aud      | val aud: String                                                                           |
| exp      | val exp: Long                                                                             |
| iat      | val iat: Long                                                                             |
| iss      | val iss: String                                                                           |
| sub      | val sub: String                                                                           |