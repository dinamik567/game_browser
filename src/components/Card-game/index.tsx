import { FC, useEffect } from 'react';
import { Card, CardHeader, CardMedia, Typography, Box } from '@mui/material'
import { DateOfGame } from '../../types/type';
import { Link } from 'react-router-dom';

interface CardGameProps  {
    dateOfGame: DateOfGame;
}

export const CardGame:FC<CardGameProps> = ({dateOfGame}) => {

    return (
        <Card
            component='div'
            sx={{maxWidth: 300, margin: '10px'}}
        >
            <CardMedia
                component='img'
                sx={{height: '225px'}}
                image={dateOfGame.background_image}
            />
            <Link to={`card-details/${dateOfGame.id}`}>
                <CardHeader
                    sx={{textAlign: 'center'}}
                    title={dateOfGame.name}
                />
            </Link>
            <Box
                component='div'
                padding='15px'
                display='flex'
                flexDirection='column'
                textAlign='left'
            >
                <Typography>{`Дата релиза ${dateOfGame.released}`}</Typography>
                <span>{`Рейтинг ${dateOfGame.rating}`}</span>
                <div>
                     Платформа: 
                    {dateOfGame.platforms.map((elem, inx, arr) => {
                         if (arr.length - 1!== inx) {
                             return <span key={elem.platform.id}>{elem.platform.name}, </span>
                        }
                             return <span key={elem.platform.id}>{elem.platform.name}</span>
                     })}
                 </div>
            </Box>
        </Card>
    )
}