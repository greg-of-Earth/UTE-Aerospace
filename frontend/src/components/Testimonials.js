import React from 'react';
import './Testimonials.css';

/**
 * Component: Testimonials
 * Description: Displays a list of testimonials in a grid layout. Each testimonial includes
 * a silhouette image and a quote from a customer. This component is designed to showcase
 * customer feedback on the services or products offered.
 *
 * Props: None
 *
 * Usage:
 * <Testimonials />
 */

function Testimonials() {
  return (

    // Main container for testimonials
    <div className="testimonials-container">
      <h2>Testimonials</h2>
      <div className="testimonials-grid">
        <div className="testimonial">
          <div className="testimonial-content">
            <div className="testimonial-image" style={{ backgroundImage: 'url(/testimonials.png)' }}></div>
            <p>Incredible experience - Gregory</p>
          </div>
        </div>
        <div className="testimonial">
          <div className="testimonial-content">
            <div className="testimonial-image" style={{ backgroundImage: 'url(/testimonials.png)' }}></div>
            <p>Could not ask for a better opportunity. - Charlie</p>
          </div>
        </div>
        <div className="testimonial">
          <div className="testimonial-content">
            <div className="testimonial-image" style={{ backgroundImage: 'url(/testimonials.png)' }}></div>
            <p>A company that grows engineers! - Jimmy</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;  // Exporting the Testimonials component for use in other parts of the app
