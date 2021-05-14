import React, { useContext } from 'react';

import { ProductsContext } from 'context/ProductsContext';

import './style.scss';

export default function Filter() {
  const { setItemKeyword, itemKeyword } = useContext(ProductsContext);

  return (
    <div className="filterWrap">
      <button
        className={itemKeyword === 'shirt' ? 'active' : undefined}
        onClick={() => {
          setItemKeyword('shirt');
        }}
      >
        <h6>SHIRTS</h6>
      </button>
      <button
        className={itemKeyword === 'hoodie' ? 'active' : undefined}
        onClick={() => setItemKeyword('hoodie')}
      >
        <h6>HOODIES</h6>
      </button>
      <button
        className={itemKeyword === 'pants' ? 'active' : undefined}
        onClick={() => setItemKeyword('pants')}
      >
        <h6>PANTS</h6>
      </button>
      <button
        className={itemKeyword === 'shorts' ? 'active' : undefined}
        onClick={() => setItemKeyword('shorts')}
      >
        <h6>SHORTS</h6>
      </button>
      <button
        className={itemKeyword === 'jacket' ? 'active' : undefined}
        onClick={() => setItemKeyword('jacket')}
      >
        <h6>JACKETS</h6>
      </button>
    </div>
  );
}
