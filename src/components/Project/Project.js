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
      <div className="project__info">
        <div className="text-primary project__title">{title}</div>
        <p className="project__paragraph">{info}</p>
        <div className="project__links">
          <div className="project__linkGroup">
            <a
              className="hvr-underline-from-left"
              href={weblink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Website
            </a>
            <BoxArrowInUpRight color="#007bff" size={15} />
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
            <CodeSlash color="#007bff" size={15} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
