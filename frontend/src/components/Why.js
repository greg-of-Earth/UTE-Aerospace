import React from 'react';
import styles from './Why.module.css'; // Ensure the file path is correct

/**
 * Component: WhyUteAerospace
 * Purpose: Displays an informational section about Ute Aerospace, highlighting the company's 
 * commitment to innovation and providing a brief about the opportunities it offers. This component
 * is designed to inform visitors about Ute Aerospace's core mission and invite them to join the team.
 * 
 * Usage:
 * <WhyUteAerospace />
 * 
 * This component should be used on pages where detailed information about the company's vision
 * and mission is relevant. It includes a call to action that encourages user engagement.
 */
function WhyUteAerospace() {
  return (
    <div className={styles['why-ute-aerospace-container']}>
      <h2>Why UTE Aerospace?</h2>
      <article className={styles['why-ute-aerospace']}>
        <p>
          UTE Aerospace is dedicated to building and enriching the Engineer of the
          Future. Led by former NASA and Rocketdyne engineers with over 65 years
          of combined aerospace experience, we offer unparalleled opportunities for
          growth and innovation. At UTE Aerospace, we foster a dynamic environment
          where cutting-edge technology meets visionary talent, enabling our team to
          pioneer advancements in aerospace engineering.
        <br/>
        <br/>
          Opportunities include: Aerospace, Mechanical, Software, Electrical,
          Structural, and more.
        </p>
        <button>Join Us Today!</button>
      </article>
    </div>
  );
}

export default WhyUteAerospace;
