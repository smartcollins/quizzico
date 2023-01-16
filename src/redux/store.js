import { configureStore } from "@reduxjs/toolkit";
import progressBarReducer from "./bar-features/barSlice";

export const store = configureStore({
    reducer:{
        progressBar: progressBarReducer,
    },  
})