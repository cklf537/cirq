import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./root.reducer";

export const AppStore = configureStore({
    reducer:{
        root: rootReducer,
    }
})