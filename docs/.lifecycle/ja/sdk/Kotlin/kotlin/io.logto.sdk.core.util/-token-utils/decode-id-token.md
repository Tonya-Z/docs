# decodeIdToken

```kotlin
fun decodeIdToken(token: String): IdTokenClaims
```

IDトークンを検証せずにデコードします。

#### 戻り値

IdTokenClaims

## パラメーター

| 名前  | 説明                                |
| ----- | ----------------------------------- |
| token | デコードする行文字列のIDトークン    |

## 例外

| 例外                                        |
| ------------------------------------------- |
| org.jose4j.jwt.consumer.InvalidJwtException |