import React from "react";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import "./App.css";
import Detail from "./pages/Detail/Detail";
import Landing from "./pages/Landing/Landing";
import { store, persistedStore } from "./Store/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistedStore}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/detail" element={<Detail />} />
          </Routes>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
