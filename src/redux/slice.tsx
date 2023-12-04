import { createSlice } from "@reduxjs/toolkit";

const initialState = { loanCategory: [] };
const Slice = createSlice({
  name: "loan",
  initialState,
  reducers: {
    peronalLoanReducer: () => {},
  },
});

export const { peronalLoanReducer } = Slice.actions;
export default Slice.reducer;
