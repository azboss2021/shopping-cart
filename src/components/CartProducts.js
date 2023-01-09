import React from 'react';
import CartItem from './CartItem';

export default function CartProducts({ cart }) {
  return (
    <div>
      {cart.map((product) => {
        <CartItem product={product} />;
      })}
    </div>
  );
}
