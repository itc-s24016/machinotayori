import styles from "./page.module.css";
import Link from "next/link";

export default function Page() {
    // HTMLページ一覧
    const pages = [
        {
            title: "予防接種",
            href: "/childcare/vaccination",
            description: "予防接種を受ける際の注意点とお問い合わせ先についての情報",
        },
    ];

    return (
        <main className={styles.container}>
            <h1 className={styles.heading}>子育て・教育</h1>
            <ul className={styles.pageList}>
                {pages.map((page) => (
                    <li key={page.href} className={styles.pageItem}>
                        <Link href={page.href} className={styles.pageLink}>
                            {page.title}
                        </Link>
                        <span className={styles.pageDescription}>{page.description}</span>
                    </li>
                ))}
            </ul>
        </main>
    );
}
