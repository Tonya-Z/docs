```
`.signOut()`を呼び出すと、メモリ内およびlocalStorageに存在する場合はLogtoのすべてのデータをクリアします。

サインアウトした後、ユーザーをウェブサイトにリダイレクトすることが望まれます。Admin Console（Redirect URIsの下に表示される）に`http://localhost:3000`をPost Sign-out URIsの1つとして追加し、`.signOut()`を呼び出す際にパラメータとしてURLを使用しましょう。
```