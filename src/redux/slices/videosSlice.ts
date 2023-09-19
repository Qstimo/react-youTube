import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import { RootState } from '../store';


export type Videos={
    "kind": "youtube#searchResult",
    "etag": string,
    "id": {
      "kind": string,
      "videoId": string,
      "channelId": string,
      "playlistId": string
    },
    "snippet": {
      "publishedAt": any,
      "channelId": string,
      "title": string,
      "description": string,
      "thumbnails": {
        (key:any): {
          "url": string,
          "width": any,
          "height": any
        }
      },
      "channelTitle": string,
      "liveBroadcastContent": string
    }
  }

export type VideosDataType ={
    kind: "youtube#searchListResponse",
    etag: string,
    nextPageToken: string,
    prevPageToken: string,
    regionCode: string,
    pageInfo: {
      totalResults: string,
      resultsPerPage: string
    },
    items: Videos[],
  }
  
type FetchVideos={
    query:string
    regionCode:string,
    order: string,
    maxResults:number,
}


export const fetchVideos = createAsyncThunk<VideosDataType,FetchVideos>(
    'videos/fetchVideosStatus',
    async (params:FetchVideos) => {
        const {
            query,
            regionCode,
            order,
            maxResults,
            
        } = params;
        const apiKey = 'AIzaSyD0r7qUDnou4e9FX-_x2h503aErHcX4wn4';
         const apiUrlSearch = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&regionCode=${regionCode}&order=${order}&maxResults=${maxResults}&key=${apiKey}`; 
      
        const { data } = await axios.get<VideosDataType>(apiUrlSearch, {
            params: {
            },});
          return data
    }

)

interface VideosState{
    items:Videos[],
    status:string
}


const initialState:VideosState = {
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
        builder.addCase(fetchVideos.pending, (state, ) => {
            state.status = 'loading';
        })
        builder.addCase(fetchVideos.fulfilled, (state, action) => {
            state.status = 'success';
            state.items = action.payload.items;
        })
        builder.addCase(fetchVideos.rejected, (state, ) => {
            state.status = 'error';
            state.items = [];
        })
    }
})

export const selectVideosData = (state:RootState) => state.videos
export const { setItems } = videoSlice.actions;
export default videoSlice.reducer;