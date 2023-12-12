# LogtoClient

[LogtoClient](../../io.logto.sdk.android.type/-logto-config/index.md)のオープンクラスで、[Application](https://developer.android.com/reference/kotlin/android/app/Application.html)のアプリケーションとともに利用します。

## コンストラクタ

| 名前        | 概要                                                                                                                                                                                            |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| LogtoClient | fun LogtoClient(logtoConfig: [LogtoConfig](../../io.logto.sdk.android.type/-logto-config/index.md), application: [Application](https://developer.android.com/reference/kotlin/android/app/Application.html)) |

## 関数

| 名前                                           | 概要                                                                                                                                                                                                                                   |
| ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [getAccessToken](get-access-token-constructor) | fun [getAccessToken](get-access-token-constructor)(completion: [Completion](../../io.logto.sdk.android.completion/-completion/index.md)&lt;[LogtoException](../../io.logto.sdk.android.exception/-logto-exception/index.md), [AccessToken](../../io.logto.sdk.android.type/-access-token/index.md)&gt;)<br/>fun [getAccessToken](get-access-token-constructor)(resource: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?, completion: [Completion](../../io.logto.sdk.android.completion/-completion/index.md)&lt;[LogtoException](../../io.logto.sdk.android.exception/-logto-exception/index.md), [AccessToken](../../io.logto.sdk.android.type/-access-token/index.md)&gt;)<br/>アクセストークンを取得します |
| [getIdTokenClaims](get-id-token-claims.md)     | fun [getIdTokenClaims](get-id-token-claims.md)(completion: [Completion](../../io.logto.sdk.android.completion/-completion/index.md)&lt;[LogtoException](../../io.logto.sdk.android.exception/-logto-exception/index.md), IdTokenClaims&gt;)<br/>IDトークンのクレームを取得します                                                                                              |
| [signIn](sign-in.md)                           | fun [signIn](sign-in.md)(context: [Activity](https://developer.android.com/reference/kotlin/android/app/Activity.html), redirectUri: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), completion: [EmptyCompletion](../../io.logto.sdk.android.completion/-empty-completion/index.md)&lt;[LogtoException](../../io.logto.sdk.android.exception/-logto-exception/index.md)&gt;)<br/>サインインします                                                                                                                     |
| [signOut](sign-out.md)                         | fun [signOut](sign-out.md)(completion: [EmptyCompletion](../../io.logto.sdk.android.completion/-empty-completion/index.md)&lt;[LogtoException](../../io.logto.sdk.android.exception/-logto-exception/index.md)&gt;? = null)<br/>サインアウトします                                                                                                                      |

## プロパティ

| 名前                                   | 概要                                                                                                                                                                     |
| -------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [isAuthenticated](is-authenticated.md) | val [isAuthenticated](is-authenticated.md): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br/>ユーザーが認証されているかどうかを示します。 |
| [logtoConfig](logto-config.md)         | val [logtoConfig](logto-config.md): [LogtoConfig](../../io.logto.sdk.android.type/-logto-config/index.md)<br/>Logtoクライアントの設定情報                                           |