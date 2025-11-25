import { getAllNewsList, News } from "../_lib/microcms";
import Link from "next/link";
import NewsList from "../_components/NewsList";
import styles from "../styles/NewsList.module.css";
import Pagination from "@/app/_components/Pagination";

export const revalidate = 60;

// Next.js v16.0.1 なので型を Promise 対応に変更(Next.js 15 以降の仕様変更で、searchParams が Promise になったため)
interface SearchParams {
    searchParams: Promise<{ page?: string }>;
}

export default async function NewsListPage({ searchParams }: SearchParams) {
    // searchParams を await で解決（Next.js 15対応）
    const resolvedParams = await searchParams;
    const currentPage = Number(resolvedParams.page) || 1;

    const limit = 5;
    const offset = (currentPage - 1) * limit;

    // microCMSから全記事を取得
    const data = await getAllNewsList({ limit, offset, orders: "-datetime" });
    const newsList: News[] = data.contents;
    const totalCount = data.totalCount;
    const totalPages = Math.ceil(totalCount / limit);

    return (
        <main className={styles.container}>
            <h1 className={styles.heading}>お知らせ</h1>
            <NewsList items={newsList} />
            <Pagination
                currentPage={currentPage} // ← ここを固定値 6 から変数に変更
                totalPages={totalPages}
                basePath="/content?page="
            />
        </main>
    );
}