import './App.css';
import { useEffect } from 'react';
import { Header } from './components/Header/index';
import { ListOfGameCards } from './components/List-of-game-cards'
import { fetchGames } from './store/games/thunk';
import { PaginationPage } from './components/Pagination-page/pagination';
import { useAppDispatch } from './store/store';
import { useAppSelector } from './hooks';


function App() {
  const dispatch = useAppDispatch()
  const page = useAppSelector(state => state.filterReducer.page);
  const search = useAppSelector(state => state.filterReducer.search);
  
  useEffect(() => {
    dispatch(fetchGames(page, search))
  }, [dispatch, page, search])


  return (
    <div className="App">
      <Header />
      <ListOfGameCards/>
      <PaginationPage/>
    </div>
  );
}

export default App;
