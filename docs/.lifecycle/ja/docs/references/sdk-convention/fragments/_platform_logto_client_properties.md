<details>
  <summary>logtoConfig</summary>

**タイプ**

`LogtoConfig`

</details>

<details>
  <summary>oidcConfig</summary>

**タイプ**

`OidcConfigResponse?`

</details>

<details>
  <summary>accessTokenMap</summary>

**タイプ**

`Map<string, AccessToken>`

**キー**

- キーは `scope` と `resource` で構成するべきです。
- `scope` の値はアルファベット順にソートしてスペースで結合されるべきです。
- キーは `${scope}@${resource}` のパターンで構成するべきです。
- もし `scope` や `resource` が null または空なら、その値は空として扱うべきです。

例えば、`"offline_access openid read:usr@https://logto.dev/api"`、`"@https://logto.dev/api"`、`"openid@"`、`"@"`。

**値**

- アクセストークンの期限切れを示す `expiresAt` プロパティを使用する `AccessToken`。

**ノート**

- Logto V1でカスタムスコープはサポートしていないため、`scope` は常に null 値になります。
- アクセストークンキーを構築してアクセストークンを保存する場合:
  - `scope` は常に null 値になります。
  - もしアクセストークンが jwt でない場合、`resource` を null 値として扱います。
  - もしアクセストークンが jwt の場合、アクセストークンをデコードしてペイロードの `aud` クレーム値をアクセストークンキーの `resource` 部分として使用します。

</details>

<details>
  <summary>refreshToken</summary>

**タイプ**

`string?`

**ノート**

以下の状況下で `refreshToken` は設定されまたは更新されます：

- ストレージから `refreshToken` を読み込む。
- トークンを正常にフェッチするレスポンスでサーバーが `refreshToken` を返す。
- サインアウトする（`null` に設定される）。

</details>

<details>
  <summary>idToken</summary>

**タイプ**

`string?`

**ノート**

- もしバックエンドから来た場合、`idToken` は検証されるべきです。
- 以下の状況下で `idToken` は設定されまたは更新されます：
  - ストレージから `idToken` を読み込む。
  - トークンを正常にフェッチするレスポンスでサーバーが `idToken` を返す。
  - サインアウトする（`null` に設定される）。

</details>