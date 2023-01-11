import React from 'react';
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
  setCartCost,
}) {
  return (
    <div>
      <Navbar cart={cart} />
      <Content />
      <Products
        products={products}
        setProducts={setProducts}
        productsLoaded={productsLoaded}
        setProductsLoaded={setProductsLoaded}
        cart={cart}
        setCart={setCart}
        setCartCost={setCartCost}
      />
    </div>
  );
}
