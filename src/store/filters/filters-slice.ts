import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IFilters {
    page: number;
    search: string;
    sort: string;
    genres: string;
    platforms: string;
}

const initialState:IFilters = {
    page: 1,
    search: '',
    sort: '',
    genres: 'action',
    platforms: '1'
}

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        changePage: (state, action: PayloadAction<number>) => ({...state, page: action.payload}),
        changeSearchInput: (state, action: PayloadAction<string>) => ({...state, search: action.payload}),
        changeSort: (state, action: PayloadAction<string>) => ({...state, sort: action.payload}), 
        changeGenres: (state, action: PayloadAction<string>) => ({...state, genres: action.payload}),
        changeSelectedPlatform: (state, action: PayloadAction<string>) => ({...state, platforms: action.payload}),
    }
})


export const { reducer, actions } = filterSlice;
export const { 
    changePage, 
    changeSearchInput, 
    changeSort, 
    changeGenres, 
    changeSelectedPlatform 
} = actions;
