import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'


export type SortItems = {
    name: string, sortProperty: string 
 }

export interface FilterStateSlice{
    search: string,
    sort: SortItems,
    videoFormat: boolean,
    page?: number,
}

const initialState = {
    search: '',
    sort: { name: 'популярности', sortProperty: 'relevance' },
    page: 1,
    videoFormat: true,
}

const filterSliCe = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setFilter: (state, action:PayloadAction<string>) => {
            state.search = action.payload;
        },
        setSort: (state, action:PayloadAction<SortItems>) => {
            state.sort = action.payload;
        },
        setPage: (state, action:PayloadAction<number>) => {
            state.page = action.payload;
        },
        setForm: (state, action:PayloadAction<boolean>) => {
            state.videoFormat = action.payload;
        }
    }
})

export const selectSearch = (state:RootState) => state.filter.search;
export const selectSort = (state:RootState) => state.filter.sort;
export const selectPage = (state:RootState) => state.filter.page;
export const selectForm = (state:RootState) => state.filter.videoFormat;
export const { setFilter, setPage, setSort, setForm } = filterSliCe.actions;
export default filterSliCe.reducer;