import React from 'react';
import CartProducts from '../components/CartProducts';
import Navbar from '../components/Navbar';
import TotalCost from '../components/TotalCost';

export default function Cart({ cart, cartQuantity, cartCost }) {
  return (
    <>
      <Navbar cartQuantity={cartQuantity} />
      <CartProducts cart={cart} />
      <TotalCost cartCost={cartCost} />
    </>
  );
}
