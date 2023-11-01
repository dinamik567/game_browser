import { ThunkDispatch } from '@reduxjs/toolkit';
import { receiveGames } from '../../api/api'
import { getGames } from './games-slice';
import { Games } from '../../types/type'
import { RootState } from '../store';

interface typeAction {
    type: string;
    payload: Games;
}


export function fetchGames(page:number=1) {
    return async (dispatch:ThunkDispatch<RootState, number | undefined, typeAction>) => {
        const result = await receiveGames(page);
        dispatch(getGames(result))
    }
}

