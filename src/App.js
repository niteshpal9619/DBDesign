import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./container/Navbar";
import Product from "./container/Product";
import UseCases from "./container/UseCases";
import Resources from "./container/Resources";
import Login from "./container/Login";
import PricingSection from "./container/PricingSection";

function App() {
  return (
    <>
      <div>        
        <Router>          
          <Navbar />
          <Routes>
            <Route path="/product" element={<Product />} />
            <Route path="/use-cases" element={<UseCases />} />
            <Route path="/Resources" element={<Resources />} />
            <Route path="/PricingSection" element={<PricingSection />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
