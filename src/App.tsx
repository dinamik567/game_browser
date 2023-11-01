import './App.css';
import { useEffect, useState } from 'react';
import { Header } from './components/Header/index';
import { ListOfGameCards } from './components/List-of-game-cards'
import { fetchGames } from './store/games/thunk';
import { PaginationPage } from './components/Pagination-page/pagination';
import { useAppDispatch } from './store/store';
import { useAppSelector } from './hooks';

// interface IFetchRespose {
//   results?: DateOfGame[]
// }

function App() {
  const dispatch = useAppDispatch()
  const page = useAppSelector(state => state.filterReducer.page);

  useEffect(() => {
    dispatch(fetchGames(page))
  }, [dispatch, page])


  return (
    <div className="App">
      <Header />
      <ListOfGameCards/>
      <PaginationPage/>
    </div>
  );
}

export default App;
