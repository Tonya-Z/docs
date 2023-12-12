## 階層

- `エラー`

  ↳ **`LogtoError`**

## 目次

### コンストラクタ

- [constructor](LogtoError.md#constructor)

### プロパティ

- [code](LogtoError.md#code)
- [data](LogtoError.md#data)
- [message](LogtoError.md#message)
- [name](LogtoError.md#name)
- [stack](LogtoError.md#stack)
- [prepareStackTrace](LogtoError.md#preparestacktrace)
- [stackTraceLimit](LogtoError.md#stacktracelimit)

### メソッド

- [captureStackTrace](LogtoError.md#capturestacktrace)

## コンストラクタ

### constructor

**new LogtoError**(`code`, `data?`)

#### パラメータ

| 名前    | 型                                           |
| :------ | :--------------------------------------------- |
| `code`  | [`LogtoErrorCode`](../types/LogtoErrorCode.md) |
| `data?` | `unknown`                                      |

#### オーバーライド

Error.constructor

#### 定義

packages/js/lib/utils/errors.d.ts:22

## プロパティ

### code

**code**: [`LogtoErrorCode`](../types/LogtoErrorCode.md)

#### 定義

packages/js/lib/utils/errors.d.ts:20

---

### data

**data**: `unknown`

#### 定義

packages/js/lib/utils/errors.d.ts:21

---

### message

**message**: `string`

#### 継承元

Error.message

#### 定義

node_modules/.pnpm/typescript@4.6.2/node_modules/typescript/lib/lib.es5.d.ts:1023

---

### name

**name**: `string`

#### 継承元

Error.name

#### 定義

node_modules/.pnpm/typescript@4.6.2/node_modules/typescript/lib/lib.es5.d.ts:1022

---

### stack

`Optional` **stack**: `string`

#### 継承元

Error.stack

#### 定義

node_modules/.pnpm/typescript@4.6.2/node_modules/typescript/lib/lib.es5.d.ts:1024

---

### prepareStackTrace

`Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### 型宣言

(`err`, `stackTraces`): `any`

スタックトレースのフォーマットオーバーライドのオプション

**`see`** https://v8.dev/docs/stack-trace-api#customizing-stack-traces

##### パラメータ

| 名前          | 型         |
| :------------ | :----------- |
| `err`         | `Error`      |
| `stackTraces` | `CallSite`[] |

##### 戻り値

`any`

#### 継承元

Error.prepareStackTrace

#### 定義

node_modules/.pnpm/@types+node@17.0.19/node_modules/@types/node/globals.d.ts:11

---

### stackTraceLimit

`Static` **stackTraceLimit**: `number`

#### 継承元

Error.stackTraceLimit

#### 定義

node_modules/.pnpm/@types+node@17.0.19/node_modules/@types/node/globals.d.ts:13

## メソッド

### captureStackTrace

`Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

ターゲットオブジェクトに .stack プロパティを作成する

#### パラメータ

| 名前              | 型       |
| :---------------- | :--------- |
| `targetObject`    | `object`   |
| `constructorOpt?` | `Function` |

#### 戻り値

`void`

#### 継承元

Error.captureStackTrace

#### 定義

node_modules/.pnpm/@types+node@17.0.19/node_modules/@types/node/globals.d.ts:4