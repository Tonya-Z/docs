`Const` **createLogto**: `LogtoVuePlugin`

Logto Vue プラグインを作成する

```ts
import { createApp } from 'vue';
import { createLogto } from '@logto/vue';

const app = createApp(App);
const app.use(createLogto, {
  appId: '<your-app-id>',
  endpoint: '<your-oidc-endpoint-domain>',
});

app.mount('#app');
```

このプラグインをVueのルートコンポーネントに登録するために使用してください

#### 定義済み

[packages/vue/src/index.ts:51](https://github.com/logto-io/js/blob/5254dee/packages/vue/src/index.ts#L51)