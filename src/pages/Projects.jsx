import React from "react";
import InfiniteGridBg from "../components/InfiniteGridBg";
import ProjectsCard from "../components/ProjectsCard";
import Navbar from "../layout/Navbar";
// import {TasteScript} from "../assets/TasteScript";


const Projects = () => {
  return (
    <InfiniteGridBg>
      <div className=" max-w-10/11 md:max-w-9/11 mx-auto">
      <Navbar/>
        {/* card element */}
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
      </div>
    </InfiniteGridBg>
  );
};

export default Projects;
