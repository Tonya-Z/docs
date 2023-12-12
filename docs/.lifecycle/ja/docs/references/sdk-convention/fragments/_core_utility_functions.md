```
<details>
  <summary>generateCodeVerifier</summary>

コードベリファイヤを生成します。  
コードベリファイヤの長さは64にハードコーディングされています。  
戻り値は、URLセーフなベース64形式の文字列に暗号化する必要があります。

**参照**

- [PKCE](https://oauth.net/2/pkce/)

**パラメータ**

なし。

**戻り値の型**

`string`

</details>

<details>
  <summary>generateCodeChallenge</summary>

コードベリファイヤに基づいてコードチャレンジを生成します。  
このメソッドはコードベリファイヤを暗号化し、結果をURLセーフなベース64形式で返します。  
Logto V1では、暗号化アルゴリズムを`SHA-256`でハードコーディングしています。

**参照**

- [PKCE](https://oauth.net/2/pkce/)

**パラメータ**

| 名前         | タイプ     | ノート                                                      |
| ------------ | -------- | ---------------------------------------------------------- |
| codeVerifier | `string` | [generateCodeVerifier](#generatecodeverifier) で生成されたもの |

**戻り値の型**

`string`

</details>

<details>
  <summary>generateState</summary>

"State" はCSRF攻撃を防ぐために使用されます。  
"state"の長さは64にハードコーディングされています。  
戻り値は、URLセーフなベース64形式の文字列に暗号化する必要があります。

**参照**

- [CSRF](https://datatracker.ietf.org/doc/html/rfc6749#section-10.12)

**パラメータ**

なし。

**戻り値の型**

`string`

</details>

<details>
  <summary>decodeIdToken</summary>

秘密確認なしでIDトークンをデコードします。  
ペイロードセクションのすべてのトークンクレームを保持する`IdTokenClaims`を返します。

**パラメータ**

| 名前  | タイプ     |
| ----- | -------- |
| トークン | `string` |

**戻り値の型**

`IdTokenClaims`

**エラー**

- `token`が有効なJWTではありません。

</details>

<details>
  <summary>verifyIdToken</summary>

IDトークンが有効かどうかを確認します。

**署名鍵の確認**

OIDCはJSON Web Key Setをサポートしています。  
この関数は、検証のために3rd-partyライブラリ（jose）から`JsonWebKeySet`オブジェクトを受け入れます。

```jsonc
// JsonWebKeySetの例
{
  "keys": [
    {
      "kty": "RSA",
      "use": "sig",
      "kid": "xxxx",
      "e": "xxxx",
      "n": "xxxx"
    }
  ]
}
```

**クレームの検証**

- IDトークンの`iss`がこのトークンの発行者と一致することを検証します。
- `aud`（受信者）クレームがクライアントIDと等しいことを検証します。
- 現在の時刻が有効期限時刻よりも前であることを検証します。
- 発行時刻（`iat`）が現在時刻から±1分以内であることを検証します。

**参照**

- [OpenID connect core - ID Token Validation](https://openid.net/specs/openid-connect-core-1_0.html#IDTokenValidation)

**パラメータ**

| 名前     | タイプ            |
| -------- | --------------- |
| idToken  | `string`        |
| clientId | `string`        |
| issuer   | `string`        |
| jwks     | `JsonWebKeySet` |

**戻り値の型**

`void`

**エラー**

- 署名鍵の確認に失敗しました
- クレームの検証に失敗しました

</details>

<details>
  <summary>verifyAndParseCodeFromCallbackUri</summary>

サインインのコールバックURIが有効かどうかを確認し、コールバックURIから抽出された`code`を返します。

**コールバックURIの確認**

- `callbackUri`が`redirectUri`で始まることを確認します。
- `callbackUri`に`error`がないことを確認します（リダイレクトURIの[エラーレスポンス](https://datatracker.ietf.org/doc/html/rfc6749#section-4.1.2.1)を参照）。
- `callbackUri`に`state`が含まれており、それが`generateSignInUri`で指定した`state`の値と等しいことを確認します。
- `callbackUri`にパラメータ値`code`が含まれており、それはリフレッシュトークンで`/oidc/token`にリクエストする際に使用するものであることを確認します。

**パラメータ**

| 名前        | タイプ     |
| ----------- | -------- |
| callbackUri | `string` |
| redirectUri | `string` |
| state       | `string` |

**戻り値の型**

`string`

**エラー**

- 検証に失敗しました

</details>
```