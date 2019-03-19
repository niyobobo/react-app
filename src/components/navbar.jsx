import React from "react";

//Stateless functional component
//Object destructuring on props argument

const NavBar = ({ totalCounter }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
        <span className="badge badge-pill badge-secondary m-2 p-2">
          {totalCounter}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
