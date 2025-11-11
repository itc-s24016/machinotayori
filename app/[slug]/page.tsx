import { getNewsDetail, News } from "../_lib/microcms";
import styles from "../../styles/Article.module.css";

type Props = {
    params: {
        slug: string;
    };
};

export default async function NewsDetailPage({ params }: Props) {
    const { slug } = params;
    const data = await getNewsDetail(slug);
    const news: News = data;

    return (
        <main className={styles.container}>
            <article className={styles.newsDetail}>
                <h1>{news.title}</h1>
                {news.thumbnail && (
                    <img
                        src={news.thumbnail.url}
                        alt={news.title}
                        className={styles.thumbnail}
                    />
                )}
                <p>{news.description}</p>
                <div
                    className={styles.content}
                    dangerouslySetInnerHTML={{ __html: news.content ?? "" }}
                />
            </article>
        </main>
    );
}
