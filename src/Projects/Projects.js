import React, { useEffect, useState } from "react";
import "./styles/style.css";
import computer from "./images/computer.png";
var contentful = require("contentful");

function Projects() {
  var client = contentful.createClient({
    space: "dlipnuauv0sj",
    accessToken: "wE7IZ7NvcSRJkr8slwMR5ZM6zEByjDgC7y1nEn36gx4",
  });

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    client
      .getEntries({ content_type: "project" })
      .then((resp) => setProjects(resp.items))
      .catch((error) => console.log(error));
  }, [client]);

  return (
    <div id="projects">
      <h1>PROJECTS</h1>
      <div className="grid">
        {projects.map((project, i) => (
          <div className="project" key={i}>
            <div>{project.fields.name}</div>
            <ul>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={project.fields.website}
              >
                <img alt="" title="Website" src={computer}></img>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={project.fields.source}
                title="Source code"
              >
                {`</>`}
              </a>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
