## 階層

- `エラー`

  ↳ **`LogtoRequestError`**

## 目次

### コンストラクタ

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

## コンストラクタ

### constructor

**new LogtoRequestError**(`code`, `message`)

#### パラメータ

| 名前       | タイプ     |
| :-------- | :------- |
| `code`    | `string` |
| `message` | `string` |

#### オーバーライド

Error.constructor

#### 定義済み場所

packages/js/lib/index.d.ts:113

## プロパティ

### code

**code**: `string`

#### 定義済み場所

packages/js/lib/index.d.ts:112

---

### message

**message**: `string`

#### 継承元

Error.message

#### 定義済み場所

node_modules/.pnpm/typescript@4.7.2/node_modules/typescript/lib/lib.es5.d.ts:1029

---

### name

**name**: `string`

#### 継承元

Error.name

#### 定義済み場所

node_modules/.pnpm/typescript@4.7.2/node_modules/typescript/lib/lib.es5.d.ts:1028

---

### stack

`オプション` **stack**: `string`

#### 継承元

Error.stack

#### 定義済み場所

node_modules/.pnpm/typescript@4.7.2/node_modules/typescript/lib/lib.es5.d.ts:1030

---

### prepareStackTrace

`静的` `オプション` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### タイプ宣言

(`err`, `stackTraces`): `any`

スタックトレースのフォーマットをオプションで上書き

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

#### 定義済み場所

node_modules/.pnpm/@types+node@17.0.19/node_modules/@types/node/globals.d.ts:11

---

### stackTraceLimit

`静的` **stackTraceLimit**: `number`

#### 継承元

Error.stackTraceLimit

#### 定義済み場所

node_modules/.pnpm/@types+node@17.0.19/node_modules/@types/node/globals.d.ts:13

## メソッド

### captureStackTrace

`静的` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

ターゲットオブジェクトに .stack プロパティを作成

#### パラメータ

| 名前              | タイプ       |
| :---------------- | :--------- |
| `targetObject`    | `object`   |
| `constructorOpt?` | `Function` |

#### 戻り値

`void`

#### 継承元

Error.captureStackTrace

#### 定義済み場所

node_modules/.pnpm/@types+node@17.0.19/node_modules/@types/node/globals.d.ts:4