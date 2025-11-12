import { getNewsDetail, News } from "../../_lib/microcms";
import styles from "../page.module.css";
import Image from "next/image";

// Promise 対応の型定義
interface ContentPageProps {
    params: Promise<{ id: string }>;
}

export default async function ContentPage({ params }: ContentPageProps) {
    const { id } = await params;
    // microCMS から記事詳細を取得
    const news: News = await getNewsDetail(id);

    return (
        <main className={styles.container}>
            <article className={styles.article}>
                <h1 className={styles.heading}>{news.title}</h1>
                <time className={styles.newsDate}>
                    {new Date(news.publishedAt).toLocaleDateString("ja-JP")}
                </time>
                {news.thumbnail && (
                    <Image
                        src={news.thumbnail.url}
                        alt={news.title}
                        width={1200}
                        height={900}
                        priority
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
