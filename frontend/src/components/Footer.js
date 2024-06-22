import React from 'react';
import footerStyles from './Footer.module.css';  // Ensure this points to the CSS module

function Footer() {
  return (
   
    <footer className={footerStyles.footer}>
    
      <div className={footerStyles.footerContent}>
        
       
        <div className={footerStyles.footerInfo}>
          <span>Phone: 888-888-8888 | Address: </span>
        </div>

       
        <div className={footerStyles.footerLinks}>
          <a href="/privacy">Privacy Notice</a><span>|</span>  
          <a href="/terms">Terms of Use</a><span>|</span>      
          <a href="/cookie">Cookie Settings</a><span>|</span>  
          <a href="/contact">Contact Us</a>                   
        </div>
        
      </div>
      
   
      <div className={footerStyles.footerCopy}>
        Copyright © 2024 UTE Aerospace - All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer; // Exporting the Footer component for use in other parts of the app