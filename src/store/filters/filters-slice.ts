import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IFilters {
    page: number;
    search: string;
}

const initialState:IFilters = {
    page: 1,
    search: ''
}

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        changePage: (state, action: PayloadAction<number>) => ({...state, page: action.payload}),
        changeSearchInput: (state, action: PayloadAction<string>) => ({...state, search: action.payload})
    }
})


export const { reducer, actions } = filterSlice;
export const { changePage, changeSearchInput } = actions;
