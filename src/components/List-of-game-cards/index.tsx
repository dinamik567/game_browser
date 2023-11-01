import { CardGame } from '../Card-game/index'
import { useAppSelector } from '../../hooks'
import { DateOfGame } from '../../types/type';


export const ListOfGameCards = () => {
    const gamesList:DateOfGame[] | undefined = useAppSelector(state => state.gamesReducer.results);

    return (
        <div style={{
            paddingTop: '15px', 
            display: 'flex', 
            justifyContent: 'space-between', 
            flexWrap: 'wrap'
        }}>
            {gamesList?.map(game => {
                return (
                    <CardGame key={game.id} dateOfGame={game}/>
                )
            })}
        </div>
    )
}

