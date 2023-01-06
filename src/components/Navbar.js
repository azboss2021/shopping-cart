import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <button className="logo" to="/">
        <Link className="route_link" to="/">
          MoneyMaker
        </Link>
      </button>
      <ul className="links">
        <li>
          <Link className="route_link" to="/products">
            Products
          </Link>
        </li>
        <li>
          <Link className="route_link" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="route_link" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
      <button className="cart">
        <Link className="route_link" to="/cart">
          <i className="fa-solid fa-cart-shopping"></i>
        </Link>
      </button>
    </nav>
  );
}
