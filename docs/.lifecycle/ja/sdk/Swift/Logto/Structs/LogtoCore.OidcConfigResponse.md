**STRUCT**

# `LogtoCore.OidcConfigResponse`

```swift
struct OidcConfigResponse: Codable, Equatable {
    public let authorizationEndpoint: String
    public let tokenEndpoint: String
    public let endSessionEndpoint: String
    public let revocationEndpoint: String
    // OIDC Discovery仕様に従い、`userInfo`の代わりに`userinfo`を使用
    // https://openid.net/specs/openid-connect-discovery-1_0.html [3. OpenIDプロバイダーメタデータ]
    public let userinfoEndpoint: String
    public let jwksUri: String
    public let issuer: String
}
```

## プロパティ

### `authorizationEndpoint`

```swift
public let authorizationEndpoint: String
```

### `tokenEndpoint`

```swift
public let tokenEndpoint: String
```

### `endSessionEndpoint`

```swift
public let endSessionEndpoint: String
```

### `revocationEndpoint`

```swift
public let revocationEndpoint: String
```

### `userinfoEndpoint`

```swift
public let userinfoEndpoint: String
```

### `jwksUri`

```swift
public let jwksUri: String
```

### `issuer`

```swift
public let issuer: String
```