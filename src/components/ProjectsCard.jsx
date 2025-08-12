import { useState } from "react";
import ProjectDialog from "./ProjectDialog";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const ProjectsCard = ({ project }) => {
  const { name, description, features, techLogo, link, img } = project;
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <div
        data-aos="fade-right"
        className="card lg:grid lg:grid-cols-2 lg:card-side bg-base-100 shadow-sm border border-base-300 mb-6"
      >
        {/* the image (left/up) */}
        <Carousel
          interval={3000}
          autoPlay
          showThumbs={false}
          infiniteLoop={true}
        >
          {img.map((imgObj, index) => (
            <figure className="h-64 sm:h-80 lg:h-96 ">
              <img
                src={imgObj}
                alt={`Project ${index + 1} - ${name}`}
                className="object-contain w-full h-full"
              />
            </figure>
          ))}
        </Carousel>

        {/* the details (right/down) */}

        <div className="card-body ">
          {/* project name */}
          <h2 className="card-title  font-semibold  sm:justify-center lg:justify-start text-2xl">
            {project.name}
          </h2>
          {/* project description */}
          <p className="text-lg sm:text-center lg:text-start">{description}</p>
          {/* project Core Functionalities */}
          <p className=" hidden sm:inline lg:hidden text-center text-lg">
            Core Functionalities
          </p>
          <ul className="list-disc list-inside sm:list-none lg:list-disc lg:list-inside  text-lg sm:text-center lg:text-start">
            {features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
          {/* project tech logos */}
          <div className="flex gap-4 items-center mt-4 flex-wrap sm:justify-center lg:justify-start">
            {techLogo.map((logo, i) => (
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
            {link.map((linkObj, i) => (
              <a
                key={i}
                href={linkObj.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn sm:btn-lg text-sm truncate  ${
                  linkObj.label.toLowerCase() === "live"
                    ? " bg-[#ffaa00] hover:bg-yellow-600 text-white"
                    : "hover:bg-[#ffaa00]  hover:text-white"
                }`}
              >
                {linkObj.label}
              </a>
            ))}

            {/* Details button triggers dialog */}
            <button
              className="btn sm:btn-lg text-sm truncate hover:bg-[#ffaa00]  hover:text-white"
              onClick={() => setIsDialogOpen(true)}
            >
              Details
            </button>

            <ProjectDialog
              isOpen={isDialogOpen}
              onClose={() => setIsDialogOpen(false)}
              project={project}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsCard;
