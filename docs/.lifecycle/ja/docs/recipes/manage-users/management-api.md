---
sidebar_label: Management API
sidebar_position: 2
---

# Management APIを使用してユーザーを管理する

[Management API](../../../docs/references/core/README.mdx#management-api)は、Logtoのバックエンドサービスへのアクセスを提供するAPIのコレクションです。以前に述べたように、ユーザーAPIはこのサービスの重要なコンポーネントであり、さまざまなシナリオをサポートすることができます。
:::info
[**認証**](../../../docs/references/core/README.mdx#authentication)は、Management APIを呼び出す際に必須です。
:::

ユーザー関連の[RESTful](https://en.wikipedia.org/wiki/Representational_state_transfer)APIは、ユーザーアクティビティ（ユーザーログ）を除くすべてのAPIが `/api/users` にマウントされています。ユーザーアクティビティについては `/api/logs?userId=:userId` です。

管理コンソールができることは、Management APIでもできます。

| 管理コンソール - ユーザー管理                                                                      | Management API                                                                                                 |
| :----------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------- |
| [ユーザーの一覧表示](../../../docs/recipes/manage-users/admin-console.md#list-and-search-users) | <a href="/api/#tag/Users/paths/~1api~1users/get" target="_blank"> `GET /api/users`</a>                            |
| [ユーザープロファイルの表示](../../../docs/recipes/manage-users/admin-console.md#view-and-update-user-profile) | <a href="/api/#tag/Users/paths/~1api~1users~1:userId/get" target="_blank">`GET /api/users/:userId`</a>        |
| [ユーザーアクティビティの表示](../../../docs/recipes/manage-users/admin-console.md#view-user-activities) | <a href="/api/#tag/Logs/paths/~1api~1logs/get" target="_blank">`GET /api/logs?userId=:userId`</a>             |
| [ユーザーの追加](../../../docs/recipes/manage-users/admin-console.md#add-user)                    | <a href="/api/#tag/Users/paths/~1api~1users/post" target="_blank">`POST /api/users`</a>                        |
| [ユーザープロファイルの更新](../../../docs/recipes/manage-users/admin-console.md#view-and-update-user-profile) | <a href="/api/#tag/Users/paths/~1api~1users~1:userId/patch" target="_blank">`PATCH /api/users/:userId`</a> |
| [ユーザーパスワードのリセット](../../../docs/recipes/manage-users/admin-console.md#reset-user-password) | <a href="/api/#tag/Users/paths/~1api~1users~1:userId~1password/patch" target="_blank">`PATCH /api/users/:userId/password`</a> |
| [ユーザーの削除](../../../docs/recipes/manage-users/admin-console.md#delete-user)               | <a href="/api/#tag/Users/paths/~1api~1users~1:userId/delete" target="_blank">`DELETE /api/users/:userId`</a>   |
| [ソーシャル接続の削除](../../../docs/recipes/manage-users/admin-console.md#view-and-update-user-profile) | <a href="/api/#tag/Users/paths/~1api~1users~1:userId~1identities~1:target/delete" target="_blank">`DELETE /api/users/:userId/identities/:target`</a> |
| ユーザーの一時停止（管理コンソールでは利用できません）                                   | <a href="/api/#tag/Users/paths/~1api~1users~1:userId~1password/patch" target="_blank">`PATCH /api/users/:userId/is-suspended`</a> |

詳細については、<a href="/api/#tag/Users" target="_blank">API リファレンス</a>を参照してください。