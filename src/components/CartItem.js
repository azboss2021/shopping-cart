import React from 'react';

export default function CartItem({ item }) {
  const removeFromCart = () => {};
  return (
    <div className="cart_item">
      <img alt={item.product.name} src={item.product.img}></img>
      <div className="cart_details">
        <p className="cart_item_name" style={{ textTransform: 'capitalize' }}>
          {item.product.name}
        </p>
        <p>Qty: {item.quantity}</p>
        <button className="remove_from_cart" onClick={removeFromCart}>
          Remove from Cart
        </button>
      </div>
      <div className="cart_item_cost">
        <p>Cost: {item.product.price * item.quantity}</p>
      </div>
    </div>
  );
}
