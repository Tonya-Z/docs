---
sidebar_label:ソーシャルアイデンティティ
sidebar_position:1
---

# ソーシャルアイデンティティ

「Identities」には、ソーシャルコネクターを使用したユーザー情報が含まれています。
各ユーザーの「Identities」は個々のJSONオブジェクトに格納されます。

ユーザー情報はソーシャルアイデンティティプロバイダー（ソーシャルネットワークプラットフォーム）によって異なり、通常、以下を含みます。

- [アイデンティティプロバイダーのターゲット](../../../docs/references/connectors/README.mdx#target)、例えば「facebook」、「google」、「wechat」など
- このプロバイダーのユーザー固有の識別子
- ユーザーの名前
- ユーザーの確認済みメールアドレス
- ユーザーのアバター

ユーザーアカウントはソーシャルコネクターを介して複数のソーシャルアイデンティティプロバイダーにリンクする可能性があります。
これらのプロバイダーから取得した対応するユーザー情報は、「Identities」オブジェクトに格納されます。

WeChatとFacebookの両方でサインインしたユーザーのサンプル「Identities」：

```json
{
  "facebook": {
    "userId": "5110888888888888",
    "details": {
      "id": "5110888888888888",
      "name": "John Joe",
      "email": "johnjoe@logto.io",
      "avatar": "https://example.com/avatar.png"
    }
  },
  "wechat": {
    "userId": "O8sU-6JWMMNZzuXo6-xaEjouyQZ8",
    "details": {
      "id": "O8sU-6JWMMNZzuXo6-xaEjouyQZ8",
      "name": "John Joe",
      "avatar": "https://example.com/avatar.png"
    }
  }
}
```

:::info

「Identities」は「管理コンソール」や「管理API」を使用して更新することはできません。

ユーザーがソーシャルコネクターを使用してサインインするたびに、その「Identities」は自動的にアイデンティティプロバイダーからインポートまたは更新されます。

:::