import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Product } from "./pages/product/Product";
import ProtectedRoutes from "./app/protect";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Login } from "./pages/user/Login";
import { Register } from "./pages/user/Register";
import { Profile } from "./pages/user/Profile";
import { Cart } from "./pages/cart/Cart";
import { Error } from "./Error";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
        <Route path="*" element={<Error />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
