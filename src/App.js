import "./App.css";
import Navbar from "./component/customer/Navbar";
import Hero from "./component/customer/Hero";
import Productslist from "./component/customer/Productslist";
import Product from "./component/customer/Product";
import Footer from "./component/customer/Footer";
import { Routes, Route } from "react-router-dom";
import Login from "./component/auth/Login";
import Signup from "./component/auth/Signup";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products" element={<Productslist />} />

        <Route path="/products/:id" element={<Product />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
