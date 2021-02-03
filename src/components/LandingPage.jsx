import React from "react";
import { Link } from "react-router-dom";
import welcome from "../styles/assets/home.jpg";
import "../styles/css/LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      {" "}
      <h1>E-BookShelf</h1>
      <img src={welcome} alt="tiny couple reading in sofa" />{" "}
      <div className="swiper">
        <ul class="swipe-words">
          <li> Lire</li>
          <li> Partager </li>
          <li> Découvrir </li>
        </ul>
      </div>
      <div className="presentation">
        {" "}
        E-Bookshelf vous permet de gérer votre bibliothèque. Ajouter des livres,
        découvrez-en de nouveau et parter explorer les bibliothèques des autres!
        Pour les amoureux des statistiques vous pourrez trouver le nombre de
        pages lues par an, votre auteur préféré ou la nationalité de vos auteurs
        favoris
      </div>
      <div className="access">
        <Link to="/profile" className="hvr-rectangle-out">
          {" "}
          Se Connecter
        </Link>
        <Link to="/profile" className="hvr-rectangle-out">
          {" "}
          S'inscrire
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
