import { DateOfGame, IStore } from "../../types/type"

export const getGamesArray = (state: IStore): DateOfGame[] | undefined => state.gamesReducer.results