import React from "react";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Detail from "./pages/Detail/Detail";
import Landing from "./pages/Landing/Landing";
import { store } from "./Store/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
