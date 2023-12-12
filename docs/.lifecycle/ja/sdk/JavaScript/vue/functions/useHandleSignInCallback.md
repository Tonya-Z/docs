**useHandleSignInCallback**(`returnToPageUrl?`): `Object`

ブラウザのナビゲーションを監視し、自動的にサインインコールバックを処理するVueコンポーザブルメソッド

```ts
import { useLogto } from '@logto/vue';
import { useHandleSignInCallback } from '@logto/vue';

export default {
  setup() {
    useHandleSignInCallback();
  },
};
```

このメソッドをCallbackページのセットアップスクリプトで使用して、インジェクションが機能することを確認します

#### パラメータ

| 名前              | 型       | デフォルト値               |
| :---------------- | :------- | :----------------------- |
| `returnToPageUrl` | `string` | `window.location.origin` |

#### 戻り値

`Object`

| 名前              | 型                                          |
| :---------------- | :------------------------------------------ |
| `error`           | `Readonly`<`Ref`<`undefined` \| `Error`\>\> |
| `isAuthenticated` | `Readonly`<`Ref`<`boolean`\>\>              |
| `isLoading`       | `Readonly`<`Ref`<`boolean`\>\>              |

#### 定義

[packages/vue/src/index.ts:116](https://github.com/logto-io/js/blob/5254dee/packages/vue/src/index.ts#L116)