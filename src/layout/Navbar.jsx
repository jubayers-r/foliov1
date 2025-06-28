import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {

    const navLinks = <>
  <NavLink>
    <p>Hello</p>
  </NavLink>
  <NavLink>
    <p>About Me</p>
  </NavLink>
  <NavLink>
    <p>Skills</p>
  </NavLink>
  <NavLink>
    <p>Projects</p>
  </NavLink>
  <NavLink>
    <p>Education</p>
  </NavLink>
  <NavLink>
    <p>Let's Connect</p>
  </NavLink>
    </>



    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {navLinks}
      </ul>
    </div>
    <p className="btn btn-ghost text-xl font-[Belanosima] bg-clip-text dark:text-white text-[#434343ec] ">{"<"}<span className='bg-gradient-to-r from-[#fc9e2c] to-[#f31e3c] bg-clip-text text-transparent'>jubayer</span>{"/>"}</p>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Resume</a>
  </div>
</div>
    );
};

export default Navbar;