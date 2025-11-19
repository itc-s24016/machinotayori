"use client";

import {useEffect, useState} from "react";
import {getSliderImages} from "../_lib/microcms";
import styles from "../styles/HeroSlider.module.css";

export default function HeroSlider() {
    const [images, setImages] = useState<string[]>([]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        async function fetchImages() {
            const data = await getSliderImages();
            const list = Array.isArray(data?.contents)
                ? data.contents
                    .map((item: { images?: { url?: string } }) => item.images?.url)
                    .filter((url): url is string => typeof url === "string")
                : [];
            // 画像が取得できなかった場合はデフォルト画像を使用
            setImages(list.length > 0 ? list : ["/slide_default.jpg"]);
        }

        void fetchImages();
    }, []);

    useEffect(() => {
        if (images.length === 0) return;

        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 5000); // 5秒ごとに切り替え
        return () => clearInterval(interval);
    }, [images]);

    return (
        <div className={styles.slider}>
            {images.map((src, i) => (
                <div
                    key={src}
                    className={`${styles.slide} ${i === index ? styles.active : ""}`}
                    style={{backgroundImage: `url(${src})`}}
                />
            ))}
            <div className={styles.overlay}>
                <div className={styles.overlayText}>
                    <h1>まちのたより</h1>
                    <p>存在しない町の、暮らしをお届けします</p>
                </div>
            </div>
        </div>
    );
}