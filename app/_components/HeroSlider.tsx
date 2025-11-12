"use client";

import {useEffect, useState} from "react";
import styles from "../styles/HeroSlider.module.css";

const images = [
    "/slide1.jpg",
    "/slide2.jpg",
    "/slide3.jpg",
    "/slide4.jpg",
    "/slide5.jpg",
    "/slide6.jpg",
];

export default function HeroSlider() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 5000); // 5秒ごとに切り替え
        return () => clearInterval(interval);
    }, []);

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