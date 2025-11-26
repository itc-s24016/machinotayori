import Link from "next/link";
import styles from "../styles/NewsList.module.css";
import {News} from "../_lib/microcms";

type Props = {
    items: News[];
};

export default function NewsList({ items }: Props) {
    return (
        <ul className={styles.newsList}>
            {items.map((news) => (
                <li
                    key={news.id}
                    className={styles.newsItem}
                >
                    <div className={styles.newsDate}>
                        {new Date(news.datetime).toLocaleDateString("ja-JP")}
                    </div>
                    <Link
                        href={`/content/${news.id}`}
                        className={styles.newsTitle}
                    >
                        {news.title}
                    </Link>
                </li>
            ))}
        </ul>
    );
}
