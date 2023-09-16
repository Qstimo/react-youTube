import { configureStore } from "@reduxjs/toolkit";
import themeReducer from '../Component/Theme/slice'
import filter from './slices/filterSlice'
import videos from "./slices/videosSlice";

const store = configureStore({
    reducer: {
        theme: themeReducer,
        filter,
        videos,

    }
})

export default store