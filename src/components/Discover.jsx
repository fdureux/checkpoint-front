import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import BookCard from "./BookCard";
import BookForm from "./BookForm";

import searching from "../styles/assets/library.jpg";
import "../styles/css/discover.css";

const Discover = () => {
  const [bookDetail, setBookDetail] = useState([]);
  const [formBook, setFormBook] = useState(false);
  useEffect(() => {
    axios.get("http://localhost:8080/api/books/infos").then((response) => {
      const data = response.data;
      setBookDetail(data);
    });
  }, []);
  return (
    <div>
      {" "}
      <Navbar />
      <div className="missing-book">
        <span> Tu veux ajouter un livre qui n'est pas disponible ?</span>
        <span className="add-new-book" onClick={() => setFormBook(true)}>
          {" "}
          Agrandis la bibliothèque !{" "}
        </span>
      </div>
      <div className={formBook ? "display-form" : "display-off"}>
        <BookForm />
      </div>
      <div className={formBook ? "display-off" : "main-container"}>
        <div className="book-list">
          {bookDetail.map((book, index) => (
            <BookCard key={index} {...book} />
          ))}
        </div>
        <img
          src={searching}
          alt="women seeking books"
          className="discover-img"
        />
      </div>
    </div>
  );
};

export default Discover;
