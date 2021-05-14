import React from 'react';

import './style.scss';

export default function AddToBag({ text, add, btnDisabled }) {
  return (
    <button disabled={btnDisabled} className="bagButton" onClick={add}>
      {text}
    </button>
  );
}
