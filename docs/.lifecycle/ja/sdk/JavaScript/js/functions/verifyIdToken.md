**verifyIdToken**(`idToken`, `clientId`, `issuer`, `jwks`): `Promise`<`void`\>

#### パラメータ

| 名前         | 型                |
| :--------- | :---------------- |
| `idToken`  | `string`          |
| `clientId` | `string`          |
| `issuer`   | `string`          |
| `jwks`     | `JWTVerifyGetKey` |

#### 戻り値

`Promise`<`void`\>

#### 定義済み

[packages/js/src/utils/id-token.ts:27](https://github.com/logto-io/js/blob/f0f78e6/packages/js/src/utils/id-token.ts#L27)