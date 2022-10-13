import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    // navbar
    <nav className="relative p-5 px-10 sm:px-3 md:px-20 lg:px-30 max-w-7xl flex justify-between align-center shadow-md ">
      <h3 className="text-2xl sm:text-sm md:text-2xl lg:text-3xl font-bold ">
        Cocktail
        <span className=" text-highlight border-b-1 shadow-xl "> Portal</span>
      </h3>
      <div className="nav-items">
        <Link to="/" className="text-2xl pr-5 sm:text-sm md:text-xl">
          Home
        </Link>
        <Link to="/about" className="text-2xl sm:text-sm md:text-xl">
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
