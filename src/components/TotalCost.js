import React, { useEffect } from 'react';

export default function TotalCost({ cartCost, cart, setCartCost }) {
  useEffect(() => {
    setCartCost(
      cart.reduce((acc, curr) => {
        return acc + curr.product.price * curr.quantity;
      }, 0)
    );
  }, [cart]);

  return (
    <aside className="total_cost_area">
      <p>
        Your total for this order is:{' '}
        <span style={{ fontWeight: 'bold' }}>${cartCost}</span>
      </p>
      <button className="checkout_button">Checkout</button>
    </aside>
  );
}
