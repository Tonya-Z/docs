# AlipaySocialSession

AlipaySocialSessionクラスは、[Activity](https://developer.android.com/reference/kotlin/android/app/Activity.html)のコンテキスト、[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)のリダイレクト先、[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)のコールバックURI、[SocialException](../../io.logto.sdk.android.auth.social/-social-exception/index.md)、[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)を引数に持つ[Completion](../../io.logto.sdk.android.completion/-completion/index.md)を指定して、[SocialSession](../../io.logto.sdk.android.auth.social/-social-session/index.md)を作成します。

## コンストラクタ

| 名前                | 要約                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AlipaySocialSession | fun AlipaySocialSession(context: [Activity](https://developer.android.com/reference/kotlin/android/app/Activity.html), redirectTo: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), callbackUri: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), completion: [Completion](../../io.logto.sdk.android.completion/-completion/index.md)&lt;[SocialException](../../io.logto.sdk.android.auth.social/-social-exception/index.md), [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)&gt;) |

## タイプ

| 名前                             | 要約                                 |
| -------------------------------- | --------------------------------------- |
| [Companion](-companion/index.md) | object [Companion](-companion/index.md) |

## 関数

| 名前  | 要約                   |
| ----- | ------------------------- |
| start | open override fun start() |

## プロパティ

| 名前        | 要約                                                                                                                                                                                                                                                                              |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| callbackUri | open override val callbackUri: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)                                                                                                                                                                      |
| completion  | open override val completion: [Completion](../../io.logto.sdk.android.completion/-completion/index.md)&lt;[SocialException](../../io.logto.sdk.android.auth.social/-social-exception/index.md), [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)&gt; |
| context     | open override val context: [Activity](https://developer.android.com/reference/kotlin/android/app/Activity.html)                                                                                                                                                                      |
| redirectTo  | open override val redirectTo: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)                                                                                                                                                                       |