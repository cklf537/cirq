
import { createSlice, current } from "@reduxjs/toolkit";

const headerState = {
    displayTags: false,
};

const headerSlice = createSlice({
    name: "header",
    initialState: headerState,
    reducers:{
        SHOW_FILTERS: (state, action)=>{
            state.displayTags = state.displayTags === false ? true : false;
        }
    }
});

export const {SHOW_FILTERS} = headerSlice.actions;
export default headerSlice.reducer; 