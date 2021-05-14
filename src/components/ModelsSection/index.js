import React from 'react';

import './style.scss';

export default function ModelsSection() {
  return (
    <section className="modelsSection-container">
      <div className="modelsSection-layout">
        <img
          alt="man-woman"
          src="https://images.pexels.com/photos/3692751/pexels-photo-3692751.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=200"
        />
        <img
          alt="man-woman"
          src="https://images.pexels.com/photos/7654081/pexels-photo-7654081.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        />
      </div>
    </section>
  );
}
