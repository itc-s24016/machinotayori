import { getAllNewsList, News } from "../_lib/microcms";
import Link from "next/link";
import styles from "../../styles/Article.module.css";

export default async function ContentPage() {
    // microCMS から全記事を取得
    const data = await getAllNewsList();
    const newsList: News[] = data;

    return (
        <main className={styles.container}>
            <h1>記事一覧</h1>
            <section className={styles.newsList}>
                {newsList.map((news) => (
                    <article key={news.id} className={styles.newsCard}>
                        {news.thumbnail && (
                            <img
                                src={news.thumbnail.url}
                                alt={news.title}
                                className={styles.thumbnail}
                            />
                        )}
                        <h2>
                            <Link href={`/${news.id}`}>{news.title}</Link>
                        </h2>
                        <p>{news.description}</p>
                    </article>
                ))}
            </section>
        </main>
    );
}
