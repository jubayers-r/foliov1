import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const ProjectDialog = ({ isOpen, onClose, project }) => {
  const [mounted, setMounted] = useState(false);
  const [modalRoot, setModalRoot] = useState(null);

  useEffect(() => {
    setMounted(true);
    setModalRoot(document.getElementById("modal-root"));
  }, []);

  if (!isOpen || !mounted || !modalRoot) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      <div className="relative bg-white rounded-xl shadow-lg w-full max-w-full sm:max-w-2xl p-4 sm:p-6 z-10 max-h-[90vh] overflow-y-auto">
        <button
          className="absolute top-3 right-3 btn btn-sm btn-circle btn-outline"
          onClick={onClose}
        >
          ✕
        </button>

        <h2 className="text-xl sm:text-2xl font-bold mb-4">{project.name}</h2>

        <div className="mb-3">
          <h3 className="font-semibold mb-2 text-base sm:text-lg">
            Main Technology Stack:
          </h3>
          <div className="flex gap-4 items-center flex-wrap">
            {project.techLogo?.map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt={`Tech logo ${i}`}
                className="w-10 h-10 p-1 shadow"
              />
            ))}
          </div>
        </div>

        <div className="mb-3">
          <h3 className="font-semibold text-base sm:text-lg">
            Brief Description:
          </h3>
          <p className="text-gray-700 text-sm sm:text-base">
            {project.description}
          </p>
        </div>

        <div className="mb-3 flex flex-wrap gap-2">
          {project.link
            .filter((l) => l.label.toLowerCase() !== "details")
            .map((linkObj, i) => (
              <a
                key={i}
                href={linkObj.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn btn-sm  ${
                  linkObj.label.toLowerCase() === "live"
                    ? " bg-[#ffaa00] hover:bg-yellow-600 text-white"
                    : "hover:bg-[#ffaa00]  hover:text-white"
                }`}
              >
                {linkObj.label} Project
              </a>
            ))}
        </div>

        <div className="mb-3">
          <h3 className="font-semibold text-base sm:text-lg">
            Challenges Faced:
          </h3>
          <ul className="list-disc list-inside text-gray-700 break-words">
            {project.challenges?.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-base sm:text-lg">
            Potential Improvements & Future Plans:
          </h3>
          <ul className="list-disc list-inside text-gray-700 break-words">
            {project.futurePlans?.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>,
    modalRoot
  );
};

export default ProjectDialog;
