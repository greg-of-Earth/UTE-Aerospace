import React from 'react';

import Model1PictureStyles from "./Model1Picture.module.css"; // Import your CSS module

import model1 from '../assets/model1.png';


function Model1Picture() {
  return (
    <header className={Model1PictureStyles.model1Container}>  // Use camelCase for class names
      <h1>Model 1</h1>

      <img src={model1} alt="Model 1 Drone" className={Model1PictureStyles.model1Image}  />
    </div>
  );
}

export default Model1Picture;

