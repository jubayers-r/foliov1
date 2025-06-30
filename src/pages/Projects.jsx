import React from "react";
import ProjectsCard from "../components/ProjectsCard";

// import {TasteScript} from "../assets/TasteScript";


const Projects = () => {
  return (
    <div id="projects">
    <>
      <div className=" my-50 max-w-10/11 md:max-w-9/11 mx-auto">
        {/* card element */}
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
      </div>
    </>
    </div>
  );
};

export default Projects;
