"use server";

import {createClient} from "microcms-js-sdk";
// microCMSから取得するデータの型を定義
import type {
    MicroCMSQueries,
    MicroCMSImage,
    MicroCMSListContent
} from "microcms-js-sdk";

// 記事の型を定義
export type News = {
    title: string;
    description: string;
    content: string;
    thumbnail: MicroCMSImage;
    publishedAt: string;
} & MicroCMSListContent;

// サービスドメインが設定されていない場合
if (!process.env.MICROCMS_SERVICE_DOMAIN) {
    throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}
// APIキーが設定されていない場合
if (!process.env.MICROCMS_API_KEY) {
    throw new Error("MICROCMS_API_KEY is required");
}

// SDK に用意されている createClient を使ってクライアントを作成
const client = createClient({
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.MICROCMS_API_KEY,
});

// 記事一覧を取得する関数
export const getNewsList = async (queries?: MicroCMSQueries) => {
    const listData = await client.getList<News>({
        endpoint: "posts",
        queries,
    });
    return listData;
};

// 記事詳細を取得する関数
export const getNewsDetail = async (
    contentId: string,
    queries?: MicroCMSQueries
) => {
    const detailData = await client.getListDetail<News>({
        endpoint: "posts",
        contentId,
        queries,
    });
    return detailData;
};

// 全ての記事を取得する関数
export const getAllNewsList = async (queries?: { limit?: number; offset?: number; orders?: string }) => {
    return client.get({
        endpoint: "posts",
        queries,
    });
};

// メインページのスライドで使用する画像を取得する関数
export const getSliderImages = async () => {
    const images = await client.getList({
        endpoint: "slider"
    });
    return images;
};