import React from 'react';
import CartProducts from '../components/CartProducts';
import Navbar from '../components/Navbar';
import TotalCost from '../components/TotalCost';

export default function Cart({ cart, cartCost, setCartCost, setCart }) {
  return (
    <>
      <Navbar cart={cart} />
      <CartProducts cart={cart} setCart={setCart} />
      <TotalCost cartCost={cartCost} cart={cart} setCartCost={setCartCost} />
    </>
  );
}
