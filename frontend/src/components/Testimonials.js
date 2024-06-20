import React from 'react';
import './Testimonials.css';
import no_image from '../assets/no_image.png';

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
        <figure className="testimonial">
            <img className="testimonial-image" src={no_image} alt='profile'/>
            <figcaption>Incredible experience - Gregory</figcaption>
        </figure>
        <figure className="testimonial">
            <img className="testimonial-image" src={no_image} alt='profile'/>
            <figcaption>Incredible experience - Gregory</figcaption>
        </figure>
        <figure className="testimonial">
            <img className="testimonial-image" src={no_image} alt='profile'/>
            <figcaption>Incredible experience - Gregory</figcaption>
        </figure>
    </div>
  );
}

export default Testimonials; 