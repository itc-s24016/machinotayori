"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "../styles/Breadcrumb.module.css";

const pathNameMap: Record<string, string> = {
    news: "お知らせ・ニュース",
    life: "暮らしの案内",
    government: "行政情報",
    contact: "お問い合わせ",
    access: "アクセス",
    content: "お知らせ一覧"
};

export default function Breadcrumb() {
    const pathname = usePathname();
    const segments = pathname.split("/").filter(Boolean);

    if (segments.length === 0) return null;

    const paths = segments.map((segment, index) => {
        const href = "/" + segments.slice(0, index + 1).join("/");
        const name = pathNameMap[segment] || decodeURIComponent(segment);
        return { name, href };
    });

    return (
        <nav className={styles.breadcrumb} aria-label="パンくずリスト">
            <ul>
                <li>
                    <Link href="/">ホーム</Link>
                </li>
                {paths.map((p, i) => (
                    <li key={p.href}>
                        {i === paths.length - 1 ? (
                            <span>{decodeURIComponent(p.name)}</span>
                        ) : (
                            <Link href={p.href}>{decodeURIComponent(p.name)}</Link>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
}
