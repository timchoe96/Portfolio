import React from "react";
import "./Home.css";

function Home() {
  return (
    <div id="home" className="home">
      <button className="btn btn-outline-primary">Resume</button>
      <div className="home__container ">
        <div className="home__greeting">
          Hello! <span>👋</span>
        </div>
        <p className="home__intro">
          My name is <strong>Timothy Choe</strong> and I am a front-end
          developer who loves the process and challenge of creating awesome
          websites.
        </p>
        <div className="home__email">
          Get in touch <span>: 👉 </span>
          <a
            className="hvr-shutter-out-horizontal"
            href="emailto:timchoe96@gmail.com"
          >
            timchoe96@gmail.com
          </a>
        </div>
        <div className="home__arrow">👇 </div>
      </div>
    </div>
  );
}

export default Home;
