import { configureStore } from "@reduxjs/toolkit";
import themeReducer from '../Component/Theme/slice'
import filter from './slices/filterSlice'
import filterSlice from "./slices/filterSlice";

const store = configureStore({
    reducer: {
        theme: themeReducer,
        filter: filterSlice
    }
})

export default store