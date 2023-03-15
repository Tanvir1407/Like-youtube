import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getVideos } from "./videoApi"

//initial state
const initialState = {
    isLoading: false,
    isError: false,
    videos: [],
    error: ""
}

// async thunk
export const fetchVideo =createAsyncThunk("videos/fetchVideo", async() => {
    const videos = await getVideos()
    return videos;
})

// slice reducer
const homeVideoSlice = createSlice({
    name: "videos",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchVideo.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(fetchVideo.fulfilled, (state, action) => {
                state.isLoading = false;
                state.videos = action.payload;
            })
            .addCase(fetchVideo.rejected, (state, action) => {
                state.isLoading = false;
                state.videos = [];
                state.isError = true;
                state.error = action.error?.message
            })
    }
})

export default homeVideoSlice.reducer