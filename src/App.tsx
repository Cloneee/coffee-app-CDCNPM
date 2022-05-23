import { Box } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";

import ProtectedRoutes from "./app/protect";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Cart } from "./pages/cart/Cart";
import { Error } from "./pages/Error";
import { Home } from "./pages/home/Home";
import { Product } from "./pages/product/Product";
import { Login, Profile, Register, ChangePassword } from "./pages/user";

function App() {
  return (
    <div>
      <Navbar />
      <Box sx={{minHeight: 600}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/change-password" element={<ChangePassword />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </Box>
      <Footer />
    </div>
  );
}

export default App;
