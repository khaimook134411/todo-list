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
    del: (state, action: PayloadAction<{ index: number }>) => {
      return {
        ...state,
        items: state.items.filter((item, index) => {
          return index !== action.payload.index;
        }),
      };
    },
    edit: (
      state,
      action: PayloadAction<{ editIndex: number; editItem: string }>
    ) => {
      return {
        ...state,
        items: state.items.map((item, index) => {
          if (action.payload.editIndex === index + 1) {
            return action.payload.editItem;
          } else {
            return item;
          }
        }),
      };
    },
  },
});

export const { add, del, edit } = listItemStore.actions;
