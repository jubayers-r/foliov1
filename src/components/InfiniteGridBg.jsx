import React from "react";

const InfiniteGridBg = ({ children }) => {
  return (
    <div className="w-screen h-fit bg-infinite-grid-light dark:bg-infinite-grid-dark dark:bg-black absolute inset-0 z-0">
      {children}
    </div>
  );
};

export default InfiniteGridBg;
