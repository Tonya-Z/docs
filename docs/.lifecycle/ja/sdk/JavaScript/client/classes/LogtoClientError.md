## 階層

- `エラー`

  ↳ **`LogtoClientError`**

## 目次

### コンストラクタ

- [constructor](LogtoClientError.md#constructor)

### プロパティ

- [code](LogtoClientError.md#code)
- [data](LogtoClientError.md#data)
- [message](LogtoClientError.md#message)
- [name](LogtoClientError.md#name)
- [stack](LogtoClientError.md#stack)
- [prepareStackTrace](LogtoClientError.md#preparestacktrace)
- [stackTraceLimit](LogtoClientError.md#stacktracelimit)

### メソッド

- [captureStackTrace](LogtoClientError.md#capturestacktrace)

## コンストラクタ

### constructor

**new LogtoClientError**(`code`, `data?`)

#### パラメータ

| 名前    | 型                                                       |
| :------ | :--------------------------------------------------------- |
| `code`  | [`LogtoClientErrorCode`](../types/LogtoClientErrorCode.md) |
| `data?` | `unknown`                                                  |

#### オーバーライド

Error.constructor

#### 定義済み

[packages/client/src/errors.ts:31](https://github.com/logto-io/js/blob/f0f78e6/packages/client/src/errors.ts#L31)

## プロパティ

### code

**code**: [`LogtoClientErrorCode`](../types/LogtoClientErrorCode.md)

#### 定義済み

[packages/client/src/errors.ts:28](https://github.com/logto-io/js/blob/f0f78e6/packages/client/src/errors.ts#L28)

---

### data

**data**: `unknown`

#### 定義済み

[packages/client/src/errors.ts:29](https://github.com/logto-io/js/blob/f0f78e6/packages/client/src/errors.ts#L29)

---

### message

**message**: `string`

#### 継承元

Error.message

#### 定義済み

node_modules/.pnpm/typescript@4.7.2/node_modules/typescript/lib/lib.es5.d.ts:1029

---

### name

**name**: `string`

#### 継承元

Error.name

#### 定義済み

node_modules/.pnpm/typescript@4.7.2/node_modules/typescript/lib/lib.es5.d.ts:1028

---

### stack

`Optional` **stack**: `string`

#### 継承元

Error.stack

#### 定義済み

node_modules/.pnpm/typescript@4.7.2/node_modules/typescript/lib/lib.es5.d.ts:1030

---

### prepareStackTrace

`Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### 型宣言

(`err`, `stackTraces`): `any`

スタックトレースのフォーマットを任意にオーバーライド

**`参照`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

##### パラメータ

| 名前          | 型         |
| :------------ | :----------- |
| `err`         | `Error`      |
| `stackTraces` | `CallSite`[] |

##### 戻り値

`any`

#### 継承元

Error.prepareStackTrace

#### 定義済み

node_modules/.pnpm/@types+node@17.0.19/node_modules/@types/node/globals.d.ts:11

---

### stackTraceLimit

`Static` **stackTraceLimit**: `number`

#### 継承元

Error.stackTraceLimit

#### 定義済み

node_modules/.pnpm/@types+node@17.0.19/node_modules/@types/node/globals.d.ts:13

## メソッド

### captureStackTrace

`Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

対象オブジェクトに .stack プロパティを生成

#### パラメータ

| 名前              | 型       |
| :---------------- | :--------- |
| `targetObject`    | `object`   |
| `constructorOpt?` | `Function` |

#### 戻り値

`void`

#### 継承元

Error.captureStackTrace

#### 定義済み

node_modules/.pnpm/@types+node@17.0.19/node_modules/@types/node/globals.d.ts:4