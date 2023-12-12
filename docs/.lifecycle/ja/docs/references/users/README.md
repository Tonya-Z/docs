# 👨‍👩‍👧‍👦 ユーザー

ユーザーはアイデンティティサービスの主要なエンティティです。
以下で、ユーザーに関連する概念と詳細について説明します。

## プロフィール

各ユーザーには、[ユーザー情報](#property-reference)を含むプロフィールがあります。

次の種類のデータで構成されています。

- [ソーシャルアイデンティティ](./social-identities.md)：ソーシャルコネクタ（Facebook、GitHub、WeChatなど）で取得されたユーザー情報を格納します。
- [カスタムデータ](./custom-data.md)：事前定義されたユーザープロパティにリストされていない追加のユーザー情報を格納します。たとえば、ユーザーの選好カラーや言語などです。
- [基本データ](#basic-data)：ユーザープロファイルからの基本情報です。ユーザーID、ユーザー名、メールアドレス、電話番号、前回のサインイン時刻など、_アイデンティティ_と_カスタムデータ_を除くすべてのユーザープロパティを格納します。

以下は、Facebookへのサインインから取得したユーザーデータのサンプルです。

```json
{
  "id": "iHXPuSb9eMzt",
  "username": null,
  "primaryEmail": null,
  "primaryPhone": null,
  "name": "John Joe",
  "avatar": "https://example.com/avatar.png",
  "customData": {
    "preferences": {
      "language": "en",
      "color": "#f236c9"
    }
  },
  "identities": {
    "facebook": {
      "userId": "106077000000000",
      "details": {
        "id": "106077000000000",
        "name": "John Joe",
        "email": "johnjoe@logto.io",
        "avatar": "https://example.com/avatar.png"
      }
    }
  },
  "lastSignInAt": 1655799453171,
  "applicationId": "admin_console"
}
```

[管理コンソール](../../../docs/recipes/manage-users/admin-console.md#view-and-update-user-profile)や[管理API](../../../docs/recipes/manage-users/management-api.md)を使用して、ユーザープロフィールをクエリできます。たとえば、<a href="/api/#tag/Users/paths/~1api~1users~1:userId/get" target="_blank">`GET /api/users/:userId`</a>など。

## 基本データ

ユーザーの基本データのすべてのプロパティを説明します。

### id

_id_ はLogto内でユーザーを識別するためのユニークな自動生成キーです。

### username

_username_ は _ユーザー名_ およびパスワードでのサインインに使用されます。

その値は、ユーザーが最初に登録したユーザー名から取得されます。`null`である可能性があります。その非null値は、128文字を超えず、文字、数字、アンダースコア（`_`）のみを含み、数字で始まらない必要があります。

### primary_email

_primary_email_ はユーザーのメールアドレスで、メールアドレスとパスコードでのサインインに使用されます。

その値は、通常、ユーザーが最初に登録したメールアドレスから取得されます。`null`である可能性があります。最大長は128です。

### primary_phone

_primary_phone_ はユーザーの電話番号で、SMSでの電話番号とパスコードでのサインインに使用されます。

その値は、通常、ユーザーが最初に登録した電話番号から取得されます。`null`である可能性があります。非null値は、[国際電話番号](https://en.wikipedia.org/wiki/List_of_country_calling_codes)でプレフィックス付けられた数字を含んでいる必要があります（プラス記号 `+` は除く）。

### name

_name_ はユーザーのフルネームです。最大長は128です。

### avatar

_avatar_ はユーザーのアバター画像を指すURLです。最大長は2048です。

ユーザーがFacebookやWeChatなどのソーシャルコネクタで登録した場合、その値はソーシャルユーザー情報から取得される可能性があります。

### application_id

[_application_id_](../applications/README.mdx#application-id) の値は、ユーザーが最初にサインインしたアプリケーションから取得されます。`null`である可能性があります。

### last_signed_in_at

_last_signed_in_at_ は、ユーザーが最後にサインインした時刻とタイムゾーンを示すタイムスタンプです。

### password_encrypted

_password_encrypted_ は、ユーザーの暗号化されたパスワードを格納するために使用されます。

その値は、ユーザーが最初に登録したパスワードから取得されます。`null`である可能性があります。非null値の場合、暗号化される前の内容は少なくとも6文字である必要があります。

### password_encryption_method

_password_encryption_method_ は、ユーザーのパスワードを暗号化するために使用されます。その値は、ユーザーがユーザー名とパスワードで登録したときに初期化されます。`null`である可能性があります。

Logtoは、デフォルトで[Argon2](https://en.wikipedia.org/wiki/Argon2)の実装[node-argon2](https://github.com/ranisalt/node-argon2)を使用して暗号化メソッドを利用しています。詳細についてはリファレンスを参照してください。

ユーザーのパスワードが `123456` である場合の _password_encrypted_ と _password_encryption_method_ のサンプル：

```json
{
  "password_encryption_method": "Argon2i",
  "password_encrypted": "$argon2i$v=19$m=4096,t=10,p=1$aZzrqpSX45DOo+9uEW6XVw$O4MdirF0mtuWWWz68eyNAt2u1FzzV3m3g00oIxmEr0U"
}
```

### is_suspended

_is_suspended_ は、ユーザーが停止されているかどうかを示すブール値です。この値は[Logto Management API](../../../docs/recipes/manage-users/management-api.md)を呼び出すことによって管理できます。ユーザーが停止されると、事前に付与されたリフレッシュトークンはすぐに取り消され、そのユーザーはもはやLogtoによって認証されなくなります。

## プロパティリファレンス

(_password_encrypted_ および _password_encryption_method_ を除く) 以下のプロパティは、ユーザープロフィールで表示されます。つまり、[管理API](../../../docs/recipes/manage-users/management-api.md)を使用してそれらをクエリできます。

| 名前                                                      | タイプ   | 説明                                             | ユニーク | 必須    |
| --------------------------------------------------------- | ------- | ----------------------------------------------  | ------ | -------- |
| [id](#id)                                                 | string  | ユニークな識別子                                  | ✅     | ✅       |
| [username](#username)                                     | string  | サインイン用のユーザー名                           | ✅     | ❌       |
| [primary_email](#primary_email)                           | string  | プライマリメールアドレス                           | ✅     | ❌       |
| [primary_phone](#primary_phone)                           | string  | プライマリ電話番号                               | ✅     | ❌       |
| [name](#name)                                             | string  | フルネーム                                       | ❌     | ❌       |
| [avatar](#avatar)                                         | string  | ユーザーのアバター画像を指すURL                    | ❌     | ❌       |
| [identities](./social-identities.md)                      | object  | ソーシャルサインインから取得されたユーザー情報       | ❌     | ✅       |
| [custom_data](./custom-data.md)                           | object  | カスタマイズ可能なプロパティ内の追加情報             | ❌     | ✅       |
| [application_id](#application_id)                         | string  | ユーザーが最初に登録したアプリケーションID          | ❌     | ✅       |
| [last_sign_in_at](#last_signed_in_at)                     | 日時     | ユーザーが最後にサインインした時刻                  | ❌     | ✅       |
| [password_encrypted](#password_encrypted)                 | string  | 暗号化されたパスワード                              | ❌     | ❌       |
| [password_encryption_method](#password_encryption_method) | string  | パスワードの暗号化方法                             | ❌     | ❌       |
| [is_suspended](#is_suspended)                             | bool   | ユーザー停止マーク                                  | ❌     | ✅       |

:::note

- **Unique**: データベーステーブルのプロパティに入力された値の[一意性](https://www.postgresql.org/docs/current/ddl-constraints.html#DDL-CONSTRAINTS-UNIQUE-CONSTRAINTS)を確保します。
- **Required**: データベーステーブルのプロパティに入力された値が `NULL` でないことを保証します。

:::