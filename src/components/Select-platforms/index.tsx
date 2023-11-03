import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeSelectedPlatform } from '../../store/filters/filters-slice';
import { getPlatformsParentValue } from '../../store/filters/filters-selectors';

export const SelectPlatforms = () => {
    const platformsParentValue = useAppSelector(getPlatformsParentValue);
    const dispatch = useAppDispatch();

    function handleChangePlatforms(e: SelectChangeEvent) {
        dispatch(changeSelectedPlatform(e.target.value))
    }

    return (
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
    )
}