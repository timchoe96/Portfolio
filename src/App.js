import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

import Footer from "./components/Footer/Footer.js";
import Background from "./components/Background/Background.js";

AOS.init({ mirror: false, duration: 800, once: true });

window.addEventListener("scroll", () => {
  if (window.scrollY > 600) {
    document.querySelector("#toTopButton").classList.add("fadeIn");
  } else {
    document.querySelector("#toTopButton").classList.remove("fadeIn");
  }
});

function App() {
  return (
    <div className="app">
      <Home />
      <Background />
      <Projects />

      <a id="toTopButton" href="#home">
        👆
      </a>
      <Footer />
    </div>
  );
}

export default App;
