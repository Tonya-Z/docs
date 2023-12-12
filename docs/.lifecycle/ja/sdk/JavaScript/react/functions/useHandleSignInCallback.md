**useHandleSignInCallback**(`returnToPageUrl?`): `Object`

#### パラメータ

| 名前             | タイプ   | デフォルト値            |
| :---------------- | :------- | :----------------------- |
| `returnToPageUrl` | `string` | `window.location.origin` |

#### 戻り値

`Object`

| 名前             | タイプ                 |
| :---------------- | :--------------------- |
| `error`           | `undefined` \| `Error` |
| `isAuthenticated` | `boolean`              |
| `isLoading`       | `boolean`              |

#### で定義

[packages/react/src/hooks/index.ts:53](https://github.com/logto-io/js/blob/5254dee/packages/react/src/hooks/index.ts#L53)