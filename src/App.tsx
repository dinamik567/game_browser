import './App.css';
import { useEffect } from 'react';
import { Header } from './components/Header/index';
import { fetchGames } from './store/games/thunk';
import { useAppDispatch } from './store/store';
import { useAppSelector } from './hooks';
import { CardGameDetails } from './components/Card-games-details';
import { getGenresValue, getPageValue, getPlatformName, getSearchValue, getSortValue } from './store/filters/filters-selectors';



function App() {
  const dispatch = useAppDispatch()
  const page = useAppSelector(getPageValue);
  const search = useAppSelector(getSearchValue);
  const sortValue = useAppSelector(getSortValue);
  const genres = useAppSelector(getGenresValue);
  const platform = useAppSelector(getPlatformName);

  useEffect(() => {
    dispatch(fetchGames(page, search, sortValue, genres, platform))
  }, [dispatch, page, search, sortValue, genres, platform]);


  return (
    <div className="App">
      <Header />
      {/* <Stack direction='row' spacing={1.5}>
        <Filters/>
        <ListOfGameCards/>
      </Stack>
      <PaginationPage/> */}

      <CardGameDetails />
    </div>
  );
}

export default App;
