# verifyAndParseCodeFromCallbackUri

fun verifyAndParseCodeFromCallbackUri(callbackUri: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), redirectUri: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), state: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)

コールバックURIからコードを検証し、解析します

#### 戻り値

認証コード

## パラメーター

| 名称         | 説明                             |
| ------------ | -------------------------------- |
| callbackUri  | 検証されるべきコールバックURI    |
| redirectUri  | サインイン時のリダイレクトURI    |
| state        | サインイン時の状態              |

## 例外

| 例外                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------- |
| [io.logto.sdk.core.exception.CallbackUriVerificationException](../../io.logto.sdk.core.exception/-callback-uri-verification-exception/index.md) |