import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Games } from '../../types/type';

const initialState:Games = {};

export const SliceListGames = createSlice({
    name: 'Date of Games',
    initialState,
    reducers: {
        getGames: (state, action: PayloadAction<Games>) => ({...action.payload})
    }

})


export const { reducer, actions } = SliceListGames;

export const { getGames } = actions

