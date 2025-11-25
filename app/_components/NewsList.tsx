import Link from "next/link";
import styles from "../styles/NewsList.module.css";
import {News} from "../_lib/microcms";
import Image from "next/image";

// ページ一覧だけ description を出すことで記事一覧と記事詳細ページの差別化をする
type Props = {
    items: News[];
    showImage?: boolean;
    showDescription?: boolean;
};

export default function NewsList({
                                     items,
                                     showImage = false,
                                     showDescription = false
                                 }: Props) {
    return (
        <ul className={styles.newsList}>
            {items.map((news) => (
                <li
                    key={news.id}
                    className={styles.newsItem}
                >
                    <Link
                        href={`/content/${news.id}`}
                        className={styles.newsLink}
                    >
                        <span className={styles.newsDate}>
                            {new Date(news.datetime).toLocaleDateString("ja-JP")}
                        </span>
                        <span className={styles.newsTitle}>
                            {news.title}
                        </span>
                        {showImage && news.thumbnail && (
                            <div className={styles.thumbnailWrapper}>
                                <Image
                                    src={news.thumbnail.url}
                                    alt={news.title}
                                    fill
                                    priority
                                    className={styles.thumbnail}
                                />
                            </div>
                        )}
                        {showDescription && (
                            <p className={styles.newsDescription}>{news.description}</p>
                        )}
                    </Link>
                </li>
            ))}
        </ul>
    );
}
