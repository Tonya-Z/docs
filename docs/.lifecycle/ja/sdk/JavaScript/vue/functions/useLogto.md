**useLogto**(): `Logto`

Vueのコンポーザブルメソッドで、Logtoのリアクティブ参照と認証メソッドを提供します。

```ts
import { useLogto } from '@logto/vue';

export default {
  setup() {
    const { isAuthenticated, signIn } = useLogto();

    return {
      isAuthenticated,
      onClickSignIn: () => {
        signIn('<あなたのリダイレクトURI>');
      },
    };
  },
};
```

Vueコンポーネントのセットアップスクリプトでこのコンポーザブルを使用して、インジェクションが機能することを確認してください

#### 戻り値

`Logto`

#### 定義場所

[packages/vue/src/index.ts:90](https://github.com/logto-io/js/blob/5254dee/packages/vue/src/index.ts#L90)