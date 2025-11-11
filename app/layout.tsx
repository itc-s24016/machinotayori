import "./globals.css";
import Header from "./_components/Header";
import Breadcrumb from "./_components/Breadcrumbs";

export const metadata = {
    title: "まちのたより",
    description: "存在しない町の、暮らしの声をお届けします。",
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
