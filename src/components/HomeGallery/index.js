import React from 'react';

import './style.scss';

export default function HomeGallery() {
  return (
    <section className="homeGallery-container">
      <div className="homeGallery-box">
        <img
          alt="elvis"
          src="https://images.pexels.com/photos/270968/pexels-photo-270968.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        />
      </div>
      <div className="homeGallery-box">
        <img
          alt="hat"
          src="https://images.pexels.com/photos/3027243/pexels-photo-3027243.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        />
      </div>
      <div className="homeGallery-box">
        <img
          alt="elvis"
          src="https://images.pexels.com/photos/7654086/pexels-photo-7654086.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        />
      </div>
      <div className="homeGallery-box">
        <img
          alt="elvis"
          src="https://images.pexels.com/photos/5750772/pexels-photo-5750772.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        />
      </div>
    </section>
  );
}
