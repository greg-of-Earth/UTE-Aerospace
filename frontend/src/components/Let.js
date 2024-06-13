import React from 'react';
import './Let.css'; // Ensure the file path is correct

/**
 * Component: Let
 * Purpose: Displays an engaging section about the innovative aspects of Ute Aerospace, 
 * specifically highlighting the M1 UTE aircraft. This component is designed to captivate
 * visitors and encourage them to learn more about Ute Aerospace's projects.
 * 
 * Usage:
 * <Let />
 * 
 * This component should be used on pages where showcasing specific projects or 
 * innovations is relevant. It includes a call to action that directs users to additional
 * resources or contact pages.
 */
function Let() {
    return (
      <div className="let-container">
        <h2>Let's Build the Future of Flight, Together!</h2>
        <div className="let-content">
          <ul>
            <li className='line1'>—  The M1 UTE features VTOL capabilities and an impressive internal cargo capacity of 136 Kg.</li>
            <li className='line2'>— Our patent dual operator feature allows for both manned and autonomous flight.</li>
            <li className='line3'> — Field replaceable components provide durability and resilience for rugged conditions.</li>
          </ul>
          <button>Learn More</button>
        </div>
      </div>
    );
  }
  

export default Let;
