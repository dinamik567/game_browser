import { IStore } from "../../types/type"

export const getSortValue = (state: IStore): string => state.filterReducer.sort;
export const getGenresValue = (state: IStore): string => state.filterReducer.genres;
export const getPlatformsParentValue = (state: IStore): string => state.filterReducer.platforms;
export const getPageValue = (state: IStore): number => state.filterReducer.page;
export const getSearchValue = (state: IStore): string => state.filterReducer.search;
export const getPlatformName = (state: IStore): string => state.filterReducer.platforms