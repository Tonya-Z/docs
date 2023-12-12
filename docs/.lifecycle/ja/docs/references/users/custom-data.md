---
sidebar_label: カスタムデータ
sidebar_position: 2
---

# カスタムデータ

_custom_data_ は、事前に定義されたユーザープロパティにリストされていない追加のユーザー情報を保存します。

_custom_data_ を使用して、以下のことができます:

- ユーザーが特定のアクションを行ったかどうかを記録すること。たとえば、ウェルカムページを見たかどうかなど。
- ユーザープロファイルにアプリケーション固有のデータを保存すること。たとえば、ユーザーの使用言語やアプリケーションごとの外観など。
- ユーザーに関連するその他の任意のデータを維持すること。

Logto の管理者ユーザーのサンプル _custom_data_:

```json
{
  "adminConsolePreferences": {
    "language": "en",
    "appearanceMode": "system",
    "experienceNoticeConfirmed": true
  },
  "customDataFoo": {
    "foo": "foo"
  },
  "customDataBar": {
    "bar": "bar"
  }
}
```

各ユーザーの _custom_data_ は、個々のJSONオブジェクトに保存されます。

:::caution カスタムデータに機密データを入れないでください

管理APIを使用して _custom_data_ を含むユーザープロファイルを取得し、フロントエンドアプリケーションや外部バックエンドサービスに送信することができます。
そのため、_custom_data_ に機密情報を入れると、データ漏洩の原因となる可能性があります。

機密情報を _custom_data_ に入れたい場合は、まずそれを暗号化することをお勧めします。
暗号化/復号化は、バックエンドサービスなどの信頼できるパーティでのみ行い、フロントエンドアプリケーションで行わないようにしてください。
これにより、ユーザーの _custom_data_ が間違って漏洩した場合の損失を最小限に抑えることができます。

:::

Admin ConsoleまたはManagement APIを使用して、ユーザーの _custom_data_ を更新できます。
たとえば、<a href="/api/#tag/Users/paths/~1api~1users~1:userId/patch" target="_blank">`PATCH /api/users/:userId`</a>のようなものです。

:::caution 注意して更新してください

ユーザーの _custom_data_ を更新すると、ストレージ内の元の内容が完全に上書きされます。

たとえば、update _custom_data_ API を呼び出す入力が次のような場合（元の _custom_data_ が前に表示されたサンプルデータであるとします）：

```json
{
  "customDataBaz": {
    "baz": "baz"
  }
}
```

すると、更新後の _custom_data_ の値は次のようになります：

```json
{
  "customDataBaz": {
    "baz": "baz"
  }
}
```

つまり、更新されたフィールドの値は、古い値とは何の関係もありません。

:::