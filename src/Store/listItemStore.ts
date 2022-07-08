import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  item: "eiei",
};

export const listItemStore = createSlice({
  name: "item",
  initialState: initialState,
  reducers: {},
});
