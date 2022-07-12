import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "./rootReducer";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// export default () => {
//   let store = createStore(
//     persistedReducer,
//     composeWithDevTools(applyMiddleware())
//   );
//   let persistor = persistStore(store);
//   return { store, persistor };
// };

export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware())
);

export const persistedStore = persistStore(store);

// export default () => {
//   return { store, persistor: persistStore(store) };
// };
