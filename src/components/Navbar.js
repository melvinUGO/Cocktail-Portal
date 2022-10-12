import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    // navbar
    <nav className="relative p-5 px-10 lg:px-20 flex justify-between align-center shadow-md ">
      <h3 className="text-xl ">
        Cocktail <span className=" text-highlight "> Portal</span>
      </h3>
      <div className="nav-items">
        <Link to="/about" className="text-xl">
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
