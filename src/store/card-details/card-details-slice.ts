import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IinitialState {
    cardId: number
}

const initialState: IinitialState = {
    cardId: 0,
}

export const cardDetailsSlice = createSlice({
    name: 'card-details',
    initialState,
    reducers: {
        setCardId: (state, action: PayloadAction<number>) => ({...state, cardId: action.payload})
    }
});


export const { reducer, actions } = cardDetailsSlice;
export const { setCardId } = actions

