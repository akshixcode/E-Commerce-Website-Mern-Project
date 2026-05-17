import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {},
});

export default testSlice.reducer;