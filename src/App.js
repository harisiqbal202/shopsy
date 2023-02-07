import "./App.css";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Productslist from "./component/Productslist";
import Product from "./component/Product";
import Footer from "./component/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/products" element={<Productslist />} />
        <Route path="/products/:id" element={<Product />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
