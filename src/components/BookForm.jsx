import React, { useState } from "react";
import axios from "axios";
import form from "../styles/assets/form.jpg";
import "../styles/css/bookform.css";

const BookForm = () => {
  const [title, setTitle] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [coverPicture, setCoverPicture] = useState("");
  const [publicationDate, setPublicationDate] = useState("");
  const [summary, setSummary] = useState("");
  const [pages, setPages] = useState(0);

  const author = {
    firstname: firstname,
    lastname: lastname,
  };

  const handleClick = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/api/authors", author)
      .then((res) => res.data)
      .then((data) => {
        axios.post("http://localhost:8080/api/books", {
          author_id: data.insertId,
          title: title,
          publication_date: publicationDate,
          cover_picture: coverPicture,
          summary: summary,
          pages: pages,
        });
      });
  };

  return (
    <div className="global-form">
      <form className="wrapper-form">
        <label className="label-input-form">
          <input
            type="text"
            id="author"
            placeholder="Titre"
            onChange={(e) => setTitle(e.target.value)}
            className="input-form"
          />
        </label>
        <label className="label-input-form">
          <input
            type="text"
            id="author"
            placeholder="Nom de l'auteur"
            onChange={(e) => setLastname(e.target.value)}
            className="input-form"
          />
        </label>
        <label className="label-input-form">
          <input
            type="text"
            id="author"
            placeholder="Prénom de l'auteur"
            onChange={(e) => setFirstname(e.target.value)}
            className="input-form"
          />
        </label>
        <label className="label-text-form">
          <input
            type="text"
            id="author"
            placeholder="Résumé"
            onChange={(e) => setSummary(e.target.value)}
            className="input-form"
          />
        </label>
        <label className="label-input-form">
          <input
            type="text"
            id="author"
            placeholder="Nombre de pages"
            onChange={(e) => setPages(e.target.value)}
            className="input-form"
          />
        </label>
        <label className="label-input-form">
          <input
            type="text"
            id="author"
            placeholder="Année de publication"
            onChange={(e) => setPublicationDate(e.target.value)}
            className="input-form"
          />
        </label>
        <label className="label-input-form">
          <input
            type="text"
            id="author"
            placeholder="Photo de couverture"
            onChange={(e) => setCoverPicture(e.target.value)}
            className="input-form"
          />
        </label>
        <button className="button-form" type="buton" onClick={handleClick}>
          Valider
        </button>
      </form>
      <img
        src={form}
        alt="Personnes vecteur créé par pch.vector - fr.freepik.com"
      />
    </div>
  );
};

export default BookForm;
