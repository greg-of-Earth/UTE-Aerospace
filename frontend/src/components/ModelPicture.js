import React from 'react';

import Model1PictureStyles from "./Model1Picture.module.css"; // Import your CSS module

import model1 from '../assets/model_sketch.png';


function Model1Picture() {
  return (
    <header className={Model1PictureStyles.model1Container}>  
      <h1>Model 1</h1>

      <img src={model1} alt="Model 1 Drone" style={{width: '100%', margin: '0'}} className={Model1PictureStyles.model1Image}  />
    </header>
  );
}

export default Model1Picture;

