import React from "react";
import "./Projects.css";
import Project from "../Project/Project";
import untitled from "./images/untitled.png";
import untitled__store from "./images/untitled__store.png";
import source from "./images/source.png";

function Projects() {
  return (
    <div className="projects">
      <div className="text-primary projects__title">RECENT PROJECTS</div>
      <div className="projects__wrapper">
        <Project
          weblink="https://untitledwastaken.com/"
          sourcecode="https://github.com/timchoe96/Untitled-"
          source={source}
          website={untitled}
          title="Personal Blog"
          info="This website is a personal blog that I built for myself to put my thoughts out into the world. I talk about all things fashion and design related. It is a very informal blog."
        />

        <Project
          weblink="https://untitled-store.web.app/"
          sourcecode="https://github.com/timchoe96/untitled-store"
          source={source}
          website={untitled__store}
          title="Blog E-commerce"
          info="This is a mock-up e-commerce store design for my blog website. All items featured on the store are not a real representation of what products will be featured. "
        />
      </div>
    </div>
  );
}

export default Projects;
