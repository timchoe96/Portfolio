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
          href=""
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
