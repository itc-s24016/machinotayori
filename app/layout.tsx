import Header from "@/_components/Header";
import Footer from "@/_components/Footer";

type Props = {
    children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
    return (
        <html lang="ja">
        <body>
        <Header />
        <main>{children}</main>
        <Footer />
        </body>
        </html>
    );
}
