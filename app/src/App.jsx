import './App.css';

import React from "react";
import {Routes, Route, Link} from "react-router-dom";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import MentionsLegales from "./pages/Mentions-legales";

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/services">services</Link>
        <Link to="/portfolio">portfolio</Link>
        <Link to="/contact">contact</Link>
        <Link to="/mentionslegales">Mentions Légales</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/services" element={<Services/>}></Route>
        <Route path="/portfolio" element={<Portfolio/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/mentionslegales" element={<MentionsLegales/>}></Route>
      </Routes>
      
    </>
  )
}

export default App
