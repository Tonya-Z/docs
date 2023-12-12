---
sidebar_position: 5
---

# 管理APIの探索

管理コンソールは便利なツールですが、すべてのシナリオに適しているわけではなく、現在利用できない機能がいくつかあります。このような場合、Logto管理APIを利用することが役立つ解決策になります。

Logto管理APIは、管理者がさまざまなアイデンティティ関連のタスクを管理し、セキュリティポリシーを施行し、規制や標準を遵守するための包括的なAPIのコレクションです。Logtoのアイデンティティ関連のバックエンドサービスに対する広範な機能を提供し、追加の実装を必要とせずに特定のニーズに合わせてカスタマイズするための基盤として使用することができます。

「チェックアウト」ボタンをクリックすると、APIリソースページに移動します。管理APIはリソースリストの先頭に表示され、削除することはできません。

管理APIを呼び出して使用する前に、**マシン・トゥ・マシン**アプリを作成することが重要です。これを行うには、「アプリケーション」セクションに移動し、「アプリケーションの作成」を選択します。このプロセスについては、ガイドします。

![explore-management-api](./assets/api-resources.png)

## ガイド

1. 管理コンソールでマシン・トゥ・マシン・アプリを作成するには、[最初のアプリケーションの作成と統合](./create-and-integrate-the-first-app/)チュートリアルに従います。
2. `https://tenantid.logto.app/api` 管理APIおよび `all` スコープ（すべての権限を付与する）のアクセストークンを取得するには、[マシン・トゥ・マシン：Logtoとの認証](../../recipes/integrate-logto/machine-to-machine.mdx) ガイドの手順に従います。
3. Bearer認証とアクセストークンを使用して管理APIとやり取りします。

:::note 通常、アクセストークンの有効期限は短いです。ローカルキャッシュがある場合は、リクエストを送信する前に必要に応じて新しいアクセストークンを取得するように確認してください。:::

管理APIの使用事例や効果的な利用方法について詳しく学びたい場合は、「管理APIとのやり取り」レシピを参照してください。