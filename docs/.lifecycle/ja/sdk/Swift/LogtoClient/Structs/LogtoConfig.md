**STRUCT**

# `LogtoConfig`

```swift
public struct LogtoConfig
```

## プロパティ

### `endpoint`

```swift
public let endpoint: URL
```

### `appId`

```swift
public let appId: String
```

### `resources`

```swift
public let resources: [String]
```

### `usingPersistStorage`

```swift
public let usingPersistStorage: Bool
```

### `scopes`

```swift
public var scopes: [String]
```

## メソッド

### `init(endpoint:appId:scopes:resources:usingPersistStorage:)`

```swift
public init(
    endpoint: String,
    appId: String,
    scopes: [String] = [],
    resources: [String] = [],
    usingPersistStorage: Bool = true
) throws
```