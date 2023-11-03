import './App.css';
import { useEffect } from 'react';
import { Header } from './components/Header/index';
import { ListOfGameCards } from './components/List-of-game-cards'
import { fetchGames } from './store/games/thunk';
import { PaginationPage } from './components/Pagination-page/pagination';
import { useAppDispatch } from './store/store';
import { useAppSelector } from './hooks';
import { Stack } from '@mui/material';
import { Filters } from './components/Filters';



function App() {
  const dispatch = useAppDispatch()
  const page = useAppSelector(state => state.filterReducer.page);
  const search = useAppSelector(state => state.filterReducer.search);
  const sortValue = useAppSelector(state => state.filterReducer.sort);
  const genres = useAppSelector(state => state.filterReducer.genres);
  const platform = useAppSelector(state => state.filterReducer.platforms);
  const games = useAppSelector(state => state.gamesReducer);

  console.log(games)

  useEffect(() => {
    dispatch(fetchGames(page, search, sortValue, genres, platform))
  }, [dispatch, page, search, sortValue, genres, platform]);


  return (
    <div className="App">
      <Header />
      <Stack direction='row' spacing={1.5}>
        <Filters/>
        <ListOfGameCards/>
      </Stack>
      <PaginationPage/>
    </div>
  );
}

export default App;
