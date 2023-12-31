import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div className="ui raised very padded segment">
      <NavLink className="ui teal inverted segment" to="/">
        Gloria
      </NavLink>
      <div className="ui right floated header">
        <button className="ui button">
          <NavLink to="/">Home</NavLink>
        </button>
        <button className="ui button">
          <NavLink to="/about">About</NavLink>
        </button>
        <button className="ui button">
          <NavLink to="/contact">Contact</NavLink>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
