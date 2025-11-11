"use client";

import styles from "../styles/Header.module.css";

export default function MenuButton({
                                       isOpen,
                                       setIsOpen,
                                   }: {
    isOpen: boolean;
    setIsOpen: (v: boolean) => void;
}) {
    return (
        <button
            className={`${styles.menuButton} ${isOpen ? styles.open : ""}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="メニューを開閉"
        >
            <span />
            <span />
            <span />
        </button>
    );
}
