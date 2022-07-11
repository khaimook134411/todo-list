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
      console.log(state.items);
      return {
        ...state,
        items: [...state.items, action.payload.item],
      };
    },
    del: (state, action: PayloadAction<{ index: number }>) => {
      return {
        ...state,
        items: state.items.filter((item, index) => {
          return index !== action.payload.index;
        }),
      };
    },
  },
});

export const { add, del } = listItemStore.actions;
