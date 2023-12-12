## 目次

### メソッド

- [getItem](Storage.md#getitem)
- [removeItem](Storage.md#removeitem)
- [setItem](Storage.md#setitem)

## メソッド

### getItem

**getItem**(`key`): `Nullable`<`string`\>

#### パラメータ

| 名前  | タイプ                                   |
| :---- | :------------------------------------- |
| `key` | [`StorageKey`](../types/StorageKey.md) |

#### 戻り値

`Nullable`<`string`\>

#### 定義済み

packages/client/lib/index.d.ts:6

---

### removeItem

**removeItem**(`key`): `void`

#### パラメータ

| 名前  | タイプ                                   |
| :---- | :------------------------------------- |
| `key` | [`StorageKey`](../types/StorageKey.md) |

#### 戻り値

`void`

#### 定義済み

packages/client/lib/index.d.ts:8

---

### setItem

**setItem**(`key`, `value`): `void`

#### パラメータ

| 名前    | タイプ                                   |
| :------ | :------------------------------------- |
| `key`   | [`StorageKey`](../types/StorageKey.md) |
| `value` | `string`                               |

#### 戻り値

`void`

#### 定義済み

packages/client/lib/index.d.ts:7