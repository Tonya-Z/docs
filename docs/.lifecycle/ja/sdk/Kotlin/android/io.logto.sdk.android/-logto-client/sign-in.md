# signIn

fun signIn(context: [Activity](https://developer.android.com/reference/kotlin/android/app/Activity.html), redirectUri: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), completion: [EmptyCompletion](../../io.logto.sdk.android.completion/-empty-completion/index.md)&lt;[LogtoException](../../io.logto.sdk.android.exception/-logto-exception/index.md)&gt;)

サインイン

## パラメータ

| 名前         | 要約                                                     |
| ------------ | ---------------------------------------------------------- |
| context      | サインインアクションを実行するアクティビティ。            |
| redirectUri  | このアプリケーションのリダイレクトURIの1つ。             |
| completion   | サインインの結果を処理する完了ハンドラ。                 |