import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeSort } from '../../store/filters/filters-slice';
import { getSortValue } from '../../store/filters/filters-selectors';

export const SelectSort = () => {
    const sortValue = useAppSelector(getSortValue);
    const dispatch = useAppDispatch();

    function handleChangeSort(e: SelectChangeEvent) {
        dispatch(changeSort(e.target.value))
    }

    return (
        <FormControl fullWidth>        
            <InputLabel>Сортировать по:</InputLabel>
            <Select 
                sx={{background: 'gray', maxWidth: '200px'}} 
                size="small"
                value={sortValue}
                onChange={handleChangeSort}
            >
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
    )
}