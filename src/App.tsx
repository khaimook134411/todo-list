import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Detail from "./pages/Detail";
import Landing from "./pages/Landing";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
