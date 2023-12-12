**ENUM**

# `LogtoUtilities`

```swift
public enum LogtoUtilities
```

## Methods

### `withReservedScopes(_:)`

```swift
public static func withReservedScopes(_ scopes: [String]) -> [String]
```

### `generateState()`

```swift
public static func generateState() -> String
```

### `generateCodeVerifier()`

```swift
public static func generateCodeVerifier() -> String
```

### `generateCodeChallenge(codeVerifier:)`

```swift
public static func generateCodeChallenge(codeVerifier: String) -> String
```

### `decodeIdToken(_:)`

```swift
static func decodeIdToken(_ idToken: String) throws -> IdTokenClaims
```

検証なしでIDトークンのクレームをデコードします。

- 戻り値: IDトークンのクレームのセット。

#### パラメータ

| 名前   | 説明               |
| ------ | ------------------ |
| token  | デコードするJWT。  |

### `verifyIdToken(_:issuer:clientId:jwks:forTimeInterval:)`

```swift
static func verifyIdToken(
    _ idToken: String,
    issuer: String,
    clientId: String,
    jwks: JWKSet,
    forTimeInterval: TimeInterval = Date().timeIntervalSince1970
) throws
```

指定されたIDトークンを検証します:

- いずれかのJWKがトークンと一致する。
- 発行者がトークンのペイロード`iss`と一致する。
- クライアントIDがトークンのペイロード`aud`と一致する。
- トークンが期限切れではない。
- トークンが+/- 1分以内に発行されています。