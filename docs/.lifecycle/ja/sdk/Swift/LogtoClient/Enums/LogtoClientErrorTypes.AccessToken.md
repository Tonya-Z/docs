---
sidebar_position: 1.1
---

**列挙型**

# `LogtoClientErrorTypes.AccessToken`

```swift
public enum AccessToken
```

## ケース

### `noRefreshTokenFound`

```swift
case noRefreshTokenFound
```

キーチェーンにリフレッシュトークンが見つかりません。

### `unableToFetchTokenByRefreshToken`

```swift
case unableToFetchTokenByRefreshToken
```

リフレッシュトークンを使用して新しいアクセストークンを取得できません。
リフレッシュトークンが期限切れまたは無効になっている可能性があります。