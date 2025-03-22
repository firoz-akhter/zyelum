import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
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
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <SubNavbar />
        <SearchSection />
        <Categories />
        <ChooseUs />
        <About />
        {/* <OurBrands /> */}
        <CustomersSays />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
