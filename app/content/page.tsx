import { getAllNewsList, News } from "../_lib/microcms";
import Link from "next/link";
import styles from "./page.module.css";

export const revalidate = 60;

// Next.js v16.0.1 なので型を Promise 対応に変更(Next.js 15 以降の仕様変更で、searchParams が Promise になったため)
interface SearchParams {
    searchParams: Promise<{ page?: string }>;
}

export default async function NewsListPage({ searchParams }: SearchParams) {
    // searchParams を await で解決（Next.js 15対応）
    const resolvedParams = await searchParams;
    const currentPage = Number(resolvedParams.page) || 1;

    const limit = 5;
    const offset = (currentPage - 1) * limit;

    // microCMSから全記事を取得
    const data = await getAllNewsList({ limit, offset, orders: "-publishedAt" });
    const newsList: News[] = data.contents;
    const totalCount = data.totalCount;
    const totalPages = Math.ceil(totalCount / limit);

    return (
        <main className={styles.container}>
            <h1 className={styles.heading}>お知らせ・ニュース一覧</h1>

            <ul className={styles.newsList}>
                {newsList.map((news) => (
                    <li key={news.id} className={styles.newsItem}>
                        <Link href={`/content/${news.id}`} className={styles.newsLink}>
              <span className={styles.newsDate}>
                {new Date(news.publishedAt).toLocaleDateString("ja-JP")}
              </span>
                            <span className={styles.newsTitle}>{news.title}</span>
                            <p className={styles.newsDescription}>{news.description}</p>
                        </Link>
                    </li>
                ))}
            </ul>

            <div className={styles.pagination}>
                {currentPage > 1 ? (
                    <Link
                        href={`/content?page=${currentPage - 1}`}
                        className={styles.pageButton}
                    >
                        ← 前のページ
                    </Link>
                ) : (
                    <span />
                )}
                {currentPage < totalPages && (
                    <Link
                        href={`/content?page=${currentPage + 1}`}
                        className={styles.pageButton}
                    >
                        次のページ →
                    </Link>
                )}
            </div>
        </main>
    );
}