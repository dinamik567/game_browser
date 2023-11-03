import { FormControl, Select, MenuItem, SelectChangeEvent } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { changeGenres } from "../../store/filters/filters-slice";
import { getGenresValue } from "../../store/filters/filters-selectors";

export const SelectGenres = () => {
    const genresValue = useAppSelector(getGenresValue);
    const dispatch = useAppDispatch();

    function handleChangeGeners(e: SelectChangeEvent) {
        dispatch(changeGenres(e.target.value))
    }

    return (
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
    )
}