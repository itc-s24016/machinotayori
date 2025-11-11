"use client";

import { useState } from "react";
import styles from "../../styles/Article.module.css";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // ここで送信処理（API呼び出し）を追加予定
        alert("送信処理はまだ実装されていません");
    };

    return (
        <main className={styles.container}>
            <h1>お問い合わせ</h1>
            <form onSubmit={handleSubmit} className={styles.contactForm}>
                <label>
                    名前：
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    メール：
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    内容：
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </label>
                <button type="submit">送信</button>
            </form>
        </main>
    );
}
