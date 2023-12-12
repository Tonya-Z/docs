# CallbackUriVerificationException

`CallbackUriVerificationException`クラスは、[CallbackUriVerificationException.Type](-type/index.md)の種類と、オプションで[Throwable](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/index.html)の原因を指定して作成することができます。これは[RuntimeException](https://docs.oracle.com/javase/8/docs/api/java/lang/RuntimeException.html)を継承しています。

## コンストラクタ

| 名前                             | 要約                                                                                                                                              |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| CallbackUriVerificationException | fun CallbackUriVerificationException(type: [CallbackUriVerificationException.Type](-type/index.md), cause: [Throwable](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/index.html)? = null) |

## 種類

| 名前                  | 要約                                                                                                          |
| --------------------- | ------------------------------------------------------------------------------------------------------------- |
| [Type](-type/index.md) | enum [Type](-type/index.md) : [Enum](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-enum/index.html)&lt;[CallbackUriVerificationException.Type](-type/index.md)&gt; |

## プロパティ

| 名前      | 要約                                                                                                  |
| --------- | ------------------------------------------------------------------------------------------------------- |
| error     | var error: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)? = null     |
| errorDesc | var errorDesc: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)? = null |