import React from "react";
import TasteScript from "../assets/TasteScript";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import TasteScript1 from "../assets/web-demo/TasteScript/TasteScript1.png"
import TasteScript2 from "../assets/web-demo/TasteScript/TasteScript2.png"
import TasteScript3 from "../assets/web-demo/TasteScript/TasteScript3.png"
import TasteScript4 from "../assets/web-demo/TasteScript/TasteScript4.png"



const ProjectsCard = () => {
  return (
    <>
      {TasteScript.map((project, index) => (
        <div  data-aos="fade-right"
          key={index}
          className="card lg:grid lg:grid-cols-2 lg:card-side bg-base-100 shadow-sm border border-base-300 mb-6"
        >
          {/* the image (left/up) */}
          <Carousel
            interval={3000}
            autoPlay
            showThumbs={false}
            infiniteLoop={true}
          >
            <figure className="h-64 sm:h-80 lg:h-96 ">

              <img
                src={TasteScript1}
                alt={`Project ${index + 1} - ${project.name}`}
                className="object-contain w-full h-full"
              />
            </figure>
            <figure className="h-64 sm:h-80 lg:h-96 ">

              <img
                src={TasteScript2}
                alt={`Project ${index + 1} - ${project.name}`}
                className="object-contain w-full h-full"
              />
            </figure>
            <figure className="h-64 sm:h-80 lg:h-96 ">

              <img
                src={TasteScript3}
                alt={`Project ${index + 1} - ${project.name}`}
                className="object-contain w-full h-full"
              />
            </figure>
            <figure className="h-64 sm:h-80 lg:h-96 ">

              <img
                src={TasteScript4}
                alt={`Project ${index + 1} - ${project.name}`}
                className="object-contain w-full h-full"
              />
            </figure>
          </Carousel>

          {/* the details (right/down) */}

          <div className="card-body ">
            {/* project name */}
            <h2 className="card-title  font-semibold  sm:justify-center lg:justify-start text-2xl">
              {project.name}
            </h2>
            {/* project description */}
            <p className="text-lg sm:text-center lg:text-start">
              {project.description}
            </p>
            {/* project Core Functionalities */}
            <p className=" hidden sm:inline lg:hidden text-center text-lg">
              Core Functionalities
            </p>
            <ul className="list-disc list-inside sm:list-none lg:list-disc lg:list-inside  text-lg sm:text-center lg:text-start">
              {project.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            {/* project tech logos */}
            <div className="flex gap-4 items-center mt-4 flex-wrap sm:justify-center lg:justify-start">
              {project.techLogo.map((logo, i) => (
                <img
                  key={i}
                  src={logo}
                  alt={`Tech logo ${i}`}
                  className="w-10 h-10 p-1 shadow"
                />
              ))}
            </div>
            {/* project links */}
            <div className="mt-4 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2">
              {project.link.map((linkObj, i) => (
                <a
                  key={i}
                  href={linkObj.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn sm:btn-lg text-sm truncate"
                >
                  {linkObj.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectsCard;
