import React from 'react';
import TechStyles from './styles/TechStyles.module.css';

const TechnologyInnovation = () => {
  return (

    <>
      
    <section className={TechStyles.infoSection}>

   
      <h1 className={TechStyles.articleHead}>
        Technology and Innovation at UTE Aerospace

      </h1>
    
      <article className={TechStyles.contentSection}>
        <h2 className={TechStyles.title}>Advanced Aerospace Design</h2>
        <p className={TechStyles.description}>
          UTE Aerospace's M1 UTE showcases cutting-edge VTOL capabilities and a robust 136 kg cargo capacity,
          designed for both manned and autonomous operations. Our unique dual-operator feature enhances safety
          and operational efficiency, supported by field-replaceable components for unmatched resilience under rugged conditions.
        </p>
        <h2 className={TechStyles.title}>Engineering Expertise</h2>
        <p className={TechStyles.description}>
          Led by a team with over 65 years of combined experience from NASA and Rocketdyne, we push the boundaries of aerospace
          technology, ensuring our designs meet both current and future industry demands.
        </p>
      </article>
      </section>
    </>
  );
}

export default TechnologyInnovation;
