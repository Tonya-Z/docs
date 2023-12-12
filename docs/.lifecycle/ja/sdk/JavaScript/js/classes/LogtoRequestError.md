## 階層

- `Error`

  ↳ **`LogtoRequestError`**

## 目次

### コンストラクター

- [constructor](LogtoRequestError.md#constructor)

### プロパティ

- [code](LogtoRequestError.md#code)
- [message](LogtoRequestError.md#message)
- [name](LogtoRequestError.md#name)
- [stack](LogtoRequestError.md#stack)
- [prepareStackTrace](LogtoRequestError.md#preparestacktrace)
- [stackTraceLimit](LogtoRequestError.md#stacktracelimit)

### メソッド

- [captureStackTrace](LogtoRequestError.md#capturestacktrace)

## コンストラクター

### constructor

**new LogtoRequestError**(`code`, `message`)

#### パラメーター

| 名前       | タイプ     |
| :-------- | :------- |
| `code`    | `string` |
| `message` | `string` |

#### オーバーライド

Error.constructor

#### 定義箇所

[packages/js/src/utils/errors.ts:49](https://github.com/logto-io/js/blob/f0f78e6/packages/js/src/utils/errors.ts#L49)

## プロパティ

### code

**code**: `string`

#### 定義箇所

[packages/js/src/utils/errors.ts:47](https://github.com/logto-io/js/blob/f0f78e6/packages/js/src/utils/errors.ts#L47)

---

### message

**message**: `string`

#### 継承元

Error.message

#### 定義箇所

node_modules/.pnpm/typescript@4.7.2/node_modules/typescript/lib/lib.es5.d.ts:1029

---

### name

**name**: `string`

#### 継承元

Error.name

#### 定義箇所

node_modules/.pnpm/typescript@4.7.2/node_modules/typescript/lib/lib.es5.d.ts:1028

---

### stack

`Optional` **stack**: `string`

#### 継承元

Error.stack

#### 定義箇所

node_modules/.pnpm/typescript@4.7.2/node_modules/typescript/lib/lib.es5.d.ts:1030

---

### prepareStackTrace

`Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### 型定義

(`err`, `stackTraces`): `any`

スタックトレースの書式設定のためのオプションのオーバーライド

**`参照`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

##### パラメーター

| 名前          | タイプ         |
| :------------ | :----------- |
| `err`         | `Error`      |
| `stackTraces` | `CallSite`[] |

##### 戻り値

`any`

#### 継承元

Error.prepareStackTrace

#### 定義箇所

node_modules/.pnpm/@types+node@17.0.19/node_modules/@types/node/globals.d.ts:11

---

### stackTraceLimit

`Static` **stackTraceLimit**: `number`

#### 継承元

Error.stackTraceLimit

#### 定義箇所

node_modules/.pnpm/@types+node@17.0.19/node_modules/@types/node/globals.d.ts:13

## メソッド

### captureStackTrace

`Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

ターゲットオブジェクトの .stack プロパティーを作成

#### パラメーター

| 名前              | タイプ       |
| :---------------- | :--------- |
| `targetObject`    | `object`   |
| `constructorOpt?` | `Function` |

#### 戻り値

`void`

#### 継承元

Error.captureStackTrace

#### 定義箇所

node_modules/.pnpm/@types+node@17.0.19/node_modules/@types/node/globals.d.ts:4