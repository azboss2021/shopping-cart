import React from 'react';
import Navbar from '../components/Navbar';

export default function Contact({ cart }) {
  return (
    <>
      <Navbar cart={cart} />
      <div className="content">
        <h1 className="main_headline">
          This is where you can learn how to contact us.
        </h1>
        <h2 className="sub_headline">
          Try{' '}
          <a
            href="https://www.linkedin.com/in/caleb-wilson-8a81b7225/"
            target="#"
          >
            this link
          </a>
          . (opens LinkedIn in new tab)
        </h2>
      </div>
    </>
  );
}
