import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ cart }) {
  const [cartQuantity, setCartQuantity] = useState(0);

  useEffect(() => {
    setCartQuantity(cart.reduce((acc, curr) => acc + curr.quantity, 0));
  }, [cart]);

  return (
    <nav className="navbar">
      <Link className="route_link logo" to="/">
        Rent-A-Pokemon
      </Link>
      <div className="navbar_links">
        <Link className="route_link" to="/pricing">
          Pricing
        </Link>
        <Link className="route_link" to="/about">
          About
        </Link>
        <Link className="route_link" to="/contact">
          Contact
        </Link>
      </div>
      <div className="navbar_right">
        <Link className="route_link cart" to="/cart">
          <i className="fa-solid fa-cart-shopping"></i>
          {cartQuantity ? (
            <div className="cart_quantity">{cartQuantity}</div>
          ) : null}
        </Link>
      </div>
    </nav>
  );
}
