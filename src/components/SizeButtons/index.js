import React, { useContext } from 'react';

import { BagContext } from 'context/BagContext';

import './style.scss';

export default function SizeButtons() {
  const { setSize, size, setAddToBagDisabled } = useContext(BagContext);

  const configSize = (size) => {
    setSize(size);
    setAddToBagDisabled(false);
  };

  return (
    <div className="sizebuttons-container">
      <button
        className={`sizebuttons-option ${size === 'S' && 'option-active'}`}
        onClick={() => configSize('S')}
      >
        <span>S</span>
      </button>
      <button
        className={`sizebuttons-option ${size === 'M' && 'option-active'}`}
        onClick={() => configSize('M')}
      >
        <span>M</span>
      </button>
      <button
        className={`sizebuttons-option ${size === 'L' && 'option-active'}`}
        onClick={() => configSize('L')}
      >
        <span>L</span>
      </button>
      <button
        className={`sizebuttons-option ${size === 'XL' && 'option-active'}`}
        onClick={() => configSize('XL')}
      >
        <span>XL</span>
      </button>
    </div>
  );
}
