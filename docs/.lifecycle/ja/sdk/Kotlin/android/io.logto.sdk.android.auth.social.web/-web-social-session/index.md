# WebSocialSession

class WebSocialSession(val コンテキスト: [Activity](https://developer.android.com/reference/kotlin/android/app/Activity.html), val リダイレクト先: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), val コールバックURI: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), val 完了処理: [Completion](../../io.logto.sdk.android.completion/-completion/index.md)&lt;[SocialException](../../io.logto.sdk.android.auth.social/-social-exception/index.md), [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)&gt;) : [SocialSession](../../io.logto.sdk.android.auth.social/-social-session/index.md)

## コンストラクタ

| 名前             | 概要                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| WebSocialSession | fun WebSocialSession(コンテキスト: [Activity](https://developer.android.com/reference/kotlin/android/app/Activity.html), リダイレクト先: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), コールバックURI: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), 完了処理: [Completion](../../io.logto.sdk.android.completion/-completion/index.md)&lt;[SocialException](../../io.logto.sdk.android.auth.social/-social-exception/index.md), [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)&gt;) |

## 関数

| 名前         | 概要                                                                                             |
| ------------ | ------------------------------------------------------------------------------------------------- |
| handleResult | fun handleResult(データ: [Uri](https://developer.android.com/reference/kotlin/android/net/Uri.html)) |
| start        | open override fun start()                                                                         |

## プロパティ

| 名前        | 概要                                                                                                                                                                                                                                                                                          |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| コールバックURI | open override val コールバックURI: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)                                                                                                                                                                               |
| 完了処理      | open override val 完了処理: [Completion](../../io.logto.sdk.android.completion/-completion/index.md)&lt;[SocialException](../../io.logto.sdk.android.auth.social/-social-exception/index.md), [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)&gt; |
| コンテキスト   | open override val コンテキスト: [Activity](https://developer.android.com/reference/kotlin/android/app/Activity.html)                                                                                                                                                                               |
| リダイレクト先  | open override val リダイレクト先: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)                                                                                                                                                                                |