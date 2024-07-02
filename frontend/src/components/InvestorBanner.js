import React from 'react';
import bannerStyles from './InvestorBanner.module.css';

import backgroundImg from '../assets/Investor.png'; // Importing the image

function InvestorBanner() {
  return (
    <div className={bannerStyles.banner} style={{ backgroundImage: `url(${backgroundImg})` }}>
      <h1 className={bannerStyles.topLeft}>The Future is Flight</h1>
      <p className={bannerStyles.bottomRight}>Partner with us.</p>
    </div>
  );
}

export default InvestorBanner;
