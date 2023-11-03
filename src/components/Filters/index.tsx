import { Stack, Typography } from "@mui/material"
import { SearchInput } from "../Search-input"
import { SelectSort } from '../Select-sort/index';
import { SelectGenres } from "../Select-genres";
import { SelectPlatforms } from "../Select-platforms";

export const Filters = () => {

    return (
        <Stack 
            direction='column' 
            spacing={2} 
            sx={{minWidth: '300px', background: 'black', padding: '15px'}}
        >
            <Typography variant="h5" sx={{color: 'white'}}>Поисковая строка</Typography>
            <SearchInput/>
            <Typography variant="h5" sx={{color: 'white'}}>Фильтры</Typography>
            <SelectSort/>
            <SelectGenres/>
            <SelectPlatforms/>
        </Stack>
    )
}
