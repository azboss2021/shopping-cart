import React, { useState } from 'react';
import Content from '../components/Content';
import Navbar from '../components/Navbar';
import Products from '../components/Products';

export default function Home({
  productsLoaded,
  setProductsLoaded,
  products,
  setProducts,
  cart,
  setCart,
  cartQuantity,
  setCartQuantity,
  setCartCost,
}) {
  return (
    <div>
      <Navbar cartQuantity={cartQuantity} />
      <Content />
      <Products
        products={products}
        setProducts={setProducts}
        productsLoaded={productsLoaded}
        setProductsLoaded={setProductsLoaded}
        cart={cart}
        setCart={setCart}
        setCartQuantity={setCartQuantity}
        setCartCost={setCartCost}
      />
    </div>
  );
}
