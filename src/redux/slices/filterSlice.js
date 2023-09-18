import { createSlice } from '@reduxjs/toolkit'


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
        setFilter: (state, action) => {
            state.search = action.payload;
        },
        setSort: (state, action) => {
            state.sort = action.payload;
        },
        setPage: (state, action) => {
            state.page = action.payload;
        },
        setForm: (state, action) => {
            state.videoFormat = action.payload;
        }
    }
})

export const selectSearch = (state) => state.filter.search;
export const selectSort = (state) => state.filter.sort;
export const selectPage = (state) => state.filter.page;
export const selectForm = (state) => state.filter.videoFormat;
export const { setFilter, setPage, setSort, setForm } = filterSliCe.actions;
export default filterSliCe.reducer;