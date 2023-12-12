---
sidebar_label: メールコネクタの構成
sidebar_position: 2
---

# メールコネクタを構成する

メールコネクタを構成すると、ユーザーの電子メールアドレスにワンタイム認証コード（OTP）を送信できます（将来的にはマジックリンクも対応予定）。メールコネクタの使用方法は、ユーザーの本人確認を行うために、サインアップ、サインイン、パスワードを忘れた場合、アカウントをリンクさせるプロセスなど、様々なシナリオで利用できます。

Logtoには、以下の標準メールコネクタが用意されています。

- [AWS DM](https://github.com/logto-io/connectors/tree/master/packages/connector-aws-ses)
- [SendGrid メール](https://github.com/logto-io/connectors/tree/master/packages/connector-sendgrid-email)
- [Aliyun DM](https://github.com/logto-io/connectors/tree/master/packages/connector-aliyun-dm)
- [SMTP](https://github.com/logto-io/connectors/tree/master/packages/connector-smtp)

:::tip
新しいコネクタについてはまだ作業中です！お使いのコネクタが見つからない場合は、Discordでご要望をお知らせいただくか、GitHubで機能リクエストを提出してください。
Logtoオープンソースバージョンを使用している場合、[独自のコネクタを作成](../create-your-connector/)することもできます。
:::

## 構成手順

Logtoコンソールで「コネクタ > メールおよびSMSコネクタ」に移動します。

### 新しいメールコネクタを追加する

新しいメールコネクタを追加するには、「ソーシャルコネクタの追加」ボタンをクリックし、希望するメールコネクタを選択します。

![メールコネクタを選択](./assets/configure-select-email-connector.png)

構成のプロセスでは、以下の手順に従います。

1. 右側のパラメータ構成セクションで、それぞれのタイプのコネクタのREADMEドキュメントを参照し、指示に従います。
2. 必要なフォームに入力します。
3. JSONコードを編集して、ニーズに合わせたメールテンプレートをカスタマイズします。
4. 「ジェネリック」テンプレートを使用して、電子メール認証コードを自分のメールアドレスに送信して、構成をテストします。
5. 「保存して完了」をクリックして完了です。

![メールコネクタの構成ガイドライン](./assets/configure-email-connector-guideline.png)

### 別のメールコネクタに変更する

現在のメールコネクタを変更する場合は、単にコネクタの詳細ページにアクセスし、右上隅の「その他」メニューの「コネクタを変更」ボタンをクリックします。または、古いコネクタをまず削除し、新しいメールコネクタを追加することもできます。

:::note
1つの_SMSコネクタ_のみを有効にできます。

生きている_SMSコネクタ_を変更して保存すると、以前のメールコネクタは自動的に無効になります。また、過去のコネクタの_config_は追跡が失われます。将来、これらのコネクタに戻りたい場合は、以前のコネクタの_config_を適切に保持することができます。
:::

## メールテンプレート

以下に注意してください。

- Logtoは、使用目的に基づいて区別された4つの異なるテンプレートを提供しており、各使用ケースに異なるテンプレートを使用することを強く推奨しています。そうしないと、一時的にサービスに停止を引き起こすフロー制御がトリガーされる可能性があります。
- デフォルトで、認証コードの有効期間は10分間です。
- ユーザーに送信される検証コード番号は{{code}}の変数を使用します。

| 使用法        | シナリオ                                                                                                                                                                             |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Register（登録）   | ユーザーが電話番号を使用してアカウントを作成し、検証コードを入力して検証する。                                                                                                                  |
| SignIn（サインイン）      | ユーザーが電話番号を使用してサインインし、パスワードの代わりに検証コードを入力して検証する。                                                                                                             |
| ForgotPassword（パスワードを忘れた場合） | サインイン中にパスワードを忘れたユーザーは、電話番号を使用して自分のアイデンティティを検証することを選択できます。                                                                                        |
| Generic（一般）       | このテンプレートは、既存のアカウントに電話番号を関連付けたり、コネクタの構成をテストしたりなど、様々なシナリオのバックアップオプションとして使用できます。 |

参考のために、以下はテンプレートの例です。

```jsx
<table cellpadding="0" cellspacing="0" border="0" width="100%"
  style="font-family: -apple-system, system-ui, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Arial', sans-serif;">
  <tr>
    <td align="center" valign="center">
      <table cellpadding="0" cellspacing="0" border="0" width="100%"
        style="max-width: 680px; border-radius: 16px; border: 1px solid #E0E3E3; padding: 32px; background-color: #FFFFFF;">
        <tr>
          <td align="center" valign="center">
            <img
              src="https://logtodev.blob.core.windows.net/public-blobs/default/r2a6qctI3lmG/2023/03/16/7Sf0Kx1N/logto_light.png"
              width="164" height="60" style="margin-bottom: 16px;" alt="logto" />
          </td>
        </tr>
        <tr>
          <td align="center" valign="center" style="padding-bottom: 16px;">
            <table cellpadding="0" cellspacing="0" border="0" width="100%" style="padding: 16px 32px;">
              <tr>
                <td align="center" valign="center" style="padding-bottom: 20px;">
                  <h1 style=" font-size: 24px; font-weight: 600; color: #191C1D; line-height: 32px;">
                    <a href="https://www.{{domain}}/account/verify?token={{token}}"
                      style="color: #191C1D; text-decoration: none;">Logtoのサインアップを確認するためにメールを検証してください</a>
                  </h1>
                </td>
              </tr>
              <tr>
                <td align="center" valign="center" style="padding-bottom: 20px;">
                  <div style="font-size: 14px; font-weight: 400; color: #191C1D;  line-height: 20px;">
                    次のコードが含まれたサインアップ試行がありました。Logtoへのサインアップを開始したブラウザウィンドウでそれを入力してください。
                  </div>
                </td>
              </tr>
              <tr>
                <td align="center" valign="center" style="background: #EFF1F1; padding: 35px; border-radius: 12px;">
                  <div style="font-size: 32px; font-weight: 600; color: #191C1D;  line-height: 40px;">
                    {{code}}
                  </div>
                </td>
              </tr>
              <tr>
                <td align="center" valign="center" style="padding-top: 20px;">
                  <div style="font-size: 14px; font-weight: 400; color: #747778; line-height: 20px;">
                    もしサインアップの試行をしていないにも関わらずこのメールを受信した場合は、無視してください。このコードは10分間有効です。
                  </div>
                </td>
            </table>
          </td>
        </tr>
        <tr>
          <td align="center" valign="center" style="padding-top: 32px;">
            <table cellpadding="0" cellspacing="0" border="0" width="100%">
              <tr>
                <td align="center" valign="center" width="100%" style="padding-bottom: 16px;">
                  <div style="border-top: 1px solid #E0E3E3; width: 65%;"></div>
                </td>
              </tr>
              <tr>
                <td align="center" valign="center" style="padding-bottom: 16px;">
                  <div style="font-size: 14px; font-weight: 400; color: #747778;  line-height: 20px;">
                    Logto、必要なすべての機能を備えた効率的なアイデンティティソリューション。
                  </div>
                </td>
              </tr>
              <tr>
                <td align="center" valign="center" style="padding-bottom: 16px;">
                  <table cellpadding="0" cellspacing="0" border="0" width="200px">
                    <tr>
                      <td align="center" valign="center">
                        <a href="https://discord.gg/UEPaF3j5e6" target="_blank" rel="noopener">
                          <img
                            src="https://logtodev.blob.core.windows.net/public-blobs/default/r2a6qctI3lmG/2023/03/16/oPAkDBTF/discord.png"
                            width="20px" height="20px" alt="discord" style="object-fit: contain;" />
                        </a>
                      </td>
                      <td align="center" valign="center">
                        <a href="https://github.com/logto-io/logto" target="_blank" rel="noopener">
                          <img
                            src="https://logtodev.blob.core.windows.net/public-blobs/default/r2a6qctI3lmG/2023/03/16/ZwpzN1WU/github.png"
                            width="20px" height="20px" alt="github" style="object-fit: contain;" />
                        </a>
                      </td>
                      <td align="center" valign="center">
                        <a href="https://twitter.com/silverhand_io" target="_blank" rel="noopener">
                          <img
                            src="https://logtodev.blob.core.windows.net/public-blobs/default/r2a6qctI3lmG/2023/03/16/yoscEXbx/twitter.png"
                            width="20px" height="20px" alt="twitter" style="object-fit: contain;" />
                        </a>
                      </td>
                      <td align="center" valign="center">
                        <a href="https://logto.io/subscribe" target="_blank" rel="noopener">
                          <img
                            src="https://logtodev.blob.core.windows.net/public-blobs/default/r2a6qctI3lmG/2023/03/16/Us1blUfD/subscribe.png"
                            width="20px" height="20px" alt="subscribe" style="object-fit: contain;" />
                        </a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td align="center" valign="center">
                  <div style="font-size: 12px; font-weight: 400; color: #747778; line-height: 16px;">
                    © 2023 Logto. All rights reserved.
                  </div>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
```

## 関連記事

セットアップが完了したら、[SMSまたは電子メールのパスコードサインインを有効にする方法](../../tutorials/get-started/passwordless-sign-in-by-adding-connectors.mdx)をチェックできます。