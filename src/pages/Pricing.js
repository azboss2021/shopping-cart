import React from 'react';
import Navbar from '../components/Navbar';

export default function Pricing({ cart }) {
  return (
    <>
      <Navbar cart={cart} />
      <div className="content">
        <h1 className="main_headline">
          We've got Pokemon to feed! It'll cost ya!
        </h1>
        <h2 className="sub_headline">
          But seriously, our pricing is randomly generated. (But don't tell
          anyone..🤫)
        </h2>
      </div>
    </>
  );
}
