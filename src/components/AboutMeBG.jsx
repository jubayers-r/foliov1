import React from "react";

const AboutMeBG = ({ children }) => {
  return (
    <div className="w-screen  dark:bg-black h-fit bg-infinite-grid absolute inset-0 z-0">
      {children}
    </div>
  );
};

export default AboutMeBG;
