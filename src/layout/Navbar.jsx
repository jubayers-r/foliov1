import { Link, NavLink } from "react-scroll";
import DarkModeToggle from "../context/themeContext/DarkModeToggle";
import Logo from "../components/Logo";
import * as Scroll from "react-scroll";
// import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <Link to="me" spy={true} smooth={true} offset={-100} duration={500}>
          Me{" "}
        </Link>
      </li>
      <li>
        <Link to="about" spy={true} smooth={true} offset={-100} duration={500}>
          About Me{" "}
        </Link>
      </li>
      <li>
        <Link to="skills" spy={true} smooth={true} offset={-100} duration={500}>
          Skills
        </Link>
      </li>

      <li>
        <Link to="projects" spy={true} smooth={true} offset={-100} duration={500}>
          Projects
        </Link>
      </li>
      {/* <li>
        <a to={""}>Education</a>
      </li> */}
      <li>
        <Link to="contact" spy={true} smooth={true} offset={-100} duration={500}>
          Let's Connect
        </Link>
      </li>
    </>
  );

  return (
    <div className=" max-w-10/11 md:max-w-9/11  flex flex-col mx-auto sticky top-5 z-100">
      <div className="navbar shadow-sm dark:shadow-white rounded-full px-5 dark:text-white bg-white/10 backdrop-blur-md  ">
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
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <DarkModeToggle />
          <a className="btn">Resume</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
