<details>
  <summary>LogtoConfig</summary>

| 名前                  | タイプ       | 必須    | デフォルト値                     | ノート                                               |
| --------------------- | ---------- | ----- | -------------------------------- | ---------------------------------------------------- |
| endpoint              | `string`   | ✅    |                                  | OIDCサービスエンドポイント                             |
| appId                 | `string`   | ✅    |                                  | Logtoサービスで登録したアプリケーションID              |
| scopes                | `string[]` |       | `[openid, offline_access, profile]` | このフィールドには常に `openid`、`offline_access`、`profile` が含まれます |
| resources             | `string[]` |       |                                  | 使用したい保護リソースインジケータ                      |
| prompt                | `string`   |       | `consent`                        | `generateSignInUri` で使用されるプロンプトの値             |
| usingPersistStorage   | `boolean`  |       | `true`                           | ローカルマシンに資格情報を保存するかどうかを決定する    |

**\*ノート**

- 必要に応じて、この `LogtoConfig` を拡張できます。
- `usingPersistStorage` はクライアントSDKでのみ提供されます。例：iOS、Android、およびSPA。

</details>

<details>
  <summary>AccessToken</summary>

| 名前       | タイプ    | ノート             |
| --------- | -------- | ----------------- |
| token     | `string` |                   |
| scope     | `string` |                   |
| expiresAt | `number` | 秒単位のタイムスタンプ |

</details>