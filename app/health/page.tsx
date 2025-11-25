import styles from "./page.module.css";
import Link from "next/link";

export default function Page() {
    // HTMLページ一覧
    const pages = [
        {
            title: "夜間・休日の救急外来",
            href: "/health/pages/clinic",
            description: "夜間・休日の救急外来についての情報",
        },
        {
            title: "介護保険",
            href: "/health/pages/nursing",
            description: "介護保険制度の概要と利用方法についての説明",
        },
        {
            title: "介護保険料の減額・免除",
            href: "/health/pages/reduction",
            description: "介護保険料の減額・免除の条件と手続きについての案内",
        },
    ];

    return (
        <main className={styles.container}>
            <h1 className={styles.heading}>福祉・健康</h1>
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
