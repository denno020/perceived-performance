import React from "react";
import { Routes, Route } from "react-router-dom";
import PDP from "./PDP";
import PLP from "./PLP"
import Cart from "./Cart.jsx"

const Main = () => (
  <main>
    <Routes>
      <Route path="/" element={<PLP />} />
      <Route path="/pdp" element={<PDP />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  </main>
);

export default Main;
