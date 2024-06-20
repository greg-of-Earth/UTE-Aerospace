import React from 'react';
import './Model1Picture.css'; // Import the CSS file for styling
import model1 from '../assets/model1.png';

function Model1Picture() {
  return (
    <div className="model1-container">
      <h1>Model 1</h1>
      <img src={model1} alt="Model 1 Drone" className="model1-image" />
    </div>
  );
}

export default Model1Picture;
