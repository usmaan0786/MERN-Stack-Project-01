import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between px-[3rem] items-center py-[1rem] text-[#363636] font-bold">
      <h1 className="text-[2rem] text-[#924eff]">MERN.</h1>{" "}
      <ul className="flex gap-x-[1rem] font-semibold items-center ">
        <Link to={"/"}>
          {" "}
          <li className="navbar-list">Home</li>
        </Link>
        <Link to={"/about"}>
          {" "}
          <li className="navbar-list">
            About
          </li>
        </Link>
        <Link to={"/Signup"}>
          {" "}
          <li className="navbar-list">
            SignUp
          </li>
        </Link>
        <Link to={"/login"}>
          {" "}
          <li className="navbar-list">
            {" "}
            Login
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
