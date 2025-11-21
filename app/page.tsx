import { getNewsList, News } from "./_lib/microcms";
import Link from "next/link";
import HeroSlider from "./_components/HeroSlider";
import styles from "./page.module.css";

export default async function Home() {
    // microCMSから最新3件を取得
    const data = await getNewsList({ limit: 3, orders: "-publishedAt" });
    const newsList: News[] = data.contents;

    return (
        <main className={styles.container}>
            <section className={styles.hero}>
                <HeroSlider />
            </section>

            <section className={styles.newsSection}>
                <div className={styles.views}>最新のお知らせ</div>
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
