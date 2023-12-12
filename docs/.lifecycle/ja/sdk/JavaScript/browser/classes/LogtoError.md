## 階層

- `Error`（エラー）

  ↳ **`LogtoError`**（LogtoError）

## 目次

### コンストラクタ

- [constructor](LogtoError.md#constructor)（コンストラクタ）

### プロパティ

- [code](LogtoError.md#code)（コード）
- [data](LogtoError.md#data)（データ）
- [message](LogtoError.md#message)（メッセージ）
- [name](LogtoError.md#name)（名前）
- [stack](LogtoError.md#stack)（スタック）
- [prepareStackTrace](LogtoError.md#preparestacktrace)（prepareStackTrace）
- [stackTraceLimit](LogtoError.md#stacktracelimit)（stackTraceLimit）

### メソッド

- [captureStackTrace](LogtoError.md#capturestacktrace)（captureStackTrace）

## コンストラクタ

### constructor

**new LogtoError**（`code`、`data?`）

#### パラメータ

| 名前    | タイプ                                           |
| :------ | :--------------------------------------------- |
| `code`  | [`LogtoErrorCode`](../types/LogtoErrorCode.md) |
| `data?` | `unknown`                                      |

#### オーバーライド

Error.constructor

#### 定義場所

packages/js/lib/index.d.ts:109

## プロパティ

### code

**code**：[`LogtoErrorCode`](../types/LogtoErrorCode.md)

#### 定義場所

packages/js/lib/index.d.ts:107

---

### data

**data**：`unknown`

#### 定義場所

packages/js/lib/index.d.ts:108

---

### message

**message**：`string`

#### 継承元

Error.message

#### 定義場所

node_modules/.pnpm/typescript@4.7.2/node_modules/typescript/lib/lib.es5.d.ts:1029

---

### name

**name**：`string`

#### 継承元

Error.name

#### 定義場所

node_modules/.pnpm/typescript@4.7.2/node_modules/typescript/lib/lib.es5.d.ts:1028

---

### stack

`Optional` **stack**：`string`

#### 継承元

Error.stack

#### 定義場所

node_modules/.pnpm/typescript@4.7.2/node_modules/typescript/lib/lib.es5.d.ts:1030

---

### prepareStackTrace

`Static` `Optional` **prepareStackTrace**：（`err`：`Error`、`stackTraces`：`CallSite`[]）=> `any`

#### タイプ宣言

（`err`、`stackTraces`）：`any`

スタックトレースの書式設定のためのオプションのオーバーライド

**`参照`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

##### パラメータ

| 名前          | タイプ         |
| :------------ | :----------- |
| `err`         | `Error`      |
| `stackTraces` | `CallSite`[] |

##### 戻り値

`any`

#### 継承元

Error.prepareStackTrace

#### 定義場所

node_modules/@types/node/globals.d.ts:11

---

### stackTraceLimit

`Static` **stackTraceLimit**：`number`

#### 継承元

Error.stackTraceLimit

#### 定義場所

node_modules/@types/node/globals.d.ts:13

## メソッド

### captureStackTrace

`Static` **captureStackTrace**（`targetObject`、`constructorOpt?`）：`void`

ターゲットオブジェクトに .stack プロパティを作成する

#### パラメータ

| 名前              | タイプ       |
| :---------------- | :--------- |
| `targetObject`    | `object`   |
| `constructorOpt?` | `Function` |

#### 戻り値

`void`

#### 継承元

Error.captureStackTrace

#### 定義場所

node_modules/@types/node/globals.d.ts:4