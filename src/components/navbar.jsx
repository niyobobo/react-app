import React from "react";

//Stateless functional component

const NavBar = props => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
        <span className="badge badge-pill badge-secondary m-2 p-2">
          {props.totalCounter}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
