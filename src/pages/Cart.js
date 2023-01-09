import React from 'react';
import CartProducts from '../components/CartProducts';
import Navbar from '../components/Navbar';

export default function Cart({ cart, cartQuantity }) {
  return (
    <>
      <Navbar cartQuantity={cartQuantity} />
      <CartProducts />
    </>
  );
}
