import * as React from "react";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import PageNotFound from "./components/PageNotFound";
import Home from './components/home/Home';
import { Header } from "./components/header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        {/* login page       */}
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
