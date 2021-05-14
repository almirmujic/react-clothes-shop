import React from 'react';

import motionVideo from 'assets/motion-video.mp4';

import './style.scss';

export default function VideoHeader({ children }) {
  return (
    <div className="video-wrap">
      <video
        src={motionVideo}
        playsInline
        autoPlay="autoplay"
        muted="muted"
        loop="loop"
        tabIndex="-1"
      ></video>
      {children}
    </div>
  );
}
