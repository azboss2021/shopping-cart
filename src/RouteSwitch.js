import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';

export default function RouteSwitch() {
  const [products, setProducts] = useState([]);
  const [productsLoaded, setProductsLoaded] = useState(false);
  const [cart, setCart] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [cartCost, setCartCost] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              products={products}
              setProducts={setProducts}
              productsLoaded={productsLoaded}
              setProductsLoaded={setProductsLoaded}
              cart={cart}
              cartQuantity={cartQuantity}
              setCartQuantity={setCartQuantity}
              setCart={setCart}
              setCartCost={setCartCost}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart cart={cart} cartQuantity={cartQuantity} cartCost={cartCost} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
