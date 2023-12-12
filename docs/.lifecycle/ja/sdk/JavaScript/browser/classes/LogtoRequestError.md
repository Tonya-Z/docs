## 階層

- `エラー`

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

| 名前        | タイプ     |
| :---------- | :--------- |
| `code`      | `string`   |
| `message`   | `string`   |

#### オーバーライド

Error.constructor

#### 定義済み

packages/js/lib/index.d.ts:113

## プロパティ

### code

**code**: `string`

#### 定義済み

packages/js/lib/index.d.ts:112

---

### message

**message**: `string`

#### Error.message から継承されました

#### 定義済み

node_modules/.pnpm/typescript@4.7.2/node_modules/typescript/lib/lib.es5.d.ts:1029

---

### name

**name**: `string`

#### Error.name から継承されました

#### 定義済み

node_modules/.pnpm/typescript@4.7.2/node_modules/typescript/lib/lib.es5.d.ts:1028

---

### stack

`Optional` **stack**: `string`

#### Error.stack から継承されました

#### 定義済み

node_modules/.pnpm/typescript@4.7.2/node_modules/typescript/lib/lib.es5.d.ts:1030

---

### prepareStackTrace

`Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### 型宣言

(`err`, `stackTraces`): `any`

オプションのスタックトレースのフォーマットを上書きするためのオプション

**`参照`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

##### パラメーター

| 名前            | タイプ         |
| :-------------- | :------------- |
| `err`           | `Error`        |
| `stackTraces`   | `CallSite`[]   |

##### 戻り値

`any`

#### Error.prepareStackTrace から継承されました

#### 定義済み

node_modules/@types/node/globals.d.ts:11

---

### stackTraceLimit

`Static` **stackTraceLimit**: `number`

#### Error.stackTraceLimit から継承されました

#### 定義済み

node_modules/@types/node/globals.d.ts:13

## メソッド

### captureStackTrace

`Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

ターゲットオブジェクトに .stack プロパティを作成する

#### パラメーター

| 名前              | タイプ       |
| :---------------- | :----------- |
| `targetObject`    | `object`     |
| `constructorOpt?` | `Function`   |

#### 戻り値

`void`

#### Error.captureStackTrace から継承されました

#### 定義済み

node_modules/@types/node/globals.d.ts:4