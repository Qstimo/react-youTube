import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';


export const fetchVideos = createAsyncThunk(
    'videos/fetchVideosStatus',
    async (params) => {
        const {
            query,
            regionCode,
            order,
            maxResults,
        } = params;
        const apiKey = 'AIzaSyD0r7qUDnou4e9FX-_x2h503aErHcX4wn4';
        const apiUrlSearch = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&regionCode=${regionCode}&order=${order}&maxResults=${maxResults}&key=${apiKey}`;
        const { data } = await axios.get(apiUrlSearch);
        return data.items
    }
)



const initialState = {
    items: [],
    status: 'loading' || 'success' || 'error'
}

const videoSlice = createSlice({
    name: 'videos',
    initialState,
    reducers: {
        setItems(state, action) {
            state.items = action.payload;
            // state.items = [];
        }
    },

    extraReducers: (builder) => {
        builder.addCase(fetchVideos.pending, (state, action) => {
            state.status = 'loading';
        })
        builder.addCase(fetchVideos.fulfilled, (state, action) => {
            state.status = 'success';
            state.items = action.payload;
        })
        builder.addCase(fetchVideos.rejected, (state, action) => {
            state.status = 'error';
            state.items = [];
        })
    }
})

export const selectVideosData = (state) => state.videos
export const { setItems } = videoSlice.actions;
export default videoSlice.reducer;