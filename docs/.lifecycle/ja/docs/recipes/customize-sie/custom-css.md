---
sidebar_label: カスタムCSS
sidebar_position: 3
---

# カスタムCSS

Logtoはユーザーのサインインエクスペリエンスを継続的に向上させ、UIにブランドカラーオプションを追加しました。ただし、UIの微調整要件は予測不可能であることを認識しています。Logtoはカスタマイズの最良のオプションを引き続き模索していますが、開発を停滞させないように、プログラム的な方法を提供したいと思っています。

## LogtoコンソールでのカスタムCSS

"サインインエクスペリエンス > ブランド > LogtoコンソールでのカスタムCSS"に移動してください。

左側のエディタでCSSコードを編集すると、右側のプレビューモーダルで直ちに生き生きと表示されます。ただし、コードエディタは現時点ではCSSコードのみをサポートしています。HTMLやJavascriptには対応していません。

変更を保存した後は、すべてのページで変更を確認するために "ライブプレビュー"ボタンをクリックするのをお忘れなく。

Logtoのコンポーネント設計を表示するには、GitHubの "Logto/packages/ui/src"に移動するか、Logtoライブプレビューページでブラウザの "要素を検査"ツールを開くことができます。

## 例

たとえば、ウェブビューのサインインページに**_Night City_**の雰囲気を与えたい場合、次のCSSを試してみてください：

```css
@font-face {
  font-family: 'Rock Salt';
  font-style: normal;
  font-weight: normal;
  font-display: swap;
  src: url('https://fonts.gstatic.com/s/rocksalt/v18/MwQ0bhv11fWD6QsAVOZrt0M6p7NGrQ.woff2') format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F,
    U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
@font-face {
  font-family: 'Share Tech';
  font-style: normal;
  font-weight: normal;
  font-display: swap;
  src: url('https://fonts.gstatic.com/s/sharetech/v17/7cHtv4Uyi5K0OeZ7bohU8H0JmBUhfrE.woff2') format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F,
    U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

#app * {
  font-family: 'Share Tech';
  letter-spacing: 0.5px;
}

#app > div[class$='viewBox'] {
  background-image: url('https://silverhand.io/assets/v-in-nc.jpg');
  background-size: cover;
}

#app main[class$='main'] {
  background-image: url('https://silverhand.io/assets/gentle-universe.png');
  background-size: cover;
  opacity: 98%;
  min-height: initial;
  padding: 24px;
  padding-bottom: 72px;
  border-radius: 12px;
}

#app main[class$='main'] img[class$='logo'] {
  content: url('https://silverhand.io/assets/cyberpunk-2077.png');
  margin: -20px 0 -12px;
  height: 160px;
}

#app main[class$='main'] div[class$='headline'] {
  visibility: hidden;
  height: 60px;
}

#app main[class$='main'] div[class$='headline']::before {
  content: 'Welcome to Night City';
  visibility: visible;
  display: block;
  font-family: 'Rock Salt';
  font-style: italic;
  line-height: 60px;
  font-size: 20px;
  color: rgba(245, 250, 255, 60%);
  padding: 0 20px;
}

#app form div[class$='inputField'] > div {
  outline: none;
  border: none;
  border-radius: 4px;
}

#app form div[class$='inputField'] > div > input,
#app form div[class$='inputField'] div[class$='countryCodeSelector'] {
  background: initial;
  background-color: #453f67;
  font-family: 'Share Tech';
  letter-spacing: 0.5px;
  font-size: 16px;
  font-weight: 600;
}

#app button {
  font-weight: 600;
  font-size: 16px;
  border-radius: 4px;
}

#app button[type='submit'] {
  background: linear-gradient(270.84deg, #2fd6fb -24.55%, #6369fc 44.33%, #a741eb 119.2%), #5d34f2;
}
```

![SIEカスタムCSS例](./assets/sie-custom-css-example.jpeg)

:::note
LogtoはCSSモジュールを使用しているため、DOM要素の `class` プロパティにハッシュ値が表示される場合があります（たとえば、`vUugRG_container`という `div`）。これらを上書きするには、指定された値で終わる要素を選択するために、`$=` CSSセレクターを使用できます。この場合、`div[class$=container]`となります。
:::

## Management APIによるカスタムCSS

"PATCH /api/sign-in-exp"を使用して、体験のサインインにカスタマイズCSSを設定するために、Management APIを使用することもできます。bodyに `{ "customCss": "任意の文字列" }` を指定します。ページの `<title>` の後に `customCss` の値が表示されるはずです。スタイルがより高い優先度を持っている場合、それを上書きできるはずです。