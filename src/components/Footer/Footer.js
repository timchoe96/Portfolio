import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__credit">
        Designed and developed by Timothy Choe 👨‍💻 2020
      </div>
      <div className="footer__links">
        <a
          className="hvr-underline-from-left"
          href="mailto:timchoe96@gmail.com"
        >
          Email
        </a>
        <a
          className="hvr-underline-from-left"
          target="_blank"
          rel="noopener noreferrer"
          href="https://drive.google.com/file/d/1cSNsLkNquRMnVDRf-_a1DVL14qx03C5n/view?usp=sharing"
        >
          Resume
        </a>
        <a
          className="hvr-underline-from-left"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/timchoe96"
        >
          Github
        </a>
        <a
          className="hvr-underline-from-left"
          target="_blank"
          rel="noopener noreferrer"
          href="https://linkedin.com/in/timothy-choe"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

export default Footer;
