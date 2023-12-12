# TokenUtils

TokenUtilsオブジェクト

## 関数

| 名前                                | 概要                                                                                                                                                                                                                                                                                                                                                           |
| ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [decodeIdToken](decode-id-token.md) | fun [decodeIdToken](decode-id-token.md)(token: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)): [IdTokenClaims](../../io.logto.sdk.core.type/-id-token-claims/index.md)<br/>検証せずにIDトークンをデコード                                                                                                                |
| [verifyIdToken](verify-id-token.md) | fun [verifyIdToken](verify-id-token.md)(idToken: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), clientId: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), issuer: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), jwks: JsonWebKeySet)<br/>IDトークンを検証 |