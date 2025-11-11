"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "../styles/Breadcrumb.module.css";


export default function Breadcrumb() {
    const pathname = usePathname();
    const segments = pathname.split("/").filter(Boolean);

    if (segments.length === 0) return null;

    const paths = segments.map((segment, index) => {
        const href = "/" + segments.slice(0, index + 1).join("/");
        return { name: segment, href };
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
