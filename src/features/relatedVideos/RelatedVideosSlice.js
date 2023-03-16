import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRelatedVideo } from "./RelatedVideosApi";


//initial state
const initialState = {
    isLoading: false,
    isError: false,
    relatedVideo: [],
    error: ""
}

// async thunk
export const fetchRelatedVideo = createAsyncThunk("Videos/fetchRelatedVideo", async ({ currentId, tags }) => {
    
    const videos = await getRelatedVideo({currentId, tags })
    return videos;
})

// slice reducer
const RelatedVideoSlice = createSlice({
    name: "relatedVideos",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchRelatedVideo.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(fetchRelatedVideo.fulfilled, (state, action) => {
                state.isLoading = false;
                state.relatedVideo = action.payload;
            })
            .addCase(fetchRelatedVideo.rejected, (state, action) => {
                state.isLoading = false;
                state.relatedVideo = [];
                state.isError = true;
                state.error = action.error?.message
            })
    }
})

export default RelatedVideoSlice.reducer