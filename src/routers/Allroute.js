import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Product, Cart } from "../maincompent.js";
import { About } from "../About.js";
export const Allroute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};
