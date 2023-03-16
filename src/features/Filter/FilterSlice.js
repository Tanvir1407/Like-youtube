import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    tags: [],
    search:""
}

const filterSlice = createSlice({
    name: "Filter",
    initialState,
    reducers: {
        tagSelected: (state, action) => {
            state.tags.push(action.payload)
        },
        tagRemoved: (state, action) => {
            const IndexToRemove = state.tags.indexOf(action.payload);
            if (IndexToRemove !== -1) {
                state.tags.splice(IndexToRemove, 1)
            }
        },
        searched: (state, action) => {
            state.search = action.payload
        }
    }

})

export default filterSlice.reducer;
export const { tagSelected,tagRemoved,searched} = filterSlice.actions;