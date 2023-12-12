## 階層

- `default`

  ↳ **`default`**

## 目次

### コンストラクター

- [constructor](default.md#constructor)

### プロパティ

- [accessTokenMap](default.md#accesstokenmap)
- [adapter](default.md#adapter)
- [getJwtVerifyGetKey](default.md#getjwtverifygetkey)
- [getOidcConfig](default.md#getoidcconfig)
- [logtoConfig](default.md#logtoconfig)

### アクセサ

- [idToken](default.md#idtoken)
- [isAuthenticated](default.md#isauthenticated)
- [refreshToken](default.md#refreshtoken)
- [signInSession](default.md#signinsession)

### メソッド

- [getAccessToken](default.md#getaccesstoken)
- [getIdTokenClaims](default.md#getidtokenclaims)
- [handleSignInCallback](default.md#handlesignincallback)
- [isSignInRedirected](default.md#issigninredirected)
- [signIn](default.md#signin)
- [signOut](default.md#signout)

## コンストラクター

### constructor

**new default**(`config`, `adapter`)

#### パラメータ

| 名前      | タイプ                                                  |
| :-------- | :---------------------------------------------------- |
| `config`  | [`LogtoConfig`](../types/LogtoConfig.md)              |
| `adapter` | `Pick`<`ClientAdapter`, `"navigate"` \| `"storage"`\> |

#### 上書き

BaseClient.constructor

#### 定義場所

[packages/node/src/index.ts:17](https://github.com/logto-io/js/blob/f0f78e6/packages/node/src/index.ts#L17)

## プロパティ

### accessTokenMap

`Protected` `Readonly` **accessTokenMap**: `Map`<`string`, { `expiresAt`: `number` ; `scope`: `string` ; `token`: `string` }\>

#### 継承元

BaseClient.accessTokenMap

#### 定義場所

packages/client/lib/index.d.ts:75

---

### adapter

`Protected` `Readonly` **adapter**: `ClientAdapter`

#### 継承元

BaseClient.adapter

#### 定義場所

packages/client/lib/index.d.ts:74

---

### getJwtVerifyGetKey

`Protected` `Readonly` **getJwtVerifyGetKey**: () => `Promise`<`GetKeyFunction`<`JWSHeaderParameters`, `FlattenedJWSInput`\>\>

#### 型宣言

(): `Promise`<`GetKeyFunction`<`JWSHeaderParameters`, `FlattenedJWSInput`\>\>

##### 戻り値

`Promise`<`GetKeyFunction`<`JWSHeaderParameters`, `FlattenedJWSInput`\>\>

#### 上書き元

BaseClient.getJwtVerifyGetKey

#### 定義場所

packages/client/lib/index.d.ts:73

---

### getOidcConfig

`Protected` `Readonly` **getOidcConfig**: () => `Promise`<`KeysToCamelCase`<`OidcConfigSnakeCaseResponse`\>\>

#### 型宣言

(): `Promise`<`KeysToCamelCase`<`OidcConfigSnakeCaseResponse`\>\>

##### 戻り値

`Promise`<`KeysToCamelCase`<`OidcConfigSnakeCaseResponse`\>\>

#### 上書き元

BaseClient.getOidcConfig

#### 定義場所

packages/client/lib/index.d.ts:72

---

### logtoConfig

`Protected` `Readonly` **logtoConfig**: [`LogtoConfig`](../types/LogtoConfig.md)

#### 継承元

BaseClient.logtoConfig

#### 定義場所

packages/client/lib/index.d.ts:71

## アクセサ

### idToken

`get` **idToken**(): `Nullable`<`string`\>

#### 戻り値

`Nullable`<`string`\>

#### 継承元

BaseClient.idToken

#### 定義場所

packages/client/lib/index.d.ts:86

`set` **idToken**(`value`): `void`

#### パラメータ

| 名前    | タイプ                  |
| :------ | :-------------------- |
| `value` | `Nullable`<`string`\> |

#### 戻り値

`void`

#### 継承元

BaseClient.idToken

#### 定義場所

packages/client/lib/index.d.ts:87

---

### isAuthenticated

`get` **isAuthenticated**(): `boolean`

#### 戻り値

`boolean`

#### 継承元

BaseClient.isAuthenticated

#### 定義場所

packages/client/lib/index.d.ts:81

---

### refreshToken

`get` **refreshToken**(): `Nullable`<`string`\>

#### 戻り値

`Nullable`<`string`\>

#### 継承元

BaseClient.refreshToken

#### 定義場所

packages/client/lib/index.d.ts:84

`set` **refreshToken**(`value`): `void`

#### パラメータ

| 名前    | タイプ                  |
| :------ | :-------------------- |
| `value` | `Nullable`<`string`\> |

#### 戻り値

`void`

#### 継承元

BaseClient.refreshToken

#### 定義場所

packages/client/lib/index.d.ts:85

---

### signInSession

`Protected` `get` **signInSession**(): `Nullable`<{ `codeVerifier`: `string` ; `redirectUri`: `string` ; `state`: `string` }\>

#### 戻り値

`Nullable`<{ `codeVerifier`: `string` ; `redirectUri`: `string` ; `state`: `string` }\>

#### 継承元

BaseClient.signInSession

#### 定義場所

packages/client/lib/index.d.ts:82

`Protected` `set` **signInSession**(`logtoSignInSessionItem`): `void`

#### パラメータ

| 名前                     | タイプ                                                                                    |
| :----------------------- | :-------------------------------------------------------------------------------------- |
| `logtoSignInSessionItem` | `Nullable`<{ `codeVerifier`: `string` ; `redirectUri`: `string` ; `state`: `string` }\> |

#### 戻り値

`void`

#### 継承元

BaseClient.signInSession

#### 定義場所

packages/client/lib/index.d.ts:83

## メソッド

### getAccessToken

**getAccessToken**(`resource?`): `Promise`<`string`\>

#### パラメータ

| 名前        | タイプ     |
| :---------- | :------- |
| `resource?` | `string` |

#### 戻り値

`Promise`<`string`\>

#### 継承元

BaseClient.getAccessToken

#### 定義場所

packages/client/lib/index.d.ts:88

---

### getIdTokenClaims

**getIdTokenClaims**(): `Object`

#### 戻り値

`Object`

| 名前        | タイプ               |
| :---------- | :----------------- |
| `at_hash?`  | `null` \| `string` |
| `aud`       | `string`           |
| `avatar?`   | `null` \| `string` |
| `exp`       | `number`           |
| `iat`       | `number`           |
| `iss`       | `string`           |
| `name?`     | `null` \| `string` |
| `sub`       | `string`           |
| `username?` | `null` \| `string` |

#### 継承元

BaseClient.getIdTokenClaims

#### 定義場所

packages/client/lib/index.d.ts:89

---

### handleSignInCallback

**handleSignInCallback**(`callbackUri`): `Promise`<`void`\>

#### パラメータ

| 名前          | タイプ     |
| :------------ | :------- |
| `callbackUri` | `string` |

#### 戻り値

`Promise`<`void`\>

#### 継承元

BaseClient.handleSignInCallback

#### 定義場所

packages/client/lib/index.d.ts:92

---

### isSignInRedirected

**isSignInRedirected**(`url`): `boolean`

#### パラメータ

| 名前  | タイプ     |
| :---- | :------- |
| `url` | `string` |

#### 戻り値

`boolean`

#### 継承元

BaseClient.isSignInRedirected

#### 定義場所

packages/client/lib/index.d.ts:91

---

### signIn

**signIn**(`redirectUri`): `Promise`<`void`\>

#### パラメータ

| 名前          | タイプ     |
| :------------ | :------- |
| `redirectUri` | `string` |

#### 戻り値

`Promise`<`void`\>

#### 継承元

BaseClient.signIn

#### 定義場所

packages/client/lib/index.d.ts:90

---

### signOut

**signOut**(`postLogoutRedirectUri?`): `Promise`<`void`\>

#### パラメータ

| 名前                     | タイプ     |
| :----------------------- | :------- |
| `postLogoutRedirectUri?` | `string` |

#### 戻り値
```
`Promise`<`void`\>

#### 継承元

BaseClient.signOut

#### 定義場所

packages/client/lib/index.d.ts:93
```