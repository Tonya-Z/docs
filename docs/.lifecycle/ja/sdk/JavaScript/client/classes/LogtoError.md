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

| 名前    | 型                                             |
| :------ | :--------------------------------------------- |
| `code`  | [`LogtoErrorCode`](../types/LogtoErrorCode.md) |
| `data?` | `unknown`                                      |

#### オーバーライド

Error.constructor

#### 定義済み

packages/js/lib/index.d.ts:109

## プロパティ

### code

**code**: [`LogtoErrorCode`](../types/LogtoErrorCode.md)

#### 定義済み

packages/js/lib/index.d.ts:107

---

### data

**data**: `unknown`

#### 定義済み

packages/js/lib/index.d.ts:108

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

スタックトレースの書式設定のためのオプションのオーバーライド

**`参照`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

##### パラメータ

| 名前          | 型         |
| :------------ | :--------- |
| `err`         | `Error`    |
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

ターゲットオブジェクトに .stack プロパティを作成

#### パラメータ

| 名前              | 型       |
| :---------------- | :------- |
| `targetObject`    | `object` |
| `constructorOpt?` | `Function` |

#### 戻り値

`void`

#### 継承元

Error.captureStackTrace

#### 定義済み

node_modules/.pnpm/@types+node@17.0.19/node_modules/@types/node/globals.d.ts:4