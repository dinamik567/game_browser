export interface Platforms {
    id: number;
    name: string;
    platform: IPlatform;
}

export interface IPlatform {
    id: number;
    name: string;
}

export interface IGameStore {
    id: number;
    name: string;
}

export interface DateOfGame {
    id: number;
    name: string;
    released: string;
    rating: string;
    background_image: string;
    platforms: Platforms[];
    stores: {store: IGameStore}[]
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

export interface Filters {
    page: number;
    search: string;
    sort: string;
    genres: string;
    platforms: string;
}

export interface IStore {
    filterReducer: Filters,
    gamesReducer: Games
}

export interface IGameDetails {
    id: number;
    name: string;
    description_raw: string;
    background_image: string;
    stores: {id: number; store: {
        id: number;
        name: string;
    }}[];
    platforms: {platform: IPlatform}[]
}