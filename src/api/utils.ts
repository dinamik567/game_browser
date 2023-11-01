
export const createUrl = (baseUrl: string, key: string, page: number): string => {
    return `${baseUrl}?key=${key}&page=${page}`;
}

