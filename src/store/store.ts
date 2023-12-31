import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux'
import { reducer as gamesReducer } from './games/games-slice';
import { reducer as filterReducer } from './filters/filters-slice';
import { reducer as cardDetailsReducer } from './card-details/card-details-slice'

const rootReducer = combineReducers({
    gamesReducer,
    filterReducer,
    cardDetailsReducer
})

export const store = configureStore({
    reducer: rootReducer
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch // Export a hook that can be reused to resolve types