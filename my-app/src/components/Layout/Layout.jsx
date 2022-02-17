import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import AboutUs from "../AboutUs/AboutUs";

function Layout() {
  return (
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />            
            <Route path="/ke-es-esto" element={<AboutUs/>} />
          </Routes>
        </main>
        <Footer/>
      </BrowserRouter>
  );
}

export default Layout;
