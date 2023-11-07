import { TOKEN } from "./api"
export const createUrl = (
        baseUrl: string, 
        page: number, 
        search: string, 
        sort: string,
        genres: string,
        platform: string,
        ): string => {
    return `${baseUrl}?key=${TOKEN}&page=${page}&search=${search}&ordering=${sort}&genres=${genres}&parent_platforms=${platform}`
}

export const createUrlDetails = (url: string, id: number): string => {
    return `${url}${id}?key=${TOKEN}`
}