"use client";
import Link from "next/link";
import {useState} from "react";
import styles from "../styles/Header.module.css";
import Image from "next/image";

export default function Header() {
    const [open, setOpen] = useState(false);

    const navItems = [
        {name: "お知らせ", href: "/content"},
        {name: "暮らしの案内", href: "/life"},
        {name: "福祉・健康", href: "/health"},
        {name: "子育て・教育", href: "/childcare"},
        // {name: "行政情報", href: "/government"},
        // {name: "お問い合わせ", href: "/contact"},
        {name: "アクセス", href: "/access"},
    ];

    return (
        <header className={styles.header}>
            <div className={styles.inner}>
                <Link href="/" className={styles.logo}>
                    <Image
                        src="/市町村章.png"
                        alt="市町村章"
                        width={120}
                        height={120}
                        className={styles.logoImage}
                        priority
                    />まちのたより
                </Link>

                <button
                    onClick={() => setOpen(!open)}
                    className={styles.menuButton}
                    aria-label="メニューを開く"
                >
                    <svg
                        className={styles.menuIcon}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        {open ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>

                <nav
                    className={`${styles.nav} ${open ? styles.open : ""}`}
                >
                    <ul>
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    className={`${styles.navLink} ${
                                        item.name === "アクセス" ? styles.accessLink : ""
                                    }`}
                                    onClick={() => setOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
