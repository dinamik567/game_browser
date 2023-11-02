import { Pagination } from "@mui/material"
import { changePage } from "../../store/filters/filters-slice";
import { useAppDispatch, useAppSelector } from "../../hooks";


export const PaginationPage = () => {
    const dispatch = useAppDispatch()
    const page = useAppSelector(state => state.filterReducer.page)
    const count = useAppSelector(state => state.gamesReducer.count)

    function handleChange (e: any, page: number) {
        dispatch(changePage(page))
    }

    return (
        <div style={{padding: '10px'}}>
            <Pagination 
                sx={{margin: '0 auto', display: 'block', width: '25%'}}
                count={count} 
                page={page} 
                onChange={handleChange}
                size="large" 
                color="primary"
            />
        </div>
    )
}