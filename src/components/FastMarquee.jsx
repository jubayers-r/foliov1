import React from "react";

import Marquee from "react-fast-marquee";
const FastMarquee = ({ children }) => {
  return (
    <Marquee gradient={true} speed={100}>
      {children}
    </Marquee>
  );
};

export default FastMarquee;
