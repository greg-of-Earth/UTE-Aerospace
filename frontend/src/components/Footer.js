// Footer.js
import React from 'react';
import './Footer.css';



function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <span>Phone: 888-888-8888 | Address: </span>
        </div>
       
        <div className="footer-links">
          <a href="/privacy">Privacy Notice</a><span>|</span>
          <a href="/terms">Terms of Use</a><span>|</span>
          <a href="/cookie">Cookie Settings</a><span>|</span>
          <a href="/contact">Contact Us</a>
        </div>

      </div>
      <div className="footer-copy">
        Copyright © 2024 UTE Aerospace - All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;




