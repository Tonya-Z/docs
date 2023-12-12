---
sidebar_position: 1.1
---

**列挙型（ENUM）**

# `LogtoClientErrorTypes.SignIn`

```swift
public enum SignIn: String
```

## ケース

### `unknownError`

```swift
case unknownError
```

### `authFailed`

```swift
case authFailed
```

認証に失敗しました。
これは内部エラーであるか、ユーザーが認証をキャンセルした可能性があります。

### `unableToConstructRedirectUri`

```swift
case unableToConstructRedirectUri
```

指定された文字列のリダイレクトURIを構築できません。

### `unableToConstructAuthUri`

```swift
case unableToConstructAuthUri
```

構成のリダイレクトURIを構築できません。
OIDCとLogtoの構成を再度確認してください。

### `unableToFetchToken`

```swift
case unableToFetchToken
```

認証後の初期トークンリクエストを完了できません。

### `unexpectedSignInCallback`

```swift
case unexpectedSignInCallback
```

サインインのコールバックURIが無効です。