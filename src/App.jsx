import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import SubNavbar from "./components/SubNavbar";
import SearchSection from "./components/SearchSection";
import Categories from "./components/Categories";
import ChooseUs from "./components/ChooseUs";
import About from "./components/About";
import OurBrands from "./components/OurBrands";
import CustomersSays from "./components/CustomersSays";
import Footer from "./components/Footer";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SubNavbar />
                <SearchSection />
                <Categories />
                <ChooseUs />
                <About />
                <CustomersSays />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
