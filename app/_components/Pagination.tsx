import Link from "next/link";
import styles from "../styles/Pagination.module.css";

type Props = {
    currentPage: number; // 現在のページ
    totalPages: number;  // 総ページ数
    basePath: string;    // ページリンクのベースパス, 例: "/life?page="
};

export default function Pagination({ currentPage, totalPages, basePath }: Props) {
    if (totalPages <= 1) return null;

    const getPages = () => {
        const pages: (number | string)[] = [];

        // 先頭は必ず 1
        pages.push(1);

        // 左側の省略
        if (currentPage > 4) pages.push("...");

        // 現在ページ前後 2 ページ
        for (let i = currentPage - 2; i <= currentPage + 2; i++) {
            if (i > 1 && i < totalPages) pages.push(i);
        }

        // 右側の省略
        if (currentPage < totalPages - 3) pages.push("...");

        // 最後は必ず totalPages
        if (totalPages > 1) pages.push(totalPages);

        return pages;
    };

    const pages = getPages();

    return (
        <nav className={styles.pagination}>
            {pages.map((p, idx) =>
                typeof p === "number" ? (
                    <Link
                        key={idx}
                        href={`${basePath}${p}`}
                        className={`${styles.pageButton} ${p === currentPage ? styles.current : ""}`}
                    >
                        {p}
                    </Link>
                ) : (
                    <span key={idx} className={styles.ellipsis}>{p}</span>
                )
            )}
        </nav>
    );
}
