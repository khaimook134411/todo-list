import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  item: "",
};

export const listItemStore = createSlice({
  name: "item",
  initialState: initialState,
  reducers: {},
});
