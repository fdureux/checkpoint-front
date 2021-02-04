import React from "react";
import { NavLink } from "react-router-dom";
import { IoCompassOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { ImBooks } from "react-icons/im";

import "../styles/css/navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="search-bar">
        <input placeholder="Chercher un titre ou un auteur" />
        <button> Loupe</button>
      </div>
      <div className="navigation">
        <NavLink to="/" activeClassName="selected">
          {" "}
          <p>Bibliothèque</p>{" "}
          <div className="icon">
            {" "}
            <ImBooks />
          </div>
        </NavLink>
        <NavLink to="/" activeClassName="selected">
          {" "}
          <p>Découverte</p>
          <div className="icon">
            {" "}
            <IoCompassOutline />
          </div>
        </NavLink>
        <NavLink to="/profil" activeClassName="selected">
          {" "}
          <p>Profil</p>
          <div className="icon">
            {" "}
            <FaUserCircle />
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
