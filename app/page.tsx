import { getNewsList, News } from "./_lib/microcms";
import Link from "next/link";
import styles from "./page.module.css";

export default async function Home() {
    // microCMSから最新3件を取得
    const data = await getNewsList({ limit: 3, orders: "-publishedAt" });
    const newsList: News[] = data.contents;

    return (
        <main className={styles.container}>
            <section className={styles.hero}>
                <h1>まちのたより</h1>
                <p>存在しない町の、暮らしの声をお届けします。</p>
            </section>

            <section className={styles.newsSection}>
                <h2>最新のお知らせ</h2>
                <ul className={styles.newsList}>
                    {newsList.map((news) => (
                        <li key={news.id} className={styles.newsItem}>
                            <Link href={`/content/${news.id}`} className={styles.newsLink}>
                <span className={styles.newsDate}>
                  {new Date(news.publishedAt).toLocaleDateString("ja-JP")}
                </span>
                                <span className={styles.newsTitle}>{news.title}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className={styles.moreLink}>
                    <Link href="/content">→ もっと見る</Link>
                </div>
            </section>
        </main>
    );
}
