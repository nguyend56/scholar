// import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
// import TopComputers from "./pages/TopComputers";
import React from "react";

import TopManufacturers from "./pages/TopManufacturers";
import History from "./pages/History";
import ComputerVersion from "./pages/ComputerVersion";
import ComputerInfo from "./pages/ComputerInfo";
import About from "./pages/About";
import TermOfUse from "./pages/TermOfUse";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Address from "./pages/Address";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/top-manufactures' element={<TopManufacturers/>}/>
        <Route path='/computerVersion' element={<ComputerVersion/>}/>
        <Route path='/history' element={<History/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/termOfUse' element={<TermOfUse/>}/>
        <Route path='/privacyPolicy' element={<PrivacyPolicy/>}/>
        <Route path='/address' element={<Address/>}/>
        <Route path='/computer-info/:searchString' element={<ComputerInfo/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

