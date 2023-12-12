# ResponseException

クラス ResponseException(型: [ResponseException.Type](-type/index.md), 原因: [Throwable](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/index.html)? = null) : [RuntimeException](https://docs.oracle.com/javase/8/docs/api/java/lang/RuntimeException.html)

## コンストラクター

| 名前              | 概要                                                                                                                                                                      |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ResponseException | fun ResponseException(型: [ResponseException.Type](-type/index.md), 原因: [Throwable](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/index.html)? = null) |

## 型

| 名前                   | 概要                                                                                                                                                    |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Type](-type/index.md) | 列挙 [Type](-type/index.md) : [Enum](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-enum/index.html)&lt;[ResponseException.Type](-type/index.md)&gt; |

## プロパティ

| 名前            | 概要                                                                                                       |
| --------------- | ------------------------------------------------------------------------------------------------------------- |
| responseContent | var responseContent: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)? = null |
| responseMessage | var responseMessage: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)? = null |