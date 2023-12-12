---
sidebar_label: ユーザーの詳細検索
sidebar_position: 3
---

# ユーザーの詳細検索

高度なユーザー検索条件を活用するために、直接管理APIを使用します。

## 検索リクエストの実行

ユーザーを検索するには、`GET /api/users` を使用します。他と同様に認証が必要な管理APIです。インタラクションのレシピについては、[管理APIとのやり取り](/docs/recipes/manage-users/)を参照してください。

### サンプル

**リクエスト**

```bash
curl --location --request GET 'http://<your-logto-endpoint>/api/users?search=%25alice%25'
```

**レスポンス**

`User` エンティティの配列。

```json
[
  {
    "id": "MgUzzDsyX0iB",
    "username": "alice_123",
    "primaryEmail": "alice@some.email.domain",
    "primaryPhone": null,
    "name": null,
    "avatar": null
    // ...
  }
]
```

### パラメータ

検索リクエストは以下のパラメータキーで構成されています。

- 検索キーワード: `search`, `search.*`
- フィールドの検索モード: `mode`, `mode.*` (デフォルト値は `'like'` で、使用可能なものは `['exact', 'like', 'similar_to', 'posix']`)
- 結合モード: `joint` または `jointMode` (デフォルト値は `'or'` で、使用可能なものは `['or', 'and']`)
- 大文字・小文字を区別するか: `isCaseSensitve` (デフォルト値は `false`)

このAPIには[ページネーション](/docs/recipes/manage-users/#using-pagination)が有効になっています。

いくつかの例を通じてそれらを見ていきましょう。すべての検索パラメータは、`URLSearchParams` のコンストラクタとしてフォーマットされます。

:::note
検索モードはデフォルトで `like` に設定されており、[類似文字列の検索](https://en.wikipedia.org/wiki/Approximate_string_matching)（"フジー検索"）が使用されます。
:::

:::info
すべてのフジー検索モードは、1つのフィールドに対してのみ一致する値をサポートしています。1つのフィールドに複数の値を一致させる必要がある場合は、"exact" モードを使用する必要があります。詳細については [完全一致と大文字小文字の区別](#exact-match-and-case-sensitivity) を参照してください。
:::

### 基本的なフジー検索

利用可能なすべてのフィールドでフジー検索を実行したい場合は、キー `search` に値を指定します。内部で[ `like` 演算子](https://www.postgresql.org/docs/current/functions-matching.html#FUNCTIONS-LIKE)が使用されます。

```ts
new URLSearchParams([['search', '%foo%']]);
```

この検索は、ユーザー検索の利用可能なすべてのフィールド（`id`、`primaryEmail`、`primaryPhone`、`username`、`name`）を反復処理します。

### フィールドの指定

名前だけで検索を制限したい場合はどうすれば良いですか？`name` に `foo` を含むユーザーを検索するには、`.` 記号を使用してフィールドを指定します。

```ts
new URLSearchParams([['search.name', '%foo%']]);
```

ネストされたフィールドはサポートされていません。例えば、`search.name.first` はエラーとなります。

また、複数のフィールドを同時に指定することもできます。

```ts
new URLSearchParams([
  ['search.name', '%foo%'],
  ['search.primaryEmail', '%@gmail.com'],
]);
```

名前に `foo` を含むユーザー **または** メールアドレスが `@gmail.com` で終わるユーザーを検索することを意味します。

### 結合モードの変更

APIが条件を全て満たす結果のみを返すようにしたい場合は、結合モードを `and` に設定します。

```ts
new URLSearchParams([
  ['search.name', '%foo%'],
  ['search.primaryEmail', '%@gmail.com'],
  ['joint', 'and'],
]);
```

名前に `foo` を含み、メールアドレスが `@gmail.com` で終わるユーザーを検索することを意味します。

### 完全一致と大文字小文字の区別

名前が正確に "Alice" であるユーザーを検索したい場合は、`mode.name` を使用して完全一致を行うことができます。

```ts
new URLSearchParams([
  ['search.name', 'Alice'],
  ['mode.name', 'exact'],
]);
```

`like` モード（デフォルト）を使用した場合と `exact` を指定した場合は、同様の効果があることが分かるでしょう。1つの違いは `exact` モードでは `=` を使用して比較し、`like` は `like` または `ilike` を使用するという点です。理論的には、`=` の方がパフォーマンスが良いはずです。

さらに、`exact` モードでは、複数の値を一致させることができ、これらは `or` で接続されます。

```ts
new URLSearchParams([
  ['search.name', 'Alice'],
  ['search.name', 'Bob'],
  ['mode.name', 'exact'],
]);
```

名前が "Alice" **または** "Bob" のユーザーと一致します。

デフォルトでは、大文字と小文字は区別されません。より正確にするには、検索を大文字小文字を区別するように設定します。

```ts
new URLSearchParams([
  ['search.name', 'Alice'],
  ['search.name', 'Bob'],
  ['mode.name', 'exact'],
  ['isCaseSensitive', 'true'],
]);
```

`isCaseSensitive` はグローバルな設定であるため、すべてのフィールドがこれに従います。

### 正規表現（RegEx）

PostgreSQL では、[似ている](https://www.postgresql.org/docs/current/functions-matching.html#FUNCTIONS-SIMILARTO-REGEXP) と [posix](https://www.postgresql.org/docs/current/functions-matching.html#FUNCTIONS-POSIX-REGEXP) の2種類の正規表現がサポートされています。正規表現で検索するには、`mode` を `similar_to` または `posix` に設定します。

```ts
new URLSearchParams([
  ['search', '^T.?m Scot+$'],
  ['mode', 'posix'],
]);
```

> **注意**
> `similar_to` モードは、大文字小文字を区別する検索でのみ動作します。

### 一致モードの上書き

デフォルトでは、すべてのキーワードは一般的な検索から一致モードを継承します。

```ts
new URLSearchParams([
  ['search', '^T.?m Scot+$'],
  ['mode', 'posix'],
  ['search.primaryEmail', 'tom%'], // Posixモード
  ['joint', 'and'],
]);
```

特定のフィールドに対して上書きするには:

```ts
new URLSearchParams([
  ['search', '^T.?m Scot+$'],
  ['mode', 'posix'],
  ['search.primaryEmail', 'tom%'], // Likeモード
  ['mode.primaryEmail', 'like'],
  ['search.phone', '0{3,}'], // Posixモード
  ['joint', 'and'],
]);
```