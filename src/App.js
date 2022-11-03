import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//compenent import
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import SellerPage from './Pages/Seller/SellerPage';
import AboutPage from "./Pages/About/AboutPage";
import Footer from "./Components/UI/Footer/Footer";
import ContactPage from './Pages/Contact/ContactPage';

function App() {
  return (
    <Router onUpdate={() => window.scrollTo(0, 0)}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Seller" element={<SellerPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/About" element={<AboutPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
