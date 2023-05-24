import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.count += 1;
    },
    decrement: (state, action) => {
      state.count -= 1;
    },
    reset: (state, action) => {
      state.count = 0;
    },
    increaseByAmount: (state, action) => {
        state.count += 2;
        console.log(action)
    }
  },
});

export const { increment, decrement, reset, increaseByAmount } = counterSlice.actions;
export default counterSlice.reducer;
