# まちのたより

架空の町「〇〇町」の地域情報を発信する静的Webサイトです。  
microCMSで記事を管理し、Next.js App Routerで表示します。

## 技術スタック

- **フレームワーク**: Next.js 16.0.1 (App Router)
- **言語**: TypeScript
- **CMS**: microCMS
- **スタイリング**: CSS Modules
- **デプロイ**: Vercel

## 主な機能

### 実装済み機能

- **トップページ**: 最新記事3件の表示と画像スライド表示機能
- **お知らせ一覧**: microCMSから記事を取得し、ページネーション付きで表示
- **記事詳細ページ**: 個別記事の表示（タイトル、日付、サムネイル、本文）
- **静的ページ**:
  ※ここはサイトの雰囲気を整えるためのサンプル記事を置いています（CMS管理外）
  - 暮らしの案内
  - 福祉・健康
  - 子育て・教育
- **共通レイアウト**: ヘッダー、パンくずリスト
- **レスポンシブデザイン**: スマホ・タブレット・PC対応
- **SEO対応**: sitemap.xml, robots.txt, OGP設定

### 未実装機能

- カテゴリ別記事一覧ページ
- 検索機能
- トップページのカード型トピック
- フッターコンポーネント
- ナビゲーション項目ごとの記事分類
- サンプル記事のCMS管理

## ディレクトリ構成

```
machinotayori/
├── app/                              
│   ├── _components/                  # ーー コンポーネント ーー
│   │   ├── Breadcrumb.tsx            # パンくずリスト
│   │   ├── Header.tsx                # ヘッダー
│   │   ├── HeroSlider.tsx            # トップページの画像表示部分
│   │   ├── MenuButton.tsx            # ハンバーガーメニュー
│   │   ├── NewsList.tsx              # 記事一覧
│   │   └── Pagination.tsx            # ページネーション
│   │
│   ├── _lib/                         
│   │   └── microcms.ts               # microCMS SDK設定とAPI関数
│   │
│   ├── content/                      # ーー お知らせ ーー
│   │   ├── [id]/                     
│   │   │   └── page.tsx              # 記事詳細ページ
│   │   ├── page.module.css           # お知らせ一覧、詳細共用スタイル
│   │   └── page.tsx                  # お知らせ一覧ページ
│   │
│   ├── life/                         # ーー 暮らしの案内 ーー
│   │   ├── pages/                    
│   │   │   ├── field/                
│   │   │   │   └── page.tsx          # サンプルページ1
│   │   │   ├── trash/                
│   │   │   │   └── page.tsx          # サンプルページ2
│   │   │   └── vacant/               
│   │   │       └── page.tsx          # サンプルページ3
│   │   │
│   │   ├── page.module.css           # 暮らしの案内用スタイル
│   │   └── page.tsx                  # 暮らしの案内一覧ページ
│   │
│   ├── health/                       # ーー 福祉・健康 ーー
│   │   ├── pages/                    
│   │   │   ├── clinic/               
│   │   │   │   └── page.tsx          # サンプルページ1
│   │   │   ├── nursing/              
│   │   │   │   └── page.tsx          # サンプルページ2
│   │   │   └── reduction/            
│   │   │       └── page.tsx          # サンプルページ3
│   │   │
│   │   ├── page.module.css           # 福祉・健康用スタイル
│   │   └── page.tsx                  # 福祉・健康一覧ページ
│   │
│   ├── childcare/                    # ーー 子育て・教育 ーー
│   │   ├── vaccination/              
│   │   │   └── page.tsx              # サンプルページ1
│   │   │
│   │   ├── page.module.css           # 子育て・教育用スタイル
│   │   └── page.tsx                  # 子育て・教育一覧ページ
│   │
│   ├── access/                       # ーー アクセス ーー
│   │   └── page.tsx                  # アクセスページ（専用404ページ）
│   │
│   ├── styles/                       # ーー スタイル専用ファイル ーー
│   │   ├── Breadcrumb.module.css     # パンくずリスト用スタイル
│   │   ├── Header.module.css         # ヘッダー用スタイル
│   │   ├── HeroSlider.module.css     # トップページの画像表示部分用スタイル
│   │   ├── NewsList.module.css       # お知らせ一覧用スタイル
│   │   ├── Pagination.module.css     # ページネーション用スタイル
│   │   └── not-found.module.css      # 404ページ用スタイル
│   │
│   ├── globals.css                   
│   ├── layout.tsx                    
│   ├── not-found.tsx                 # 404エラーページ
│   ├── page.module.css               # トップページ用スタイル
│   ├── page.tsx                      # トップページ
│   ├── robots.txt                    # 検索エンジンクローラー設定
│   └── sitemap.ts                    # サイトマップ生成ファイル
│
├── public/                           # 画像・SVGフォルダ
│   ├── ogp.png                       # OGP画像
│   ├── slide_default.jpg             # スライド画像のデフォルト画像
│   └── 市町村章.png                    # アプリケーションアイコン
│
├── .gitignore                        
├── README.md                         
├── next.config.ts                    
├── package.json                      
└── tsconfig.json                     
```

## セットアップ

### 1. リポジトリのクローン

```bash
git clone <repository_url>
cd machinotayori
```

### 2. 依存関係のインストール

```bash
npm install
```

### 3. 環境変数の設定

`.env.local` ファイルを作成し、microCMSの認証情報を設定します。

```env
MICROCMS_SERVICE_DOMAIN=your-service-domain
MICROCMS_API_KEY=your-api-key
```

### 4. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで `http://localhost:3000` を開きます。

## スクリプト

```bash
npm run dev      # 開発サーバー起動
npm run build    # 本番ビルド
npm start        # 本番サーバー起動
npm run lint     # ESLintでコードチェック
```

## microCMS設定

### 必要なエンドポイント

1. **posts** (お知らせ記事)
   - title: テキストフィールド
   - description: テキストフィールド
   - content: リッチエディタ
   - thumbnail: 画像
   - datetime: 日時

2. **slider** (トップページスライダー)
   - images: 画像

## デプロイ

Vercelへのデプロイが推奨されます。

1. Vercelにプロジェクトをインポート
2. 環境変数を設定（microCMS認証情報）
3. デプロイ実行
