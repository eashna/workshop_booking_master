import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AppNavbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <AppNavbar />
      <div className="flex-grow-1">
        {/* Sirf Home page React se render hoga */}
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
