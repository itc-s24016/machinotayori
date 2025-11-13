"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "@/app/styles/not-found.module.css";

export default function AccessNotFound() {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push("/"); // 5秒後にトップへ
        }, 2000);
        return () => clearTimeout(timer);
    }, [router]);

    return (
        <main className={styles.vertical}>
            <p>このページは削除されました。</p>
            <p>画面を閉じます。</p>
        </main>
    );
}
