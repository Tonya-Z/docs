```
ユーザーの認可状態に応じて、[JWT](https://datatracker.ietf.org/doc/html/rfc7519)形式の`access_token`がLogtoによって付与・発行され、要求されたAPIリソース専用になります。有効期限と共に暗号化され、対象オーディエンスに制限されます。このトークンには、このリクエストの権限を表すために必要な情報が全て含まれています。

トークンをHTTPヘッダーの`Authorization`フィールドにBearer形式（`Bearer YOUR_TOKEN`）で入れれば、それで準備完了です。

:::note
Bearer Tokenの統合フローは、使用しているフレームワークやリクエスターによって異なることがあります。リクエストの`Authorization`ヘッダーを適用する方法は、自分に合った方法を選択してください。
:::
```