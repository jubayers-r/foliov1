import React from "react";

const HeroBG = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
    <svg
      aria-hidden="true"
      class="pointer-events-none absolute inset-0 h-full w-full fill-neutral-400/80 [mask-image:radial-gradient(white,transparent)]"
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
    </div>
  );
};

export default HeroBG;
