import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type listItems = {
  items: string[];
};
const initialState: listItems = {
  items: [],
};

export const listItemStore = createSlice({
  name: "items",
  initialState: initialState,
  reducers: {
    add: (state, action: PayloadAction<{ item: string }>) => {
      return {
        ...state,
        items: [...state.items, action.payload.item],
      };
    },
    // delete: (state) => {
    //   return {
    //     ...state,
    //     items: [...state.items, initialState.items],
    //   };
    // },
    // edit: (state) => {
    //   return { ...state, item: (state.item = 0) };
    // },
  },
});

export const { add } = listItemStore.actions;
