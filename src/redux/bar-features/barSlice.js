import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  progressBar: sessionStorage.getItem("progress_bar") || 0,
};

export const barSlice = createSlice({
  name: "progressbAR",
  initialState,
  reducers: {
    increment: (state)=> {
      state.progressBar = 25;
      sessionStorage.setItem("progress_bar", state.progressBar) 
    },
    incrementByamount:(state) =>{
      state.progressBar += 25;
      sessionStorage.setItem("progress_bar", state.progressBar) 
    },
    decrementByamount:(state) =>{
    state.progressBar = state.progressBar > 0 && state.progressBar - 25;
    sessionStorage.setItem("progress_bar", state.progressBar) ;
    },
  },
});

export const { increment, incrementByamount, decrementByamount } = barSlice.actions;
export const barSelection = (state) => state.progressBar.progressBar;
export default barSlice.reducer;
