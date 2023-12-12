## 目次

### コンストラクタ

- [constructor](default.md#constructor)

### プロパティ

- [\_idToken](default.md#_idtoken)
- [accessTokenMap](default.md#accesstokenmap)
- [adapter](default.md#adapter)
- [getAccessTokenPromiseMap](default.md#getaccesstokenpromisemap)
- [getJwtVerifyGetKey](default.md#getjwtverifygetkey)
- [getOidcConfig](default.md#getoidcconfig)
- [logtoConfig](default.md#logtoconfig)

### アクセサ

- [idToken](default.md#idtoken)
- [isAuthenticated](default.md#isauthenticated)
- [refreshToken](default.md#refreshtoken)
- [signInSession](default.md#signinsession)

### メソッド

- [\_getJwtVerifyGetKey](default.md#_getjwtverifygetkey)
- [\_getOidcConfig](default.md#_getoidcconfig)
- [getAccessToken](default.md#getaccesstoken)
- [getAccessTokenByRefreshToken](default.md#getaccesstokenbyrefreshtoken)
- [getIdTokenClaims](default.md#getidtokenclaims)
- [handleSignInCallback](default.md#handlesignincallback)
- [isSignInRedirected](default.md#issigninredirected)
- [loadAccessTokenMap](default.md#loadaccesstokenmap)
- [saveAccessTokenMap](default.md#saveaccesstokenmap)
- [saveCodeToken](default.md#savecodetoken)
- [signIn](default.md#signin)
- [signOut](default.md#signout)
- [verifyIdToken](default.md#verifyidtoken)

## コンストラクタ

### constructor

**new default**(`logtoConfig`, `adapter`)

#### パラメータ

| 名前          | タイプ                                         |
| :---------- | :------------------------------------------- |
| `logtoConfig` | [`LogtoConfig`](../types/LogtoConfig.md)     |
| `adapter`     | [`ClientAdapter`](../types/ClientAdapter.md) |

#### 定義済み場所

[packages/client/src/index.ts:51](https://github.com/logto-io/js/blob/f0f78e6/packages/client/src/index.ts#L51)

## プロパティ

### \_idToken

`プライベート` **\_idToken**: `Nullable`<`string`\>

#### 定義済み場所

[packages/client/src/index.ts:49](https://github.com/logto-io/js/blob/f0f78e6/packages/client/src/index.ts#L49)

---

### accessTokenMap

`保護された` `読み取り専用` **accessTokenMap**: `Map`<`string`, { `expiresAt`: `number` ; `scope`: `string` ; `token`: `string` }\>

#### 定義済み場所

[packages/client/src/index.ts:46](https://github.com/logto-io/js/blob/f0f78e6/packages/client/src/index.ts#L46)

---

### adapter

`保護された` `読み取り専用` **adapter**: [`ClientAdapter`](../types/ClientAdapter.md)

#### 定義済み場所

[packages/client/src/index.ts:44](https://github.com/logto-io/js/blob/f0f78e6/packages/client/src/index.ts#L44)

---

### getAccessTokenPromiseMap

`プライベート` `読み取り専用` **getAccessTokenPromiseMap**: `Map`<`string`, `Promise`<`string`\>\>

#### 定義済み場所

[packages/client/src/index.ts:48](https://github.com/logto-io/js/blob/f0f78e6/packages/client/src/index.ts#L48)

---

### getJwtVerifyGetKey

`保護された` `読み取り専用` **getJwtVerifyGetKey**: () => `Promise`<`GetKeyFunction`<`JWSHeaderParameters`, `FlattenedJWSInput`\>\>

#### タイプ宣言

(): `Promise`<`GetKeyFunction`<`JWSHeaderParameters`, `FlattenedJWSInput`\>\>

##### 戻り値

`Promise`<`GetKeyFunction`<`JWSHeaderParameters`, `FlattenedJWSInput`\>\>

#### 定義済み場所

[packages/client/src/index.ts:42](https://github.com/logto-io/js/blob/f0f78e6/packages/client/src/index.ts#L42)

---

### getOidcConfig

`保護された` `読み取り専用` **getOidcConfig**: () => `Promise`<`KeysToCamelCase`<`OidcConfigSnakeCaseResponse`\>\>

#### タイプ宣言

(): `Promise`<`KeysToCamelCase`<`OidcConfigSnakeCaseResponse`\>\>

##### 戻り値

`Promise`<`KeysToCamelCase`<`OidcConfigSnakeCaseResponse`\>\>

#### 定義済み場所

[packages/client/src/index.ts:41](https://github.com/logto-io/js/blob/f0f78e6/packages/client/src/index.ts#L41)

---

### logtoConfig

`保護された` `読み取り専用` **logtoConfig**: [`LogtoConfig`](../types/LogtoConfig.md)

#### 定義済み場所

[packages/client/src/index.ts:40](https://github.com/logto-io/js/blob/f0f78e6/packages/client/src/index.ts#L40)

## アクセサ

### idToken

`取得` **idToken**(): `Nullable`<`string`\>

#### 戻り値

`Nullable`<`string`\>

#### 定義済み場所

[packages/client/src/index.ts:111](https://github.com/logto-io/js/blob/f0f78e6/packages/client/src/index.ts#L111)

`設定` **idToken**(`idToken`): `void`

#### パラメータ

| 名前      | タイプ                  |
| :-------- | :-------------------- |
| `idToken` | `Nullable`<`string`\> |

#### 戻り値

`void`

#### 定義済み場所

[packages/client/src/index.ts:115](https://github.com/logto-io/js/blob/f0f78e6/packages/client/src/index.ts#L115)

---

### isAuthenticated

`取得` **isAuthenticated**(): `boolean`

#### 戻り値

`boolean`

#### 定義済み場所

[packages/client/src/index.ts:65](https://github.com/logto-io/js/blob/f0f78e6/packages/client/src/index.ts#L65)

---

### refreshToken

`取得` **refreshToken**(): `Nullable`<`string`\>

#### 戻り値

`Nullable`<`string`\>

#### 定義済み場所

[packages/client/src/index.ts:97](https://github.com/logto-io/js/blob/f0f78e6/packages/client/src/index.ts#L97)

`設定` **refreshToken**(`refreshToken`): `void`

#### パラメータ

| 名前           | タイプ                  |
| :------------- | :-------------------- |
| `refreshToken` | `Nullable`<`string`\> |

#### 戻り値

`void`

#### 定義済み場所

[packages/client/src/index.ts:101](https://github.com/logto-io/js/blob/f0f78e6/packages/client/src/index.ts#L101)

---

### signInSession

`保護された` `取得` **signInSession**(): `Nullable`<{ `codeVerifier`: `string` ; `redirectUri`: `string` ; `state`: `string` }\>

#### 戻り値

`Nullable`<{ `codeVerifier`: `string` ; `redirectUri`: `string` ; `state`: `string` }\>

#### 定義済み場所

[packages/client/src/index.ts:69](https://github.com/logto-io/js/blob/f0f78e6/packages/client/src/index.ts#L69)

`保護された` `設定` **signInSession**(`logtoSignInSessionItem`): `void`

#### パラメータ

| 名前                     | タイプ                                                                                    |
| :----------------------- | :-------------------------------------------------------------------------------------- |
| `logtoSignInSessionItem` | `Nullable`<{ `codeVerifier`: `string` ; `redirectUri`: `string` ; `state`: `string` }\> |

#### 戻り値

`void`

#### 定義済み場所

[packages/client/src/index.ts:86](https://github.com/logto-io/js/blob/f0f78e6/packages/client/src/index.ts#L86)

## メソッド

### \_getJwtVerifyGetKey

`プライベート` **\_getJwtVerifyGetKey**(): `Promise`<`GetKeyFunction`<`JWSHeaderParameters`, `FlattenedJWSInput`\>\>

#### 戻り値

`Promise`<`GetKeyFunction`<`JWSHeaderParameters`, `FlattenedJWSInput`\>\>

#### 定義済み場所

[packages/client/src/index.ts:321](https://github.com/logto-io/js/blob/f0f78e6/packages/client/src/index.ts#L321)

---

### \_getOidcConfig

`プライベート` **\_getOidcConfig**(): `Promise`<`KeysToCamelCase`<`OidcConfigSnakeCaseResponse`\>\>

#### 戻り値

`Promise`<`KeysToCamelCase`<`OidcConfigSnakeCaseResponse`\>\>

#### 定義済み場所
```markdown
      + **getAccessToken**(`resource?`): `Promise`<`string`\>
        | Name        | Type     |
        | :---------- | :------- |
        | `resource?` | `string` |
        `Promise`<`string`\>
      
      + `Private` **getAccessTokenByRefreshToken**(`resource?`): `Promise`<`string`\>
        | Name        | Type     |
        | :---------- | :------- |
        | `resource?` | `string` |
        `Promise`<`string`\>
        
      + **getIdTokenClaims**(): `Object`
        `Object`
        | Name        | Type               |
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
        
      + **handleSignInCallback**(`callbackUri`): `Promise`<`void`\>
        | Name          | Type     |
        | :------------ | :------- |
        | `callbackUri` | `string` |
        `Promise`<`void`\>
        
      + **isSignInRedirected**(`url`): `boolean`
        | Name  | Type     |
        | :---- | :------- |
        | `url` | `string` |
        `boolean`
        
      + `Private` **loadAccessTokenMap**(): `void`
        `void`
        
      + `Private` **saveAccessTokenMap**(): `void`
        `void`
        
      + `Private` **saveCodeToken**(`__namedParameters`): `void`
        | Name                | Type                                             |
        | :------------------ | :----------------------------------------------- |
        | `__namedParameters` | `KeysToCamelCase`<`SnakeCaseCodeTokenResponse`\> |
        `void`
        
      + **signIn**(`redirectUri`): `Promise`<`void`\>
        | Name          | Type     |
        | :------------ | :------- |
        | `redirectUri` | `string` |
        `Promise`<`void`\>
        
      + **signOut**(`postLogoutRedirectUri?`): `Promise`<`void`\>
        | Name                     | Type     |
        | :----------------------- | :------- |
        | `postLogoutRedirectUri?` | `string` |
        `Promise`<`void`\>
        
      + `Private` **verifyIdToken**(`idToken`): `Promise`<`void`\>
        | Name      | Type     |
        | :-------- | :------- |
        | `idToken` | `string` |
        `Promise`<`void`\>
```