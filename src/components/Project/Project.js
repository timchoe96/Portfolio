import React from "react";
import "./Project.css";
import { BoxArrowInUpRight, CodeSlash } from "react-bootstrap-icons";

function Project({ website, sourcecode, weblink, info, title }) {
  return (
    <div className="project">
      <div className="project__container">
        <div className="project__description"></div>
        <img
          data-aos="fade-right"
          className="project__website "
          src={website}
          alt=""
        ></img>
      </div>
      <div className="project__info" data-aos="fade-left">
        <div>
          <div className="text-primary project__title">{title}</div>
          <p className="project__paragraph">{info}</p>
        </div>
        <div className="project__links">
          <div className="projects__linkGroup">
            <a
              className="hvr-underline-from-left"
              href={weblink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Website
            </a>
          </div>
          <div className="projects__linkGroup">
            <a
              className="hvr-underline-from-left"
              href={sourcecode}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
