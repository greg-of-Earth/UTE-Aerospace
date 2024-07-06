import React from 'react';
import InvestorBanner from '../components/InvestorBanner'; 
import TechnologyInnovation from '../components/TechnologyInnovation'
import Form from '../components/Form';

function Investor() {
  return (
    <>
     
      <InvestorBanner /> 
      <TechnologyInnovation/>
      <Form id='contact-form'/>
    </>
  );
}

export default Investor;
