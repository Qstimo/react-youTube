import { configureStore } from "@reduxjs/toolkit";
import themeReducer from '../Component/Theme/slice'
import filter from './slices/filterSlice'

const store = configureStore({
    reducer: {
        theme: themeReducer,
        filter,
    }
})

export default store