import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { store } from '../store'

interface IFilters {
    page: number;
}

const initialState:IFilters = {
    page: 1
}

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        changePage: (state, action: PayloadAction<number>) => ({...state, page: action.payload})
    }
})




export const { reducer, actions } = filterSlice;
export const { changePage } = actions;

changePage(5);
