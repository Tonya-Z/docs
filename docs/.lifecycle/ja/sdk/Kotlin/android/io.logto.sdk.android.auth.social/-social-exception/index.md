# SocialException

class SocialException(type: [SocialException.Type](-type/index.md)) : [RuntimeException](https://developer.android.com/reference/kotlin/java/lang/RuntimeException.html)

## コンストラクタ

| 名前             | 概要                                                                |
| --------------- | ------------------------------------------------------------------ |
| SocialException | fun SocialException(type: [SocialException.Type](-type/index.md)) |

## タイプ

| 名前                   | 概要                                                                                                                                                     |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Type](-type/index.md) | enum [Type](-type/index.md) : [Enum](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-enum/index.html)&lt;[SocialException.Type](-type/index.md)&gt; |

## プロパティ

| 名前          | 概要                                                                                                           |
| ------------- | ------------------------------------------------------------------------------------------------------------- |
| code          | val code: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)                    |
| socialCode    | var socialCode: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)? = null      |
| socialMessage | var socialMessage: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)? = null   |