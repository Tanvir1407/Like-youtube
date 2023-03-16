import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getVideo } from "./videoApi";

//initial state
const initialState = {
    isLoading: false,
    isError: false,
    video: {},
    error: ""
}

// async thunk
export const fetchSingleVideo =createAsyncThunk("video/fetchVideo", async(id) => {
    const video = await getVideo(id)
    return video;
})

// slice reducer
const singleVideoSlice = createSlice({
    name: "video",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchSingleVideo.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(fetchSingleVideo.fulfilled, (state, action) => {
                state.isLoading = false;
                state.video = action.payload;
            })
            .addCase(fetchSingleVideo.rejected, (state, action) => {
                state.isLoading = false;
                state.video = {};
                state.isError = true;
                state.error = action.error?.message
            })
    }
})

export default singleVideoSlice.reducer