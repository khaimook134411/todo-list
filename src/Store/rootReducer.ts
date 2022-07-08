import { combineReducers } from "redux";
import { listItemStore } from "./listItemStore";

export const rootReducer = combineReducers({
  item: listItemStore.reducer,
});
export type rootType = ReturnType<typeof rootReducer>;
