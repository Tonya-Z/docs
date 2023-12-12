---
sidebar_label: ソーシャルコネクタの設定
sidebar_position: 3
---

# ソーシャルコネクタの設定

ソーシャルコネクタを設定することで、既存のソーシャルメディアアカウントを使用してパスワードや基本プロフィール情報を入力することなく簡単にサインインすることができます。これにより、Webサイトやアプリの登録変換率を向上させることができます。Logtoでは、常に新しいプラットフォームのサポートやユーザーエクスペリエンスの向上を目指して、ソーシャルコネクタの機能を向上させています。

Logtoでは、次の2種類のソーシャルコネクタを提供しています：

- **一般的なソーシャルコネクタ**: Google、Apple、Facebook、GitHub、Discord、Wechat、Alipay、Kakao、Naver、Azure Active Directory。
- **標準コネクタ**: OIDC、OAuth 2.0、SAML。

:::tip
必要なソーシャルコネクタが一般的なソーシャルコネクタの中にない場合は、標準コネクタプロトコルを使用して独自のコネクタを作成することができます。詳しくは、"[標準プロトコルを使用したカスタムソーシャルコネクタ](../custom social connector with standard protocol.md)"ガイドをご覧ください。
標準コネクタでも要件を満たさない場合は、遠慮せずにお問い合わせください。Logtoオープンソース版を使用している場合は、[独自のコネクタを作成](../create-your-connector/)することさえできます。
:::

## 一般的なソーシャルコネクタの種類

Logtoコンソールに事前に多くの汎用サードパーティソーシャルプラットフォームが用意されています。

READMEに従って、少しの努力でコネクタ構成を行ってください。

- **Google** [汎用コネクタ](https://github.com/logto-io/connectors/tree/master/packages/connector-google)
- **Apple** [汎用コネクタ](https://github.com/logto-io/connectors/tree/master/packages/connector-apple)
- **Facebook** [汎用コネクタ](https://github.com/logto-io/connectors/tree/master/packages/connector-facebook)
- **GitHub** [汎用コネクタ](https://github.com/logto-io/connectors/tree/master/packages/connector-github)
- **Discord** [汎用コネクタ](https://github.com/logto-io/connectors/tree/master/packages/connector-discord)
- **WeChat** [Webコネクタ](https://github.com/logto-io/connectors/tree/master/packages/connector-wechat-web) | [ネイティブコネクタ](https://github.com/logto-io/connectors/tree/master/packages/connector-wechat-native)
- **Alipay** [Webコネクタ](https://github.com/logto-io/connectors/tree/master/packages/connector-alipay-web) | [ネイティブコネクタ](https://github.com/logto-io/connectors/tree/master/packages/connector-alipay-native)
- **Kakao** [汎用コネクタ](https://github.com/logto-io/connectors/tree/master/packages/connector-kakao)
- **Naver** [汎用コネクタ](https://github.com/logto-io/connectors/tree/master/packages/connector-naver)
- **Microsoft Azure AD** [汎用コネクタ](https://github.com/logto-io/connectors/tree/master/packages/connector-azuread)

:::info ソーシャルコネクタのプラットフォームについて
Google、Facebook、GitHubなどの一部のコネクタには、プラットフォームの選択肢がありません。これらのコネクタの_プラットフォーム_は_汎用_です。さらに詳しい情報は、[プラットフォームの説明](https://docs.logto.io/docs/references/connectors/#platform)をご覧ください。

使用するコネクタに適切な_プラットフォーム_を選択して、あなたのユースケースに適したコネクタにしましょう。ネイティブモバイルアプリのみを提供する場合やその逆の場合でも、_ネイティブ_コネクタを追加せずに単一の_ネイティブ_コネクタを設定することができます。
:::

## 設定手順

Logtoコンソールで新しいソーシャルコネクタを追加するには、「**コネクタ > ソーシャルコネクタ**」に移動し、「**ソーシャルコネクタの追加**」ボタンをクリックします。それから表示されるモーダルで必要なソーシャルコネクタタイプを選択し、「**次へ**」ボタンをクリックします。

注意：**一般的なソーシャルコネクタの各タイプは、Logtoテナントで一度だけ**インスタンスを作成できます。

![ソーシャルコネクタの追加](./assets/configure-add-social-connector.png)

1. すべてのソーシャルコネクタのタイプは、「**ユーザープロファイルの同期方法**」（アバターやユーザー名など）を選択できます。デフォルト設定は登録時のみ同期するようになっていますが、サインインごとに常に同期するように選択することもできます。ただし、これによりユーザーの各ソーシャルサインインでカスタマイズされた情報が上書きされる可能性があるため、注意してください。
2. 各ソーシャルコネクタには、ソーシャルアイデンティティを区別するための独自の**「アイデンティティプロバイダ名（IdP名）」**があります。一般的なソーシャルコネクタは変更できないデフォルトのIdP名の値を使用しており、再追加しても常に同じユーザーアイデンティティプールを所有することができます。（標準コネクタの場合は、IdP名の値をカスタマイズする必要があります。標準コネクタを設定する前にIdP名について詳しく知ることができます。）
3. 最後に、異なるソーシャルコネクタには異なる設定パラメータが必要です。フォームの記入に関するガイダンスについては、左側の**README**を参照できます。

![ソーシャルコネクタの設定ガイドライン](./assets/configure-social-connector-guideline.png)

## **関連する読み物**

- [サインイン方法の設定](../customize-sie/configure-sign-in-methods/)を参照して、コネクタを追加し、ソーシャルコネクタを使用してください。