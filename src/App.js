import React from "react";
import Product from "./pages/Product";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductList from "./pages/ProductList";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter, Route, Routes,Navigate } from "react-router-dom";


const App = () =>  { 
  const user = true;
 
  return (
   
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/:id" element={<Product />} />
      <Route path="/products/:category" element={<ProductList />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={user ? <Navigate to="/" replace /> :  <Login />}  />
      <Route path = "/register" element={user ? <Navigate to="/" replace /> :  <Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
