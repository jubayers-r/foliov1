import React from "react";
import ProjectsCard from "../components/ProjectsCard";

// import {TasteScript} from "../assets/TasteScript";

const Projects = () => {
  return (
    <div id="projects" data-aos="fade-down">
      <>
        <div className=" my-50 max-w-10/11 md:max-w-9/11 mx-auto">
          <h3 className="text-center mb-10 font-bold text-4xl">
            Recent Projects
          </h3>
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
