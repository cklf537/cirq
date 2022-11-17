import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "./header.reducer";
import rootReducer from "./root.reducer";

export const AppStore = configureStore({
    reducer:{
        root: rootReducer,
        header: headerReducer,
    }
})