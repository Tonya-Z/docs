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

[packages/client/src/adapter.ts:7](https://github.com/logto-io/js/blob/f0f78e6/packages/client/src/adapter.ts#L7)

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

[packages/client/src/adapter.ts:9](https://github.com/logto-io/js/blob/f0f78e6/packages/client/src/adapter.ts#L9)

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

[packages/client/src/adapter.ts:8](https://github.com/logto-io/js/blob/f0f78e6/packages/client/src/adapter.ts#L8)