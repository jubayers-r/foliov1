import React from "react";

import Marquee from "react-fast-marquee";
const FastMarquee = ({children}) => {
  return (
    <Marquee gradient={false} speed={50}>
     {children}
    </Marquee>
  );
};

export default FastMarquee;
