import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <button className="btn btn-outline-primary">Resume</button>
      <div className="home__container ">
        <div className="home__greeting">
          Hello! <span>👋</span>
        </div>
        <p className="home__intro">
          My name is <strong>Timothy Choe</strong> and I am a front-end
          developer who loves the process and challenge of making beautiful
          websites.
        </p>
        <div className="home__arrow">👇 </div>
      </div>
    </div>
  );
}

export default Home;
