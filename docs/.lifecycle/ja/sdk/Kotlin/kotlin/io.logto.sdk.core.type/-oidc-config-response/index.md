# OidcConfigResponse

データクラスOidcConfigResponse（認可エンドポイント：[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)、トークンエンドポイント：[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)、エンドセッションエンドポイント：[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)、jwksUri：[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)、発行者：[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)、失効エンドポイント：[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)）

## コンストラクタ

| 名前               | 概要                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| OidcConfigResponse | fun OidcConfigResponse（authorizationEndpoint：[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)、tokenEndpoint：[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)、endSessionEndpoint：[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)、jwksUri：[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)、issuer：[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)、revocationEndpoint：[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)） |

## プロパティ

| 名前                  | 概要                                                                                                     |
| --------------------- | ----------------------------------------------------------------------------------------------------------- |
| authorizationEndpoint | val authorizationEndpoint: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |
| endSessionEndpoint    | val endSessionEndpoint: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)    |
| issuer                | val issuer: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)                |
| jwksUri               | val jwksUri: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)               |
| revocationEndpoint    | val revocationEndpoint: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)    |
| tokenEndpoint         | val tokenEndpoint: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)         |