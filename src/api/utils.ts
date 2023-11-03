export const createUrl = (
        baseUrl: string, 
        key: string, 
        page: number, 
        search: string, 
        sort: string,
        genres: string,
        platform: string,
        ): string => {
    return `${baseUrl}?key=${key}&page=${page}&search=${search}&ordering=${sort}&genres=${genres}&parent_platforms=${platform}`;
}

