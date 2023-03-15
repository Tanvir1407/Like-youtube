import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getTags } from "./TagApi"

// initialSate
const initialState = {
    isLoading: false,
    isError: false,
    tags: [],
    error: ""
}

//async thunk
export const fetchTags = createAsyncThunk("tags/fetchTags", async () => {
    const tags = await getTags()
    return tags 
})

// Tags Slice 
const tagSlice = createSlice({
    name: "Tags",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchTags.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(fetchTags.fulfilled, (state, action) => {
                state.isLoading = false;
                state.tags = action.payload;
            })
            .addCase(fetchTags.rejected, (state, action) => {
                state.isLoading = false;
                state.tags = [];
                state.isError = true;
                state.error = action.error?.message
            })
    }
})

export default tagSlice.reducer