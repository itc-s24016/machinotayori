# まちのたより

**概要**  
架空の町「〇〇町」の地域情報を発信するサイト。  
microCMSで記事を管理し、Next.jsで表示する静的Webアプリ。

---

## 技術構成
- Next.js (App Router)
- TypeScript
- microCMS
- CSS Modules
- ESLint
- デプロイ先：Vercel

---

## 機能仕様
- トップページ：最新の記事一覧を取得し表示
- 記事ページ：microCMSからslug指定で本文を表示
- 各記事にタイトル、日付、本文、画像を表示
- グローバルヘッダー・フッター共通レイアウト
- レスポンシブ対応（スマホ・PC）
- GitHub Actions or Vercelで自動デプロイ

---

## 未完成のため実装予定機能
- カテゴリ別記事一覧ページ
- 検索機能
- トップページのカード型トピック
- ナビゲーションの項目ごとの記事分け
- フッター
- 記事作成
---

## セットアップ
```bash
git clone <repo_url>
cd machinotayori
npm install
cp .env.example .env.local
npm run dev
