import React from 'react';
import './Footer.css';

/**
 * Component: Footer
 * Description: Provides a consistent footer for the application. It contains contact information,
 * links to legal notices and site navigation, and a copyright statement. This footer helps users
 * navigate to important sections and offers essential contact details.
 *
 * Props: None
 *
 * Usage:
 * <Footer />
 */
function Footer() {
  return (
    // Main footer container, styles defined in Footer.css
    <footer className="footer">
      {/* Footer content area with contact information and navigation links */}
      <div className="footer-content">
        
        {/* Information section displaying contact details */}
        <div className="footer-info">
          <span>Phone: 888-888-8888 | Address: </span>
        </div>

        {/* Navigation links within the footer, providing access to various legal and contact pages */}
        <div className="footer-links">
          <a href="/privacy">Privacy Notice</a><span>|</span>  
          <a href="/terms">Terms of Use</a><span>|</span>      
          <a href="/cookie">Cookie Settings</a><span>|</span>  
          <a href="/contact">Contact Us</a>                   
        </div>
        
      </div>
      
      {/* Copyright statement that is legally required to protect the content */}
      <div className="footer-copy">
        Copyright © 2024 UTE Aerospace - All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer; // Exporting the Footer component for use in other parts of the app
