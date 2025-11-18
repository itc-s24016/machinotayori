import styles from "./styles/not-found.module.css";
import Link from "next/link";

export default function NotFound() {
    return (
        <main className={`${styles.container} ${styles.normal}`}>
            <h1 className={styles.title}>ページが見つかりません</h1>
            <p className={styles.message}>
                お探しのページは削除されたか、移動した可能性があります。
            </p>
            <Link href="/" className={styles.backButton}>
                トップページへ戻る
            </Link>
        </main>
    );
}