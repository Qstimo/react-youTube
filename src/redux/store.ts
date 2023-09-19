import { configureStore } from "@reduxjs/toolkit";
import themeReducer from '../Component/Theme/slice'
import filter from './slices/filterSlice'
import videos from "./slices/videosSlice";
import { useDispatch } from "react-redux";

const store = configureStore({
    reducer: {
        theme: themeReducer,
        filter,
        videos,

    }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispath=()=>useDispatch<AppDispatch>();
export default store

