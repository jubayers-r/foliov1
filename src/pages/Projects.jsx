import React from "react";
import ProjectsCard from "../components/ProjectsCard";
import ShowCaseProjects from "../assets/ShowCaseProjects";
import { Element } from "react-scroll";


const Projects = () => {
  return (
    <Element  id="projects" data-aos="fade-down">
      <>
        <div className=" my-50 max-w-10/11 md:max-w-9/11 mx-auto">
          <h3 className="text-center mb-10 font-bold text-2xl lg:text-4xl">
            Recent Projects
          </h3>
          {/* card element */}
          <div className="grid gap-10">
            {ShowCaseProjects.map((project, index) => (
              <ProjectsCard key={index} project={project} />
            ))}
          </div>
        </div>
      </>
    </Element >
  );
};

export default Projects;
