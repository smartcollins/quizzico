import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  progressBar: 0,
};

export const barSlice = createSlice({
  name: "progressbAR",
  initialState,
  reducers: {
    increment: (state)=> {
      state.progressBar = 25;
    },
    incrementByamount:(state) =>{
      state.progressBar += 25;
    },
  },
});

export const { increment, incrementByamount } = barSlice.actions;
export const barSelection = (state) => state.progressBar.progressBar;
export default barSlice.reducer;
