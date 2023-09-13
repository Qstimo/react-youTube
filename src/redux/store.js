import { configureStore } from "@reduxjs/toolkit";
import themeReducer from '../Component/Theme/slice'

const store = configureStore({
    reducer: {
        theme: themeReducer,
    }
})

export default store