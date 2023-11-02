
export const createUrl = (baseUrl: string, key: string, page: number, search: string): string => {
    return `${baseUrl}?key=${key}&page=${page}&search=${search}`;
}

