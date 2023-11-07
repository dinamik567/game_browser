
import { createUrl, createUrlDetails } from "./utils";
import { Games, IGameDetails } from '../types/type'

export const TOKEN = process.env.REACT_APP_TOKEN;
export const GAMES_URL = 'https://api.rawg.io/api/games'
export const GAMES_DETAILS = 'https://api.rawg.io/api/games/'

export async function receiveGames(
        page:number, 
        search: string, 
        sort: string,
        genres:string,
        platform: string,
    ): Promise<Games> {
    const url = createUrl(GAMES_URL, page, search, sort, genres, platform);
    const response = await fetch(url);

    if(!response.ok) {
        throw new Error('Ошибка при получении игр');
    }

    const json = await response.json();
    return json
}

export async function receiveDetailsGame(id: number): Promise<IGameDetails> {
    const url = createUrlDetails(GAMES_DETAILS, id);
    const response = await fetch(url);

    if(!response.ok) {
        throw new Error('Ошибка при получении');
    }

    const json = await response.json();
    return json;
}

receiveDetailsGame(1030)

