import { CardGame } from '../Card-game/index'
import { useAppSelector } from '../../hooks'
import { DateOfGame } from '../../types/type';
import { getGamesArray } from '../../store/games/games-selectors';


export const ListOfGameCards = () => {
    const gamesList:DateOfGame[] | undefined = useAppSelector(getGamesArray);

    return (
        <div style={{
            paddingTop: '15px', 
            display: 'flex', 
            justifyContent: 'left', 
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

