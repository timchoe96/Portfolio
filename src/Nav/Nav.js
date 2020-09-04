import React from "react";
import "./styles/style.css";
import about from "./images/about.png";

import document from "./images/document.png";
import home from "./images/home.png";

function Nav() {
  return (
    <nav>
      <ul className="desktopMenu">
        <a href="#home">
          <li>HOME</li>
        </a>
        <a href="#about">
          <li>ABOUT</li>
        </a>
        <a href="#projects">
          <li>PROJECTS</li>
        </a>
      </ul>
      <ul className="mobileMenu">
        <a href="#home">
          <img alt="" src={home}></img>
        </a>
        <a href="#about">
          <img alt="" src={about}></img>
        </a>
        <a href="#projects">
          <img alt="" src={document}></img>
        </a>
      </ul>
    </nav>
  );
}

export default Nav;
