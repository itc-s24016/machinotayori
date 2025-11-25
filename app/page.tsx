import {getNewsList, News} from "./_lib/microcms";
import Link from "next/link";
import HeroSlider from "./_components/HeroSlider";
import NewsList from "./_components/NewsList";
import styles from "./page.module.css";

export default async function Home() {
    // microCMSから最新3件を取得
    const data = await getNewsList({limit: 3, orders: "-datetime"});
    const newsList: News[] = data.contents;

    return (
        <main className={styles.container}>
            <section className={styles.hero}>
                <HeroSlider/>
            </section>

            <section className={styles.newsSection}>
                <div className={styles.views}>最新のお知らせ</div>
                <NewsList items={newsList} />
                <div className={styles.moreLink}>
                    <Link href="/content">→ もっと見る</Link>
                </div>
            </section>
        </main>
    );
}
