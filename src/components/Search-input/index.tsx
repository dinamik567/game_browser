import { TextField } from "@mui/material"
import { useAppSelector, useAppDispatch } from "../../hooks"
import { changeSearchInput } from "../../store/filters/filters-slice";

export const SearchInput = () => {
    const value = useAppSelector(state => state.filterReducer.search);
    const dispatch = useAppDispatch()

    function handleChangeSearch(e: React.ChangeEvent<HTMLInputElement>) {
        dispatch(changeSearchInput(e.target.value))
    }

    return (
        <TextField 
            sx={{backgroundColor: 'gray', maxWidth: '250px', borderRadius: '20px'}} 
            fullWidth
            size="small"
            placeholder="Name game"
            id="search"
            value={value}
            onChange={handleChangeSearch}
        />
    )
}