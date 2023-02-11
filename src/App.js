import "./App.css";
import Navbar from "./client/Navbar";
import Hero from "./client/Hero";
import Productslist from "./client/Productslist";
import Product from "./client/Product";
import Footer from "./client/Footer";
import { Routes, Route } from "react-router-dom";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import Admin from "./admin/Admin";
import Dashboard from "./admin/AdminDashboard";
import Category from "./admin/Category";
import Order from "./admin/Order";
import Customer from "./admin/Customer";
import ProductAdmin from "./admin/ProductAdmin";
import AddProduct from "./admin/product/AddProduct";
import EditProduct from "./admin/product/EditProduct";
import DetailProduct from "./admin/product/DetailProduct";
import DeleteProduct from "./admin/product/DeleteProduct";

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
        <Route path="/admin" element={<Admin />}>
          <Route path="" element={<Dashboard />} />
          <Route path="category" element={<Category />} />
          <Route path="order" element={<Order />} />
          <Route path="customer" element={<Customer />} />
          <Route path="productadmin" element={<ProductAdmin />} />
          <Route path="addproduct" element={<AddProduct />} />
          <Route path="editproduct/:id" element={<EditProduct />} />
          <Route path="deleteproduct/:id" element={<DeleteProduct />} />
          <Route path="detailproduct/:id" element={<DetailProduct />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
