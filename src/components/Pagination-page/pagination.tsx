import { Pagination } from "@mui/material"
import { FC, useEffect, useState } from "react"
import { changePage } from "../../store/filters/filters-slice";
import { useAppDispatch, useAppSelector } from "../../hooks";

interface PaginationPageProps {
    page: number;
}



export const PaginationPage = () => {
    const dispatch = useAppDispatch()
    const page = useAppSelector(state => state.filterReducer.page)
    

    function handleChange (e: any, page: number) {
        console.log(page)
        dispatch(changePage(page))
    }

    return (
        <div style={{padding: '10px'}}>
            <Pagination 
                sx={{margin: '0 auto', display: 'block', width: '25%'}}
                count={10} 
                page={page} 
                onChange={handleChange}
                size="large" 
                color="primary"
            />
        </div>
    )
}