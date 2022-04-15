import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Product } from "./pages/product/Product";
import ProtectedRoutes from "./app/protect";
import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/product" element={<Product />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
