import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ cartQuantity }) {
  return (
    <nav className="navbar">
      <button className="logo" to="/">
        <Link className="route_link" to="/">
          Rent-A-Pokemon
        </Link>
      </button>
      <button className="cart">
        <Link className="route_link" to="/cart">
          {cartQuantity ? (
            <div className="cart_quantity">{cartQuantity}</div>
          ) : null}
          <i className="fa-solid fa-cart-shopping"></i>
        </Link>
      </button>
    </nav>
  );
}
