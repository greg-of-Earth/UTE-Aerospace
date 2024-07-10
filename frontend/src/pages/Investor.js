import React from 'react';
// import InvestorBanner from '../components/InvestorBanner'; 
import TechnologyInnovation from '../components/TechnologyInnovation'
import Form from '../components/Form';
import Header from '../components/Header';
import HeaderImg from '../components/HeaderImg'
import HeadTitle from  '../components/HeaderTitle';

import investImg from '../assets/Investor.png';
 
import bannerStyles from '../components/InvestorBanner.module.css';

function Investor() {
  return (
    <>
      <Header>
        <HeaderImg src={investImg} style={{ height: '75dvh'}}/>
        
          <HeadTitle headTitle='A Better Future..' style={{ top: '60%', left: '65%',textWrap: 'nowrap'}}/>
          <a className={bannerStyles.bottomRight} href='#contact-form' style={{ transform: 'translate(-50%, -50%)', color: 'aliceblue'}}>Built Together </a> 
      
      </Header>
      {/* <InvestorBanner />  */}
      <TechnologyInnovation/>
      <Form id='contact-form'/>
    </>
  );
}

export default Investor;
