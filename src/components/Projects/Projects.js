import React from "react";
import "./Projects.css";
import Project from "../Project/Project";
import untitled from "./images/untitled.png";
import untitled__store from "./images/untitled__store.png";
import amazon from "./images/amazon.png";
import spotify from "./images/spotify.png";

function Projects() {
  return (
    <div className="projects">
      <div className="text-primary projects__title">RECENT PROJECTS</div>
      <div className="projects__wrapper">
        <Project
          weblink="https://untitledwastaken.com/"
          sourcecode="https://github.com/timchoe96/Untitled-"
          website={untitled}
          title="Personal Blog"
          info="This website is a personal blog that I built for myself to put my thoughts out into the world. I talk about all things fashion and design related. It is a very informal blog."
        />

        <Project
          weblink="https://untitled-store.web.app/"
          sourcecode="https://github.com/timchoe96/untitled-store"
          website={untitled__store}
          title="Blog E-commerce"
          info="This is a mock-up e-commerce store design for my blog website. All items featured on the store are not a real representation of what products will be featured. "
        />

        <Project
          weblink="https://clone-60890.web.app/"
          sourcecode="https://github.com/timchoe96/amazon-clone"
          website={amazon}
          title="Amazon Clone"
          info="This is an Amazon clone made to resemble the Amazon store as much as possible. It features some front end features that allows you to add products to your cart for checkout, and has user authentication."
        />

        <Project
          weblink="https://spotify-clone-a2bb3.web.app/"
          sourcecode="https://github.com/timchoe96/spotify-clone"
          website={spotify}
          title="Spotify Clone"
          info="This is a Spotify clone made to resemble the Spotify music page. It uses the Spotify API to get profile information. I think it looks pretty close to the Spotify page, what do you think?"
        />
      </div>
    </div>
  );
}

export default Projects;
