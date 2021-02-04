import React from "react";
import { Link } from "react-router-dom";
import welcome from "../styles/assets/home.jpg";
import "../styles/css/LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <section>
        <h1>E-BookShelf</h1>
        <svg
          id="svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-300 0 950 270">
          <path
            d="M-314,267 C105,364 400,100 812,279"
            fill="none"
            stroke="white"
            stroke-width="120"
            stroke-linecap="round"
          />
        </svg>
        <div className="subtitle">
          <span className="fade-1"> Lire .</span>{" "}
          <span className="fade-2"> Partager . </span>{" "}
          <span className="fade-3"> Découvrir .</span>
        </div>
        <div className="presentation">
          {" "}
          E-Bookshelf vous permet de gérer votre bibliothèque. Ajoutez des
          livres, découvrez-en de nouveaux, publiez des commentaires et partez
          explorer les bibliothèques des autres!
        </div>
      </section>
      <img src={welcome} alt="tiny couple reading in sofa" />{" "}
      <div className="access">
        <Link to="/profil" className="hvr-rectangle-out">
          {" "}
          Se Connecter
        </Link>
        <Link to="/profil" className="hvr-rectangle-out">
          {" "}
          S'inscrire
        </Link>
      </div>
    </div>
    // </div>
  );
};

export default LandingPage;
