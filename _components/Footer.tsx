import styles from "../styles/Article.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerInner}>
                <p>© 2025 まちのたより. All rights reserved.</p>
            </div>
        </footer>
    );
}
