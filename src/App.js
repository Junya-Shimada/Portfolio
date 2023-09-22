import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home, Blog, Login, Post, OX } from "./components/index";

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/blog`} element={<Blog />} />
        <Route path={`/login`} element={<Login />} />
        <Route path={`/post`} element={<Post />} />
        <Route path={`/ox`} element={<OX />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;