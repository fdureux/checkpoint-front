import React from "react";
import { NavLink } from "react-router-dom";
import { IoCompassOutline } from "react-icons/io5";
import { ImBooks } from "react-icons/im";

import "../styles/css/navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">E-bookshelf</div>
      <div className="navigation">
        <NavLink to="/profil" className="navlink" activeClassName="selected">
          {" "}
          <p>Mes livres</p>{" "}
          <div className="icon">
            {" "}
            <ImBooks />
          </div>
        </NavLink>
        <NavLink
          to="/decouverte"
          className="navlink"
          activeClassName="selected">
          {" "}
          <p>Découverte</p>
          <div className="icon">
            {" "}
            <IoCompassOutline />
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
