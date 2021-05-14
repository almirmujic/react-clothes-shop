import React from 'react';
import ReactDOM from 'react-dom';

import './style.scss';

export default function Footer() {
  return ReactDOM.createPortal(
    <footer className="footer-container">
      <div className="footer-wrap">
        <span className="footer-copyright">
          © 2021 - demo made by{' '}
          <a className="portfolio-link" href="https://almir.dev">
            Almir
          </a>
        </span>
      </div>
    </footer>,
    document.getElementById('footerPortal')
  );
}
