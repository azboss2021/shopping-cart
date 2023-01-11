import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Contact from './pages/Contact';

export default function RouteSwitch() {
  const [products, setProducts] = useState([]);
  const [productsLoaded, setProductsLoaded] = useState(false);
  const [cart, setCart] = useState([]);
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
              setCart={setCart}
              setCartCost={setCartCost}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              setCart={setCart}
              cartCost={cartCost}
              setCartCost={setCartCost}
            />
          }
        />
        <Route path="/pricing" element={<Pricing cart={cart} />} />
        <Route path="/about" element={<About cart={cart} />} />
        <Route path="/contact" element={<Contact cart={cart} />} />
      </Routes>
    </BrowserRouter>
  );
}
