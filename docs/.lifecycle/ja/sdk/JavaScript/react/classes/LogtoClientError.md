## 階層

- `エラー`

  ↳ **`LogtoClientError`**

## 目次

### コンストラクタ

- [constructor](LogtoClientError.md#constructor)

### プロパティ

- [cause](LogtoClientError.md#cause)
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

| 名前    | タイプ                                                       |
| :------ | :--------------------------------------------------------- |
| `code`  | [`LogtoClientErrorCode`](../types/LogtoClientErrorCode.md) |
| `data?` | `unknown`                                                  |

#### オーバーライド

Error.constructor

#### 定義元

packages/browser/lib/errors.d.ts:16

## プロパティ

### cause

`Optional` **cause**: `Error`

#### 継承元

Error.cause

#### 定義元

node_modules/.pnpm/typescript@4.6.2/node_modules/typescript/lib/lib.es2022.error.d.ts:26

---

### code

**code**: [`LogtoClientErrorCode`](../types/LogtoClientErrorCode.md)

#### 定義元

packages/browser/lib/errors.d.ts:14

---

### data

**data**: `unknown`

#### 定義元

packages/browser/lib/errors.d.ts:15

---

### message

**message**: `string`

#### 継承元

Error.message

#### 定義元

node_modules/.pnpm/typescript@4.6.2/node_modules/typescript/lib/lib.es5.d.ts:1023

---

### name

**name**: `string`

#### 継承元

Error.name

#### 定義元

node_modules/.pnpm/typescript@4.6.2/node_modules/typescript/lib/lib.es5.d.ts:1022

---

### stack

`Optional` **stack**: `string`

#### 継承元

Error.stack

#### 定義元

node_modules/.pnpm/typescript@4.6.2/node_modules/typescript/lib/lib.es5.d.ts:1024

---

### prepareStackTrace

`Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### 型宣言

(`err`, `stackTraces`): `any`

スタックトレースのフォーマットをオプションでオーバーライド

**`参照`** https://v8.dev/docs/stack-trace-api#customizing-stack-traces

##### パラメータ

| 名前          | タイプ         |
| :------------ | :----------- |
| `err`         | `Error`      |
| `stackTraces` | `CallSite`[] |

##### 戻り値

`any`

#### 継承元

Error.prepareStackTrace

#### 定義元

node_modules/.pnpm/@types+node@17.0.19/node_modules/@types/node/globals.d.ts:11

---

### stackTraceLimit

`Static` **stackTraceLimit**: `number`

#### 継承元

Error.stackTraceLimit

#### 定義元

node_modules/.pnpm/@types+node@17.0.19/node_modules/@types/node/globals.d.ts:13

## メソッド

### captureStackTrace

`Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

対象オブジェクトに .stack プロパティを作成する

#### パラメータ

| 名前              | タイプ       |
| :---------------- | :--------- |
| `targetObject`    | `object`   |
| `constructorOpt?` | `Function` |

#### 戻り値

`void`

#### 継承元

Error.captureStackTrace

#### 定義元

node_modules/.pnpm/@types+node@17.0.19/node_modules/@types/node/globals.d.ts:4