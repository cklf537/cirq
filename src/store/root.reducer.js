import { createSlice, current } from "@reduxjs/toolkit";
import produce from "immer";
import { getUniqueTags, tag } from "../util/util";


const initialState = {
    questions:[]
};

export const rootSlice = createSlice({
    name: 'root',
    initialState,
    reducers:{
        FILTER_BY_TAGS: (state, action)=>{
            const {tag, id} = action.payload;
            state.questions.data = state.questions.data.filter(question=>question.type.includes(tag));
            state.tags.totalTags[id].active = state.tags.totalTags[id].active === true ? false : true;
            // console.log(current(state));
        },
        LOAD_DATA:(state, action)=>{
            state.questions = action.payload;
            state.tags = {
                totalTags: tag(getUniqueTags(state.questions.data.filter(question=>question.type)))                 
            }
        }
    }
});

const highliteActiveTags = (state, tagId)=>{

}

export const {FILTER_BY_TAGS, LOAD_DATA} = rootSlice.actions;
export default rootSlice.reducer;