import React from "react";
import { FaCheck } from "react-icons/fa6";

const AboutCheckList = () => {
  return (
    <>
      <div className="flex place-items-center gap-2">
        <FaCheck />
        <p className="dark:text-white">Full-Stack Web Development</p>
      </div>
      <div className="flex place-items-center gap-2">
        <FaCheck />
        <p className="dark:text-white">Scalable Web-Apps</p>
      </div>
      <div className="flex place-items-center gap-2">
        <FaCheck />
        <p className="dark:text-white">Attractive Ui/Ux</p>
      </div>
      <div className="flex place-items-center gap-2">
        <FaCheck />
        <p className="dark:text-white">Clean Scalable Code</p>
      </div>
      <div className="flex place-items-center gap-2">
        <FaCheck />
        <p className="dark:text-white">
          {"("}Rapidly Learning{")"} Next.js, TypeScript{" "}
        </p>
      </div>
      <div className="flex place-items-center gap-2">
        <FaCheck />
        <p className="dark:text-white">
          {"("}Rapidly Learning{")"} DevOps{" "}
        </p>
      </div>
    </>
  );
};

export default AboutCheckList;
