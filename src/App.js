import React from "react";
import "./styles/app.css";
import Nav from "./Nav/Nav.js";
import About from "./About/About.js";

import Home from "./Home/Home.js";
import Projects from "./Projects/Projects.js";

function App() {
  return (
    <div className="app">
      <Nav />
      <main>
        <Home />
        <About />
        <Projects />
      </main>
    </div>
  );
}

export default App;
