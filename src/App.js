import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home, Blog } from "./components/index";

const App = () => {
  return (
    <BrowserRouter basename='yakuzen'>
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/blog`} element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;