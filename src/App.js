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
// import "hover.css/css/hover.css";

AOS.init({ mirror: false, duration: 800, once: true });

function App() {
  return (
    <div className="app">
      <Home />
      <Projects />
    </div>
  );
}

export default App;
