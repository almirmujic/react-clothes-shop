import React from 'react';

import './style.scss';

export default function LoadingSpinner() {
  return (
    <div className="lds-ripple">
      <div></div>
      <div></div>
    </div>
  );
}
