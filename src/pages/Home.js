import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Products from "../components/Products";

export default function Home({
  productsLoaded,
  setProductsLoaded,
  products,
  setProducts,
}) {
  return (
    <div>
      <Navbar />
      <Products
        products={products}
        setProducts={setProducts}
        productsLoaded={productsLoaded}
        setProductsLoaded={setProductsLoaded}
      />
    </div>
  );
}
