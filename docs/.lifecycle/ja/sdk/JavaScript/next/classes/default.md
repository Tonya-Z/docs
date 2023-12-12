## 目次

### コンストラクタ

- [constructor](default.md#constructor)

### プロパティ

- [navigateUrl](default.md#navigateurl)
- [storage](default.md#storage)

### アクセサ

- [ironSessionConfigs](default.md#ironsessionconfigs)

### メソッド

- [createNodeClient](default.md#createnodeclient)
- [getLogtoUserFromRequest](default.md#getlogtouserfromrequest)
- [handleAuthRoutes](default.md#handleauthroutes)
- [handleSignIn](default.md#handlesignin)
- [handleSignInCallback](default.md#handlesignincallback)
- [handleSignOut](default.md#handlesignout)
- [handleUser](default.md#handleuser)
- [withLogtoApiRoute](default.md#withlogtoapiroute)
- [withLogtoSsr](default.md#withlogtossr)

## コンストラクタ

### constructor

**new default**(`config`)

#### パラメータ

| 名前      | タイプ              |
| :-------- | :---------------- |
| `config` | `LogtoNextConfig` |

#### 定義済み

[packages/next/src/index.ts:15](https://github.com/logto-io/js/blob/b919948/packages/next/src/index.ts#L15)

## プロパティ

### navigateUrl

`Private` `Optional` **navigateUrl**: `string`

#### 定義済み

[packages/next/src/index.ts:13](https://github.com/logto-io/js/blob/b919948/packages/next/src/index.ts#L13)

---

### storage

`Private` `Optional` **storage**: `default`

#### 定義済み

[packages/next/src/index.ts:14](https://github.com/logto-io/js/blob/b919948/packages/next/src/index.ts#L14)

## アクセサ

### ironSessionConfigs

`Private` `get` **ironSessionConfigs**(): `Object`

#### 戻り値

`Object`

| 名前                   | タイプ                                         |
| :--------------------- | :------------------------------------------- |
| `cookieName`           | `string`                                     |
| `cookieOptions`        | { `maxAge`: `number` ; `secure`: `boolean` } |
| `cookieOptions.maxAge` | `number`                                     |
| `cookieOptions.secure` | `boolean`                                    |
| `password`             | `string`                                     |

#### 定義済み

[packages/next/src/index.ts:124](https://github.com/logto-io/js/blob/b919948/packages/next/src/index.ts#L124)

## メソッド

### createNodeClient

`Private` **createNodeClient**(`request`): `default`

#### パラメータ

| 名前      | タイプ              |
| :-------- | :---------------- |
| `request` | `IncomingMessage` |

#### 戻り値

`default`

#### 定義済み

[packages/next/src/index.ts:107](https://github.com/logto-io/js/blob/b919948/packages/next/src/index.ts#L107)

---

### getLogtoUserFromRequest

`Private` **getLogtoUserFromRequest**(`request`, `getAccessToken?`): `Promise`<[`LogtoUser`](../types/LogtoUser.md)\>

#### パラメータ

| 名前              | タイプ              |
| :---------------- | :---------------- |
| `request`         | `IncomingMessage` |
| `getAccessToken?` | `boolean`         |

#### 戻り値

`Promise`<[`LogtoUser`](../types/LogtoUser.md)\>

#### 定義済み

[packages/next/src/index.ts:135](https://github.com/logto-io/js/blob/b919948/packages/next/src/index.ts#L135)

---

### handleAuthRoutes

**handleAuthRoutes**(`configs?`): `NextApiHandler`<`any`\>

#### パラメータ

| 名前       | タイプ              |
| :--------- | :---------------- |
| `configs?` | `WithLogtoConfig` |

#### 戻り値

`NextApiHandler`<`any`\>

#### 定義済み

[packages/next/src/index.ts:60](https://github.com/logto-io/js/blob/b919948/packages/next/src/index.ts#L60)

---

### handleSignIn

**handleSignIn**(`redirectUri?`): `NextApiHandler`<`any`\>

#### パラメータ

| 名前          | タイプ     |
| :------------ | :------- |
| `redirectUri` | `string` |

#### 戻り値

`NextApiHandler`<`any`\>

#### 定義済み

[packages/next/src/index.ts:17](https://github.com/logto-io/js/blob/b919948/packages/next/src/index.ts#L17)

---

### handleSignInCallback

**handleSignInCallback**(`redirectTo?`): `NextApiHandler`<`any`\>

#### パラメータ

| 名前         | タイプ     |
| :----------- | :------- |
| `redirectTo` | `string` |

#### 戻り値

`NextApiHandler`<`any`\>

#### 定義済み

[packages/next/src/index.ts:30](https://github.com/logto-io/js/blob/b919948/packages/next/src/index.ts#L30)

---

### handleSignOut

**handleSignOut**(`redirectUri?`): `NextApiHandler`<`any`\>

#### パラメータ

| 名前          | タイプ     |
| :------------ | :------- |
| `redirectUri` | `string` |

#### 戻り値

`NextApiHandler`<`any`\>

#### 定義済み

[packages/next/src/index.ts:41](https://github.com/logto-io/js/blob/b919948/packages/next/src/index.ts#L41)

---

### handleUser

**handleUser**(`config?`): `NextApiHandler`<`any`\>

#### パラメータ

| 名前      | タイプ              |
| :-------- | :---------------- |
| `config?` | `WithLogtoConfig` |

#### 戻り値

`NextApiHandler`<`any`\>

#### 定義済み

[packages/next/src/index.ts:54](https://github.com/logto-io/js/blob/b919948/packages/next/src/index.ts#L54)

---

### withLogtoApiRoute

**withLogtoApiRoute**(`handler`, `config?`): `NextApiHandler`<`any`\>

#### パラメータ

| 名前      | タイプ                     |
| :-------- | :----------------------- |
| `handler` | `NextApiHandler`<`any`\> |
| `config`  | `WithLogtoConfig`        |

#### 戻り値

`NextApiHandler`<`any`\>

#### 定義済み

[packages/next/src/index.ts:83](https://github.com/logto-io/js/blob/b919948/packages/next/src/index.ts#L83)

---

### withLogtoSsr

**withLogtoSsr**<`P`\>(`handler`, `config?`): (`context`: `GetServerSidePropsContext`<`ParsedUrlQuery`, `PreviewData`\>) => `Promise`<`GetServerSidePropsResult`<`P`\>\>

#### タイプパラメータ

| 名前 | タイプ                                                                    |
| :--- | :---------------------------------------------------------------------- |
| `P`  | extends `Record`<`string`, `unknown`\> = `Record`<`string`, `unknown`\> |

#### パラメータ

| 名前      | タイプ                                                                                                                                                           |
| :-------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `handler` | (`context`: `GetServerSidePropsContext`<`ParsedUrlQuery`, `PreviewData`\>) => `GetServerSidePropsResult`<`P`\> \| `Promise`<`GetServerSidePropsResult`<`P`\>\> |
| `config`  | `WithLogtoConfig`                                                                                                                                              |

#### 戻り値

`fn`

(`context`): `Promise`<`GetServerSidePropsResult`<`P`\>\>

##### パラメータ

| 名前      | タイプ                                                          |
| :-------- | :------------------------------------------------------------ |
| `context` | `GetServerSidePropsContext`<`ParsedUrlQuery`, `PreviewData`\> |

##### 戻り値

`Promise`<`GetServerSidePropsResult`<`P`\>\>

#### 定義済み

[packages/next/src/index.ts:93](https://github.com/logto-io/js/blob/b919948/packages/next/src/index.ts#L93)