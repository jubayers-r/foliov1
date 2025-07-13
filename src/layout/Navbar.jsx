import { Link } from "react-scroll";
import "./Navbar.css";
import DarkModeToggle from "../context/themeContext/DarkModeToggle";
import Logo from "../components/Logo";
// import * as Scroll from "react-scroll";
import { useEffect, useState } from "react";
import { getOffset } from "../utils/getOffset";
import { drivePath } from "../components/Hero";
// import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'




const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // navbar style change on scroll
      setScrolled(window.scrollY > 10); // 10px scroll triggers the change
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // smooth scroll stuff
  const [activeSection, setActiveSection] = useState("me");


  const navLinks = (
    <>
      {["me", "about", "skills", "projects", "contact"].map((section) => (
        <li key={section}>
          <Link
            to={section}
            spy={true}
            smooth={true}
            offset={getOffset(section)}
            duration={500}
            onSetActive={() => setActiveSection(section)}
            className={`nav-link ${activeSection === section ? "active" : ""}`}
          >
            {section === "me"
              ? "Hello"
              : section === "about"
              ? "About Me"
              : section === "contact"
              ? "Get in touch"
              : section.charAt(0).toUpperCase() + section.slice(1)}
          </Link>
        </li>
      ))}
    </>
  );

  return (
    <div className=" max-w-10/11 md:max-w-9/11  flex flex-col mx-auto sticky top-5 z-100">
      <div
        className={`navbar px-5 text-black/30 dark:text-white/40 transition-all duration-300 -mt-2 bg-white dark:bg-black ${
          scrolled
            ? "shadow-sm dark:shadow-white rounded-full bg-white/10 dark:bg-white/10 backdrop-blur-md mt-0"
            : ""
        }`}
      >
        {" "}
        {/* navbar small */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <Logo />
        </div>
        {/* navbar lg */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {/* <DarkModeToggle /> */}

          <a href={drivePath("1F1eWXFRsZUMo4cgzFInKGlkr2Erh3dc1")}target="_blank" className="btn bg-[#ffaa00] hover:bg-yellow-600 text-white text-lg">Resume</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
