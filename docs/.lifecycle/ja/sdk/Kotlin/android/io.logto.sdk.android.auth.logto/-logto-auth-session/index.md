# LogtoAuthSession

```kotlin
class LogtoAuthSession(val context: [Activity](https://developer.android.com/reference/kotlin/android/app/Activity.html), val logtoConfig: [LogtoConfig](../../io.logto.sdk.android.type/-logto-config/index.md), val oidcConfig: OidcConfigResponse, val redirectUri: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), completion: [Completion](../../io.logto.sdk.android.completion/-completion/index.md)<[LogtoException](../../io.logto.sdk.android.exception/-logto-exception/index.md), CodeTokenResponse>)
```

## コンストラクター

| 名前             | 概要                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| LogtoAuthSession | fun LogtoAuthSession(context: [Activity](https://developer.android.com/reference/kotlin/android/app/Activity.html), logtoConfig: [LogtoConfig](../../io.logto.sdk.android.type/-logto-config/index.md), oidcConfig: OidcConfigResponse, redirectUri: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), completion: [Completion](../../io.logto.sdk.android.completion/-completion/index.md)<[LogtoException](../../io.logto.sdk.android.exception/-logto-exception/index.md), CodeTokenResponse>) |

## 関数

| 名前              | 概要                                                                                                        |
| ----------------- | -------------------------------------------------------------------------------------------------------------- |
| handleCallbackUri | fun handleCallbackUri(callbackUri: [Uri](https://developer.android.com/reference/kotlin/android/net/Uri.html)) |
| handleUserCancel  | fun handleUserCancel()                                                                                         |
| start             | fun start()                                                                                                    |

## プロパティ

| 名前        | 概要                                                                                           |
| ----------- | ------------------------------------------------------------------------------------------------- |
| context     | val context: [Activity](https://developer.android.com/reference/kotlin/android/app/Activity.html) |
| logtoConfig | val logtoConfig: [LogtoConfig](../../io.logto.sdk.android.type/-logto-config/index.md)            |
| oidcConfig  | val oidcConfig: OidcConfigResponse                                                                |
| redirectUri | val redirectUri: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |