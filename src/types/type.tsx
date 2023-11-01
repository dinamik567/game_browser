export interface Platforms {
    id: number;
    name: string;
    platform: {id: number, name: string};
}

export interface DateOfGame {
    id: number;
    name: string;
    released: string;
    rating: string;
    background_image: string;
    platforms: Platforms[];
}

export interface Games {
    count?: number,
    next?: string | null,
    description?: string,
    previous?: string |null,
    results?: Array<DateOfGame>
    seo_title?: string,
    filters?: object,
    nofollow?: boolean,
    nofollow_collections?: Array<string>,
    noindex?: string,
    seo_description?: string,
    seo_h1?: string,
    seo_keywords?: string,
}