import { createUrl } from "./utils";
import { Games } from '../types/type'
export const TOKEN = '85b67422d40048fea532e0e3be936b72';
export const BASE_URL = 'https://api.rawg.io/api/platforms';
export const GAMES_URL = 'https://api.rawg.io/api/games'



export async function receiveGames(page:number): Promise<Games> {
    const url = createUrl(GAMES_URL, TOKEN, page);
    const response = await fetch(url);

    if(!response.ok) {
        throw new Error('Ошибка при получении игр');
    }

    const json = await response.json();
    return json
}


