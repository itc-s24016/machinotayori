import Link from "next/link";
import styles from "../styles/Article.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.headerInner}>
                <h1 className={styles.siteTitle}>
                    <Link href="/">まちのたより</Link>
                </h1>
                <nav>
                    <ul className={styles.navList}>
                        <li>
                            <Link href="/">トップ</Link>
                        </li>
                        <li>
                            <Link href="/content">記事一覧</Link>
                        </li>
                        <li>
                            <Link href="/contact">お問い合わせ</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
