import { getNewsList, News } from "../_lib/microcms";
import Link from "next/link";
import styles from "./page.module.css";

// microCMSの1ページあたりの件数
const PER_PAGE = 5;

type Props = {
    searchParams?: { page?: string };
};

export default async function ContentPage({ searchParams }: Props) {
    const currentPage = Number(searchParams?.page || "1");
    const offset = (currentPage - 1) * PER_PAGE;

    // microCMSから記事取得（ページネーション対応）
    const data = await getNewsList({
        limit: PER_PAGE,
        offset,
        orders: "-publishedAt",
    });

    const newsList: News[] = data.contents;
    const totalCount = data.totalCount;
    const totalPages = Math.ceil(totalCount / PER_PAGE);

    return (
        <main className={styles.container}>
            <h1 className={styles.heading}>お知らせ一覧</h1>

            <ul className={styles.newsList}>
                {newsList.map((news) => (
                    <li key={news.id} className={styles.newsItem}>
                        <Link href={`/content/${news.id}`} className={styles.newsLink}>
              <span className={styles.newsDate}>
                {new Date(news.publishedAt).toLocaleDateString("ja-JP")}
              </span>
                            <span className={styles.newsTitle}>{news.title}</span>
                        </Link>
                        <p className={styles.newsDescription}>{news.description}</p>
                    </li>
                ))}
            </ul>

            <div className={styles.pagination}>
                {currentPage > 1 && (
                    <Link
                        href={`/content?page=${currentPage - 1}`}
                        className={styles.pageButton}
                    >
                        ← 前へ
                    </Link>
                )}
                {currentPage < totalPages && (
                    <Link
                        href={`/content?page=${currentPage + 1}`}
                        className={styles.pageButton}
                    >
                        次へ →
                    </Link>
                )}
            </div>
        </main>
    );
}