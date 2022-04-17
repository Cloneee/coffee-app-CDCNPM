import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Product } from "./pages/product/Product";
import ProtectedRoutes from "./app/protect";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Login } from "./pages/user/Login";
import { Register } from "./pages/user/Register";
import { Box } from "@mui/material";
import { Profile } from "./pages/user/Profile";

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
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
