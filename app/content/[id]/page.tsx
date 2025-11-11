import { getNewsDetail, News } from "../../_lib/microcms";
import styles from "../page.module.css";

interface ContentPageProps {
    params: { id: string };
}

export default async function ContentPage({ params }: ContentPageProps) {
    // microCMS から記事詳細を取得
    const news: News = await getNewsDetail(params.id);

    return (
        <main className={styles.container}>
            <article className={styles.article}>
                <h1 className={styles.title}>{news.title}</h1>
                <time className={styles.date}>
                    {new Date(news.publishedAt).toLocaleDateString("ja-JP")}
                </time>
                {news.thumbnail && (
                    <img
                        src={news.thumbnail.url}
                        alt={news.title}
                        width={1200}
                        height={630}
                        className={styles.thumbnail}
                    />
                )}
                <div
                    className={styles.content}
                    dangerouslySetInnerHTML={{ __html: news.content ?? "" }}
                />
            </article>
        </main>
    );
}
