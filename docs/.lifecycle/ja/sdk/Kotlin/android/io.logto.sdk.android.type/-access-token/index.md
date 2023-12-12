# アクセストークン

data class AccessToken(val token: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), val scope: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), val expiresAt: [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html))

## コンストラクタ

| 名前         | 概要                                                                                                                                                                                                                                                                                            |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AccessToken  | fun AccessToken(token: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), scope: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), expiresAt: [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)) |

## プロパティ

| 名前       | 概要                                                                                                    |
| ---------- | ------------------------------------------------------------------------------------------------------ |
| expiresAt  | val expiresAt: [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)            |
| scope      | val scope: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)            |
| token      | val token: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)            |