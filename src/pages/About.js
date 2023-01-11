import React from 'react';
import Navbar from '../components/Navbar';

export default function About({ cart }) {
  return (
    <>
      <Navbar cart={cart} />
      <div className="content">
        <h1 className="main_headline">
          The Pokemon on our roster are bored and want to battle.
        </h1>
        <h2 className="sub_headline">
          The creator of this site is{' '}
          <a href="https://github.com/azboss2021" target="#">
            here
          </a>{' '}
          (will open in new tab)
        </h2>
      </div>
    </>
  );
}
