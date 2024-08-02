import React from 'react';

import TechnologyInnovation from '../components/TechnologyInnovation'
import Form from '../components/Form';
import Header from '../components/Header';
import HeaderImg from '../components/HeaderImg'

import investImg from '../assets/Investor.png';
 
import bannerStyles from '../components/styles/InvestorBanner.module.css';

function Investor() {
  return (
    <>
      <Header>
        <HeaderImg src={investImg} />
        <section className={bannerStyles.textSection}>
          <h1 className={bannerStyles.textTop}>A Better Future..</h1>
          <a className={bannerStyles.bottomRight} href='#contact-form'>Built Together </a> 
        </section>
       

      </Header>
      <TechnologyInnovation/>
      <Form id='contact-form'/>
    </>
  );
}

export default Investor;
