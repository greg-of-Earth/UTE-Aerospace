import React from 'react';
import footerStyles from './styles/Footer.module.css';  // Correct path assumed

function Footer() {
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.footerContent}>
        <div className={footerStyles.footerInfo}>
          <span>Phone: 888-888-8888 | Address: </span>
        </div>
        <div className={footerStyles.footerLinks}>
          <a href="/privacy">Privacy Notice |</a>
          <a href="/terms">Terms of Use |</a>
          <a href="/cookie">Cookie Settings |</a>
          <a href="/contact">Contact Us</a>
        </div>
      </div>
      <div className={footerStyles.footerCopy}>
        Copyright © 2024 UTE Aerospace - All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
