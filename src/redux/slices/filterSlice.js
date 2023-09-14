import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    search: '',
}

const filterSliCe = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setFilter: (state, action) => {
            state.search = action.payload;
        }
    }
})

export const selectSearch = (state) => state.filter.search;
export const { setFilter } = filterSliCe.actions;
export default filterSliCe.reducer;