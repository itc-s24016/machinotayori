import { MetadataRoute} from 'next';
import { getAll } from "./_lib/microcms"

// const buildUrl = (path?: string) => `http://localhost:3000${path ?? ""}`;
const buildUrl = (path?: string) => `https://machinotayori.vercel.app${path ?? ""}`;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    const newsContents = await getAll();

    const newsUrls: MetadataRoute.Sitemap =
        newsContents.map((content) => ({
            url: buildUrl(`/content/${content.id}`),
            lastModified: content.createdAt,
        }));




    const now = new Date();
    
    return [
        {
            url: buildUrl(),
            lastModified: now,
        },
        {
            url: buildUrl("/access"),
            lastModified: now,
        },
        {
            url: buildUrl("/childcare/vaccination"),
            lastModified: now,
        },
        
        {
            url: buildUrl("/health/clinic"),
            lastModified: now,
        },
        {
            url: buildUrl("/health/nursing"),
            lastModified: now,
        },
        {
            url: buildUrl("/health/reduction"),
            lastModified: now,
        },

        {
            url: buildUrl("/life/field"),
            lastModified: now,
        },
        {
            url: buildUrl("/life/trash"),
            lastModified: now,
        },
        {
            url: buildUrl("/life/vacant"),
            lastModified: now,
        },
        {
            url: buildUrl("/content"),
            lastModified: now,
        },
        ...newsUrls,
    ]
}