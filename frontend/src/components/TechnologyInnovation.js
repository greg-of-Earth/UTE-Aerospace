import React from 'react';
import TechStyles from './TechStyles.module.css'; // Import your CSS module
// import HeaderTitle from './HeaderTitle';

const TechnologyInnovation = () => {
  return (

    <>
      <h1>
        Technology and Innovation at Ute Aerospace

      </h1>
 

    <div className={TechStyles.container}>
     
      <div className={TechStyles.contentSection}>
        <h2 className={TechStyles.title}>Advanced Aerospace Design</h2>
        <p className={TechStyles.description}>
          Ute Aerospace's M1 UTE showcases cutting-edge VTOL capabilities and a robust 136 kg cargo capacity,
          designed for both manned and autonomous operations. Our unique dual-operator feature enhances safety
          and operational efficiency, supported by field-replaceable components for unmatched resilience under rugged conditions.
        </p>
        <h2 className={TechStyles.title}>Engineering Expertise</h2>
        <p className={TechStyles.description}>
          Led by a team with over 65 years of combined experience from NASA and Rocketdyne, we push the boundaries of aerospace
          technology, ensuring our designs meet both current and future industry demands.
        </p>
      </div>
    </div>
    </>
  );
}

export default TechnologyInnovation;
