import React from "react";

const Navbar = () => {
  return (
    <div className="ui raised very padded segment">
      <a className="ui teal inverted segment">Gloria</a>
      <div className="ui right floated header">
        <button className="ui button">
          <a href="/">Home</a>
        </button>
        <button className="ui button">
          <a href="/about">About</a>
        </button>
        <button className="ui button">
          <a href="/contact">Contact</a>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
