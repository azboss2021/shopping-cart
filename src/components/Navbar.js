import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <button className="logo">Home</button>
      <ul className="links">
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <button className="cart">
        <i class="fa-solid fa-cart-shopping"></i>
      </button>
    </nav>
  );
}
