# LogtoWebViewSocialHandler

LogtoWebViewSocialHandlerクラスは、webView: [WebView](https://developer.android.com/reference/kotlin/android/webkit/WebView.html)とhostActivity: [Activity](https://developer.android.com/reference/kotlin/android/app/Activity.html)を持つコンストラクタを定義します。

## Constructors（コンストラクタ）

| Name                      | Summary                                                                                                                                                                                                                           |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| LogtoWebViewSocialHandler | fun LogtoWebViewSocialHandler(webView: [WebView](https://developer.android.com/reference/kotlin/android/webkit/WebView.html), hostActivity: [Activity](https://developer.android.com/reference/kotlin/android/app/Activity.html)) |

## Types（タイプ）

| Name                             | Summary                                 |
| -------------------------------- | --------------------------------------- |
| [Companion](-companion/index.md) | object [Companion](-companion/index.md) |

## Functions（機能）

| Name                  | Summary                                                                                                       |
| --------------------- | ------------------------------------------------------------------------------------------------------------- |
| getInjectSocialScript | fun getInjectSocialScript(): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |
| postMessage           | fun postMessage(jsonData: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html))   |