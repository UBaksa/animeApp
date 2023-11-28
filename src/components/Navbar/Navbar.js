import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <header>
        <NavLink to={"/mainpage"}>Main</NavLink>
        <NavLink to={"/trending"}>Trending</NavLink>
        <NavLink to={"/hot"}>Hot</NavLink>
      </header>
    </div>
  );
}
