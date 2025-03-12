import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../index";

export const initialState = {
  count: 0,
};

const CountSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    toggleSiderBar: (state) => {
      state.count += 1;
    }
  },
  extraReducers: (builder) => {
     // viết các action bất động bộ
  }
});

export const { toggleSiderBar } = CountSlice.actions; 
export default CountSlice.reducer;
