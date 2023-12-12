# withReservedScopes

fun withReservedScopes(scopes: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)&lt;[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)&gt;?): [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)&lt;[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)&gt;

スコープリストに `open_id` と `offline_access` が含まれていることを保証します

#### 戻り値

`open_id` と `offline_access` を含むスコープリスト

## パラメーター

| 名前   | 説明             |
| ------ | ---------------- |
| scopes | 元のスコープリスト |