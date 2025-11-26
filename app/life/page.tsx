import styles from "./page.module.css";
import Link from "next/link";

export default function Page() {
    // HTMLページ一覧
    const pages = [
        {
            title: "収穫後の田畑管理",
            href: "/life/pages/field",
            description: "収穫後の田畑管理に関する注意点や申請について"
        },
        {
            title: "ゴミ出し",
            href: "/life/pages/trash",
            description: "家庭系ごみの分別と正しい出し方についての案内"
        },
        {
            title: "空き地・空き家の管理",
            href: "/life/pages/vacant",
            description: "空き地や空き家の適切な管理方法と注意点について"
        }
    ];

    return (
        <main className={styles.container}>
            <h1 className={styles.heading}>暮らしの案内</h1>
            <ul>
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
