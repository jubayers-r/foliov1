import React from "react";
import { Link } from "react-router";

const Logo = () => {
  return (
    <Link to={'/'} className=" font-semibold inline-flex gap-1.5 text-2xl font-[Belanosima] bg-clip-text dark:text-white text-[#555555ec] ">
      {"<"}
      <span className=" bg-gradient-to-r from-[#fc9e2c] to-[#f31e3c] dark:from-[#f31e3c] dark:to-[#fc9e2c] bg-clip-text text-transparent">
        jubayer
      </span>
      {"/>"}
    </Link>
  );
};

export default Logo;
