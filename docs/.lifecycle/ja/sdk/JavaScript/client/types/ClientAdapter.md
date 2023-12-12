**ClientAdapter**：`Object`

#### 型の宣言

| 名前                    | 型                                                 |
| :---------------------- | :------------------------------------------------- |
| `generateCodeChallenge` | (`codeVerifier`: `string`) => `Promise`<`string`\> |
| `generateCodeVerifier`  | () => `string`                                     |
| `generateState`         | () => `string`                                     |
| `navigate`              | `Navigate`                                         |
| `requester`             | `Requester`                                        |
| `storage`               | [`Storage`](../interfaces/Storage.md)              |

#### 定義

[packages/client/src/adapter.ts:14](https://github.com/logto-io/js/blob/f0f78e6/packages/client/src/adapter.ts#L14)