import { Button, Stack, Typography } from "@mui/material";
import { LoaderFunction, useLoaderData } from "react-router-dom";
import { IGameDetails } from '../../types/type'
import { receiveDetailsGame } from '../../api/api'
import { useNavigate } from "react-router-dom";
interface Params {
    userId: string
}

export const loader: LoaderFunction = async ({params}) => {
    const { userId } = params as unknown as Params;
    const gameDetails = await receiveDetailsGame(Number(userId));

    return gameDetails
}

export const CardGameDetails = () => {
    const navigate = useNavigate();
    const game = useLoaderData() as IGameDetails;

    console.log(game)
    function handleClickCard() {
        navigate(-1)
    }
    return (
        <Stack style={{
            textAlign: 'left', 
            padding: '15px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'left'
        }}>
            <Typography variant="h2" sx={{textAlign: 'center'}}>{game?.name}</Typography>   
            <img
                style={{maxWidth: '1000px', display: 'block', margin: '0 auto'}}
                src={game?.background_image} 
                alt={game?.name + ' poster'}
            />
            <Typography variant="h4">Описание</Typography>
            <div>{game?.description_raw}</div>
            <Typography variant="h4">Платформы</Typography>
            <div>
                {game?.platforms?.map((elem, inx, arr) => {
                    if (arr.length - 1!== inx) {
                        return <span key={elem.platform.id}>{elem.platform.name}, </span>
                }
                        return <span key={elem.platform.id}>{elem.platform.name}</span>
                })}
            </div>
            <Typography variant="h4">Магазины</Typography>
            <div>
                {game?.stores?.map((elem, inx, arr) => {
                    if (arr.length - 1!== inx) {
                        return <span key={elem.store.id}>{elem.store.name}, </span>
                }
                        return <span key={elem.store.id}>{elem.store.name}</span>
                })}
            </div>
            <Button 
                sx={{maxWidth: '150px'}} 
                variant="contained"
                onClick={handleClickCard}
            >Назад</Button>
        </Stack>
    )
}

