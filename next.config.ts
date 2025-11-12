import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        // microCMSの画像を Image で表示できるようにする設定
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.microcms-assets.io",
            },
        ],
    },
};

export default nextConfig;
