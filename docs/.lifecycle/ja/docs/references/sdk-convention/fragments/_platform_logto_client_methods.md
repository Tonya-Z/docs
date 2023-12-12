<details>
  <summary>constructor</summary>

**パラメータ**

| パラメータ   | タイプ          |
| ----------- | ------------- |
| logtoConfig | `LogtoConfig` |

**戻り値のタイプ**

`LogtoClient`

**ノート**

- 必要に応じて追加のパラメータを追加できます。
- logtoConfig で usePersistStorage が有効になっている場合、プラットフォームSDKは以下の機能を提供します:
  - `clientId` を元に一意のキーで永続データを保存します。
  - 初期化時にローカルマシンから `refreshToken` と `idToken` をロードします。
  - `Core.fetchTokenByAuthorizationCode` および `Core.fetchTokenByRefreshToken` で `refreshToken` と `idToken` をローカルに保存します。

</details>

<details>
  <summary>isAuthenticated</summary>

ユーザーが認証されているかどうかを知るためのものです。

ゲッターとしても定義できます。

ユーザーは認証されていると見なされます:

- ID トークンを正常に取得している場合。
- ローカルマシンから ID トークンをロードしている場合。

**パラメータ**

なし

**戻り値のタイプ**

`boolean`

</details>

<details>
  <summary>SignIn</summary>

このメソッドはサインインフローを開始し、プラットフォームSDKがサインインリダイレクトプロセスを含む認証の完了に必要なすべてのステップを処理する必要があります。

このメソッドが正常に呼び出された後、ユーザーは認証されます。

サインインプロセスは Core SDK 関数に依存します:

- `generateSignInUri`
- `verifyAndParseCodeFromCallbackUri`
- `fetchTokenByAuthorizationCode`

ノート:

- `generateSignInUri` に必要なリソースが含まれているため、`fetchTokenByAuthorizationCode` 関数にリソースを渡す必要はありません。

**パラメータ**

| パラメータ   | タイプ     |
| ----------- | -------- |
| redirectUri | `string` |

**戻り値のタイプ**

`void`

**例外**

- このサインインプロセス中に発生したエラー。

</details>

<details>
  <summary>SignOut</summary>

サインアウトプロセスは以下の手順に従う必要があります:

1. ローカルストレージ、クッキー、永続データ、またはその他の何かをクリアします。
2. `Core.revoke` を使用して取得したリフレッシュトークンを取り消します（リフレッシュトークンが取り消されると、Logtoサービスは関連するすべてのトークンを取り消します）。
3. ステップ 1でサインインページのセッションがクリアされない場合は、ユーザーを Logto のサインアウトエンドポイントにリダイレクトします。

ノート:

- ステップ 2では、`Core.revoke` は非同期呼び出しであり、失敗してもサインアウトプロセスはブロックされません。
- ステップ 3では、`Core.generateSignOutUri` を使用して、Logto のサインアウトエンドポイントを生成します。

**パラメータ**

| パラメータ             | タイプ     | 必須     | デフォルト値 |
| --------------------- | -------- | -------- | ------------- |
| postLogoutRedirectUri | `string` |          | `null`        |

**戻り値のタイプ**

`void`

**例外**

- このサインアウトプロセス中に発生したエラー。

</details>

<details>
  <summary>getAccessToken</summary>

`getAccessToken` は `accessTokenMap` から `resource` および `scope` によって `AccessToken` を取得し、その `AccessToken` の `token` 値を返します。

Logto V1 ではカスタムスコープはサポートしていないため、`scope` は `null` に設定します。

**ノート**

- 対応する `AccessToken` を見つけられない場合は、必要なトークンを取得するために `Core.fetchTokenByRefreshToken` アクションを実行します。
- `accessToken` が期限切れでない場合、その内部の `token` 値を返します。
- `accessToken` が期限切れの場合は、新しい `accessToken` を取得し、ローカルの `accessTokenMap` を更新し、内部の新しい `token` 値を返します。
- `Core.fetchTokenByRefreshToken` が失敗した場合は、発生した例外とともにユーザーに通知します。
- リフレッシュトークンが見つからない場合は、未承認の例外が発生したことをユーザーに通知します。
- サインイン後に `refreshToken` を取得しなければ、`Core.fetchTokenByRefreshToken` アクションを実行することはできません。

**パラメータ**

| パラメータ | タイプ     | 必須     | デフォルト値 |
| --------- | -------- | -------- | ------------- |
| リソース  | `string` |          | `null`        |

**戻り値のタイプ**

`string`

**例外**

- ユーザーが認証されていない。
- 入力の `resource` が `logtoConfig` に設定されていない。
- `Core.fetchTokenByRefreshToken` の前にリフレッシュトークンが見つからない。
- `Core.fetchTokenByRefreshToken` が失敗した。

</details>

<details>
  <summary>getIdTokenClaims</summary>

`getIdTokenClaims` は `idToken` プロパティのクレームを持つオブジェクトを返します。

**パラメータ**

なし

**戻り値のタイプ**

`IdTokenClaims`

**例外**

- ユーザーが認証されていない。

</details>