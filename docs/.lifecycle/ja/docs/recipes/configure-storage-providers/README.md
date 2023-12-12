---
sidebar_position: 10
---

# 💾 ストレージプロバイダーの設定

ユーザーがアップロードしたファイルを保存するために、Logtoはストレージプロバイダーを使用します。 Logtoは、AWS S3、Azure Storageなど、複数のストレージプロバイダーをサポートしています。このレシピでは、Logtoのストレージプロバイダーを設定する方法を紹介します。

設定は、DBの`systems`テーブルに保存されていますが、ストレージプロバイダーの設定にはCLIを使用することを推奨しています。詳細については、"help"コマンドを試してみてください：

```sh
pnpm logto db system --help
```

## Azure Storage

Azure Storageは強力でスケーラブルなクラウドストレージソリューションで、クラウドでデータを保存および管理できます。次のレシピでは、LogtoのストレージプロバイダーとしてAzure Storageを設定する方法を紹介します。

### 前提条件

- [Azure Storageアカウント](https://docs.microsoft.com/ja-jp/azure/storage/common/storage-account-overview)

### CLIを使用した設定

使用例：

```
pnpm logto db system set storageProvider '{"provider":"AzureStorage","connectionString":"DefaultEndpointsProtocol=https;AccountName=logto;AccountKey=oRhfTBHOHiBxxxxxxxxxxxxxxxxZ0se6XROftl/Xrow==;EndpointSuffix=core.windows.net","container":"logto"}'
```

#### `connectionString`

Azure Storageにアクセスするためには、ストレージアカウントに接続するための必要な情報が含まれた文字列である接続文字列を使用する必要があります。

接続文字列を取得するには、公式の[Azure Storage接続文字列のドキュメント](https://docs.microsoft.com/ja-jp/azure/storage/common/storage-configure-connection-string)に従ってください。

#### `container`

コンテナは、ブロブを保存するストレージリソースです。コンテナを使用して、ブロブを整理し、データへのアクセスを制御することができます。

コンテナを作成するには、公式の[Azure Storageコンテナのドキュメント](https://docs.microsoft.com/ja-jp/azure/storage/blobs/storage-blobs-introduction#containers)に従ってください。

#### `publicUrl`

任意項目です。

公開URLは、ストレージリソースに公開的にアクセスするために使用できるURLです。CDNを使用していない場合は、Azure Storageのデフォルトの「プライマリエンドポイント」を公開URLとして使用するために空白のままにしておくことができます。Logtoは、Azure SDKの助けを借りて、この値を「connectionString」から取得します。ストレージアカウントのプライマリエンドポイントについて詳しくは、公式の[Azure Storageプライマリエンドポイントのドキュメント](https://docs.microsoft.com/ja-jp/azure/storage/common/storage-account-overview#primary-endpoints)を参照してください。

## S3ストレージ

S3ストレージは、ウェブサービスインターフェースを通じてオブジェクトストレージを提供するクラウドストレージサービスです。次のレシピでは、LogtoのストレージプロバイダーとしてS3ストレージを設定する方法を紹介します。

### 前提条件

- [S3ストレージアカウント](https://docs.aws.amazon.com/ja_jp/AmazonS3/latest/userguide/creating-buckets.html)または[MinIO](https://min.io/)などの他のS3互換ストレージサービス)

### CLIを使用した設定

使用例：

```
pnpm logto db system set storageProvider '{"provider":"S3Storage","accessKeyId":"my-access-key-id","secretAccessKey": "my-secret-access-key","bucket":"logto","endpoint":"https://s3.us-east-2.amazonaws.com"}'
```

#### `accessKeyId`

アクセスキーIDは、AWSアカウントの識別子です。AWSアカウントのアクセスキーIDを見つけるには、公式の[AWSアクセスキーIDのドキュメント](https://docs.aws.amazon.com/ja_jp/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey)に従ってください。

#### `secretAccessKey`

シークレットアクセスキーは、アクセスキーIDと連動してプログラムによるリクエストに署名するために使用されます。AWSアカウントのアクセスキーシークレットを見つけるには、公式の[AWSアクセスキーシークレットのドキュメント](https://docs.aws.amazon.com/ja_jp/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey)に従ってください。

#### `bucket`

バケットは、Amazon S3に保存されているオブジェクトのコンテナです。バケットを作成するには、公式の[AWS S3バケットのドキュメント](https://docs.aws.amazon.com/ja_jp/AmazonS3/latest/userguide/creating-buckets.html)に従ってください。

#### `endpoint`

エンドポイントは、AWS S3サービスにアクセスするために使用されるURLです。AWS S3エンドポイントを見つけるには、公式の[AWS S3エンドポイントのドキュメント](https://docs.aws.amazon.com/general/latest/gr/s3.html)に従ってください。

#### `publicUrl`

任意項目です。

公開URLは、ストレージリソースに公開的にアクセスするために使用できるURLです。CDNを使用していない場合は、S3ストレージのデフォルトのURLを使用するために空白のままにしておくことができます。