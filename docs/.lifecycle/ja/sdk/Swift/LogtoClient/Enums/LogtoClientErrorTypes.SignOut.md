---
sidebar_position: 1.1
---

**列挙型**

# `LogtoClientErrorTypes.SignOut`

```swift
public enum SignOut: String
```

## ケース

### `unableToRevokeToken`

```swift
case unableToRevokeToken
```

OIDCプロバイダーでトークンを取り消せません。
通常、このエラーは無視しても安全です。