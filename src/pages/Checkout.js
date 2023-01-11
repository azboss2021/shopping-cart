import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Checkout({ cart }) {
  return (
    <>
      <Navbar cart={cart} />
      <div className="content">
        <h1>Go catch the Pokemon yourself!</h1>
        <Link to="/">
          <button className="remove_from_cart">Click here to go back</button>
        </Link>
      </div>
    </>
  );
}
