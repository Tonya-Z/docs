**クラス**

# `LogtoClient`

```swift
public class LogtoClient
```

## Structs（構造体）

### [NotificationObject](../Structs/LogtoClient.NotificationObject.md)

## プロパティ

### `HandleNotification`

```swift
public static let HandleNotification = Notification.Name("Logto Handle")
```

LogtoClientが処理するための通知名です。

### `idToken`

```swift
public internal(set) var idToken: String?
```

生の文字列でキャッシュされたIDトークンです。
構造化されたデータを取得するには、`.getIdTokenClaims()`を使用します。

### `refreshToken`

```swift
public internal(set) var refreshToken: String?
```

キャッシュされたリフレッシュトークンです。

### `oidcConfig`

```swift
public internal(set) var oidcConfig: LogtoCore.OidcConfigResponse?
```

[OIDC Discovery](https://openid.net/specs/openid-connect-discovery-1_0.html)エンドポイントから取得した構成です。

### `isAuthenticated`

```swift
public var isAuthenticated: Bool
```

ユーザーが認証されているかどうかです。

## メソッド

### `handle(forAppId:url:)`

```swift
public static func handle(forAppId appId: String? = nil, url: URL)
```

指定されたURLをLogtoクライアントが処理するように通知するための関数です。

通常、この関数は、SwiftUIの`onOpenURL(perform:)`またはAppDelegateの`application(_:open:options:)`で呼び出す必要があります。詳細な情報については、統合ガイドを参照してください。

#### パラメータ

| 名前     | 説明                                                                                                                  |
| -------- | ----------------------------------------------------------------------------------------------------------------------- |
| forAppId | 通知が特定のクライアントIDのみのものである場合に指定します。`nil`の場合、すべてのLogtoクライアントが通知を処理しようとします。 |
| url      | 処理する必要があるURLです。                                                                                             |

### `init(useConfig:socialPlugins:session:)`

```swift
public init(
    useConfig config: LogtoConfig,
    socialPlugins: [LogtoSocialPlugin] = [],
    session: NetworkSession = URLSession.shared
)
```

### `signInWithBrowser(redirectUri:)`

```swift
public func signInWithBrowser(
    redirectUri: String
) async throws
```

WKWebViewを使用してサインインセッションを開始します。エラーをスローせずに関数が返された場合、ユーザーは正常にサインインしたことを意味します。

- エラーをスロー: セッションが正常に完了しなかった場合のエラー。

#### パラメータ

| 名前        | 説明                                        |
| ----------- | --------------------------------------------- |
| redirectUri | このアプリケーションのリダイレクトURIの1つ。 |

### `signOut()`

```swift
func signOut() async -> Errors.SignOut?
```

メモリとKeychain内のすべてのトークンをクリアします。また、OIDCプロバイダーからリフレッシュトークンを取り消そうとします。

- 戻り値: トークンを取り消すのに失敗した場合のエラー。通常、エラーは無視しても安全です。

### `getAccessToken(for:)`

```swift
@MainActor public func getAccessToken(for resource: String?) async throws -> String
```

指定されたリソースに対するアクセストークンを取得します。リソースが`nil`の場合、ユーザーエンドポイントのアクセストークンを返します。

キャッシュされたアクセストークンの有効期限が切れている場合、この関数は`refreshToken`を使用してOIDCプロバイダーから新しいアクセストークンを取得しようとします。

- エラーをスロー: 有効なアクセストークンを取得できなかった場合のエラー。
- 戻り値: 文字列で表されたアクセストークン。

#### パラメータ

| 名前     | 説明           |
| -------- | ------------- |
| リソース | リソース指標。 |

### `fetchUserInfo()`

```swift
public func fetchUserInfo() async throws -> LogtoCore.UserInfoResponse
```

### `getIdTokenClaims()`

```swift
public func getIdTokenClaims() throws -> IdTokenClaims
```

[OpenID Connect Core 1.0](https://openid.net/specs/openid-connect-core-1_0.html#IDToken)に記載されている構造化されたIDトークンクレームを取得します。

- エラーをスロー: IDトークンが存在しないか、トークンのデコードに失敗した場合のエラー。

### `handle(url:)`

```swift
public func handle(url: URL) -> Bool
```

指定されたURLをすべてのソーシャルプラグインで反復処理して処理しようとします。

ひとつのソーシャルプラグインがURLを処理したときに反復処理が終了します。

- 戻り値: このURLを処理したソーシャルプラグインがある場合は`true`。