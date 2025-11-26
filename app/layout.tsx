import "./globals.css";
import type { Metadata } from "next";
import Header from "./_components/Header";
import Breadcrumb from "./_components/Breadcrumb";

export const metadata: Metadata = {
    // metadataBase: new URL("http://localhost:3000"),
    metadataBase: new URL("https://machinotayori.vercel.app"),
    title: "まちのたより",
    description: "存在しない町の、暮らしの声をお届けします。",
    openGraph: {
        title: "まちのたより",
        description: "存在しない町の、暮らしの声をお届けします。",
    images: ["/ogp.png"],
    },
    alternates: {
        canonical: "/",
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ja">
        <body>
        <Header />
        <div style={{ paddingTop: "64px" }}>
            <Breadcrumb />
            {children}
        </div>
        </body>
        </html>
    );
}
