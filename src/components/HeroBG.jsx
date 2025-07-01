import React from "react";

const HeroBG = () => {
  return (
    <svg
      aria-hidden="true"
      className=" pointer-events-none absolute inset-0 lg:h-230 h-140 w-full fill-neutral-400/80  [mask-image:radial-gradient(white,transparent)]"
    >
      <defs>
        <pattern
          id="dotPattern"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="1" cy="1" r="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dotPattern)" />
    </svg>
  );
};

export default HeroBG;
