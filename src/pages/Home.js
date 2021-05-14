import React from 'react';
import { useHistory } from 'react-router-dom';

import VideoHeader from 'components/VideoHeader';
import ModelsSection from 'components/ModelsSection';
import BrandsSection from 'components/BrandsSection';
import HomeGallery from 'components/HomeGallery';

import './Home.scss';

export default function Home() {
  const history = useHistory();

  const goToStore = () => {
    history.push('/store');
  };

  return (
    <main>
      <VideoHeader>
        <div className="header-container">
          <h1>finir</h1>
          <div onClick={goToStore} className="header-storeBtn">
            shop
          </div>
        </div>
      </VideoHeader>
      <div className="home-subContainer">
        <h2 className="home-header-text">Men's fashion, all in one place.</h2>
        <div onClick={goToStore} className="home-viewBtn">
          view collection
        </div>
      </div>
      <ModelsSection />
      <BrandsSection />
      <div className="home-subContainer-dark">
        <h2 className="home-header-text">Timeless style.</h2>
        <div onClick={goToStore} className="home-viewBtn-dark">
          shop now
        </div>
      </div>
      <HomeGallery />
    </main>
  );
}
