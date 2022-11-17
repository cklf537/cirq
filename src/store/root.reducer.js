import { createSlice, current } from "@reduxjs/toolkit";
import produce from "immer";
import { getUniqueTags, tag } from "../util/util";
import { filterTages } from './extend.rootreducer';


const rootState = {
    questions:[]
};

export const rootSlice = createSlice({
    name: 'root',
    initialState: rootState,
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


export const {FILTER_BY_TAGS, LOAD_DATA} = rootSlice.actions;
export default rootSlice.reducer;