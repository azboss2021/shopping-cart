import React from 'react';
import CartItem from './CartItem';

export default function CartProducts({ cart }) {
  return (
    <div className="cart_products">
      {cart.map((item) => {
        return <CartItem item={item} key={item.product.name} />;
      })}
    </div>
  );
}
