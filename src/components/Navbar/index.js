import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { BagContext } from 'context/BagContext';

import './style.scss';

export default function Navbar() {
  const { bag, setOpen } = useContext(BagContext);
  return (
    <nav className="navbar">
      <div>
        <Link to="/store">
          <h5>Store</h5>
        </Link>
      </div>
      <Link
        to="/"
        style={{
          fontStyle: 'italic',
        }}
      >
        <h2>finir</h2>
      </Link>
      <div onClick={() => setOpen((prevState) => !prevState)}>
        <h5>Bag ({bag.length})</h5>
      </div>
    </nav>
  );
}
