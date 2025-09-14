import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Statistics from "./pages/Statistics";
import Workshops from "./pages/Workshops";
import AppNavbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/workshops" element={<Workshops />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
