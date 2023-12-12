# SocialSession

インターフェース SocialSession

## 関数

| 名前  | 概要              |
| ----- | -------------------- |
| start | abstract fun start() |

## プロパティ

| 名前        | 概要                                                                                                                                                                                                                                     |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| callbackUri | abstract val callbackUri: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)                                                                  |
| completion  | abstract val completion: [Completion](../../io.logto.sdk.android.completion/-completion/index.md)&lt;[SocialException](../-social-exception/index.md), [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)&gt; |
| context     | abstract val context: [Activity](https://developer.android.com/reference/kotlin/android/app/Activity.html)                                                                  |
| redirectTo  | abstract val redirectTo: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)                                                                   |

## 継承クラス

| 名前                                                                                                 |
| ---------------------------------------------------------------------------------------------------- |
| [AlipaySocialSession](../../io.logto.sdk.android.auth.social.alipay/-alipay-social-session/index.md) |
| [WebSocialSession](../../io.logto.sdk.android.auth.social.web/-web-social-session/index.md)          |
| [WechatSocialSession](../../io.logto.sdk.android.auth.social.wechat/-wechat-social-session/index.md) |