import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent, Stack, Typography } from "@mui/material"
import { SearchInput } from "../Search-input"
import { useAppDispatch, useAppSelector } from "../../hooks"
import { changeGenres, changeSelectedPlatform, changeSort } from "../../store/filters/filters-slice"

export const Filters = () => {
    const sortValue = useAppSelector(state => state.filterReducer.sort);
    const genresValue = useAppSelector(state => state.filterReducer.genres);
    const platformsParentValue = useAppSelector(state => state.filterReducer.platforms)
    const dispatch = useAppDispatch();
    
    function handleChangeSort(e: SelectChangeEvent) {
        dispatch(changeSort(e.target.value))
    }

    function handleChangeGeners(e: SelectChangeEvent) {
        dispatch(changeGenres(e.target.value))
    }

    function handleChangePlatforms(e: SelectChangeEvent) {
        dispatch(changeSelectedPlatform(e.target.value))
    }

    return (
        <Stack 
            direction='column' 
            spacing={2} 
            sx={{minWidth: '300px', background: 'black', padding: '15px'}}
        >
            <Typography variant="h5" sx={{color: 'white'}}>Поисковая строка</Typography>
            <SearchInput/>
            <Typography variant="h5" sx={{color: 'white'}}>Фильтры</Typography>
            <FormControl fullWidth>        
                <InputLabel>Сортировать по:</InputLabel>
                <Select 
                    sx={{background: 'gray', maxWidth: '200px'}} 
                    size="small"
                    value={sortValue}
                    onChange={handleChangeSort}>
                    <MenuItem value='name'>Названию</MenuItem>
                    <MenuItem value='released'>Дате релиза</MenuItem>
                    <MenuItem value='added'>Добавлению</MenuItem>
                    <MenuItem value='created'>Созданию</MenuItem>
                    <MenuItem value='updated'>Обновлению</MenuItem>
                    <MenuItem value='rating'>Рейтингу</MenuItem>
                    <MenuItem value='metacritic'>Критике</MenuItem>
                    <MenuItem value=''>По умолчанию</MenuItem>
                </Select>
            </FormControl>
            <FormControl fullWidth>
                <Select
                    sx={{background: 'gray', maxWidth: '200px'}} 
                    size="small"
                    value={genresValue}
                    onChange={handleChangeGeners}
                >
                    <MenuItem value='action'>Экшн</MenuItem>
                    <MenuItem value='indie'>Инди</MenuItem>
                </Select>
            </FormControl>
            <FormControl fullWidth>        
                <InputLabel>Платформы:</InputLabel>
                <Select 
                    sx={{background: 'gray', maxWidth: '200px'}} 
                    size="small"
                    value={platformsParentValue}
                    onChange={handleChangePlatforms}>
                    <MenuItem value='1'>PC</MenuItem>
                    <MenuItem value='2'>PlayStation</MenuItem>
                    <MenuItem value='3'>Xbox</MenuItem>
                </Select>
            </FormControl>
        </Stack>
    )
}
