import * as React from "react";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import PageNotFound from "./components/PageNotFound";
import Home from './components/home/Home';
import { Header } from "./components/header/Header";
import Footer from './components/footer/Footer';
import SharedHosting from "./components/sharedHosting/SharedHosting";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header></Header>
      <Routes>
        {/* login page       */}
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="/shared-hosting" element={<SharedHosting />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>

  );
}

export default App;
