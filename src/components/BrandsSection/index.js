import React from 'react';

import './style.scss';

export default function BrandsSection() {
  return (
    <section className="brands-container">
      <div className="brands-layout">
        <img
          width="80px"
          alt="Fendi"
          src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Fendi_logo.svg"
        />
        <img
          width="80px"
          alt="Balenciaga"
          src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Balenciaga_Logo.svg"
        />
        <img
          width="100px"
          alt="Saint Laurent"
          src="https://upload.wikimedia.org/wikipedia/commons/2/25/Yves_Saint_Laurent_Logo2.svg"
        />
        <img
          width="80px"
          alt="Gucci"
          src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Gucci_logo.svg"
        />
        <img
          width="80px"
          alt="Acne Studios"
          src="https://upload.wikimedia.org/wikipedia/commons/d/d4/Acne_Studios_Logo.svg"
        />
        <img
          width="80px"
          alt="Kingsman"
          src="https://upload.wikimedia.org/wikipedia/commons/9/94/Kingsman._logo.svg"
        />
      </div>
    </section>
  );
}
