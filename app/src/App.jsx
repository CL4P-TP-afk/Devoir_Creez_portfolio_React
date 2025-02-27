import "./App.css";

import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Nav from "./components/Nav";
import Foot from "./components/Footer";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import MentionsLegales from "./pages/Mentions-legales";

function App() {
  return (
    <>
      <Nav />

      <Foot />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/mentionslegales" element={<MentionsLegales />}></Route>
      </Routes>
    </>
  );
}

export default App;
