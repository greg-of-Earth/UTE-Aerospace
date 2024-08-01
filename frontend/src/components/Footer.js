import React from 'react';
import footerStyles from './styles/Footer.module.css';  // Correct path assumed

function Footer() {
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.footerContent}>
        <div className={footerStyles.footerInfo}>
          <span>Phone: <a href="tel:1-307-677-2964">1-307-677-2964</a></span>
          {/* <span>Phone: 1-307-677-2964 | Address: </span> */}
        </div>
        <div className={footerStyles.footerLinks}>
          <a href="/underConstruction">Privacy Notice |</a>
          <a href="/underConstruction">Terms of Use |</a>
          <a href="/underConstruction">Cookie Settings |</a>
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
