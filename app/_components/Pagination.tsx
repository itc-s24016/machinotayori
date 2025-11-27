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

        // 仕組みは、現在ページが 4 より大きい場合、左側に "..." を追加
        if (currentPage > 3) pages.push("...");

        // 仕組みは、
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
            if (i > 1 && i < totalPages) pages.push(i);
        }

        // 仕組みは、現在ページが totalPages - 3 より小さい場合、右側に "..." を追加
        if (currentPage < totalPages - 2) pages.push("...");

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
