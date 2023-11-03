import { ThunkDispatch } from '@reduxjs/toolkit';
import { receiveGames } from '../../api/api'
import { getGames } from './games-slice';
import { Games } from '../../types/type'
import { RootState } from '../store';
import { platform } from 'os';

interface typeAction {
    type: string;
    payload: Games;
}


export function fetchGames(
        page:number=1, 
        search: string, 
        sort: string, 
        genres: string,
        platform: string,
    ) {
    return async (dispatch:ThunkDispatch<RootState, number | undefined, typeAction>) => {
        const result = await receiveGames(page, search, sort, genres, platform);
        dispatch(getGames(result))
    }
}

