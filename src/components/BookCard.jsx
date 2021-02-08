import React, { useState } from "react";
import axios from "axios";
import { FaTimes } from "react-icons/fa";
import "../styles/css/bookcard.css";
const BookCard = (book) => {
  const [selectStatus, setSelectStatus] = useState(false);
  const [readingStatus, setReadingStatus] = useState("Ajouter");
  const [bookDetails, setBookDetails] = useState(false);

  const postStatus = (readingStatus) => {
    if (readingStatus === "A Lire") {
      return "to-read";
    } else if (readingStatus === "Déjà lu") {
      return "read";
    } else if (readingStatus === "En lecture") {
      return "reading";
    }
  };

  const bookshelf = {
    user_id: 2,
    book_id: book.id,
    status: postStatus(readingStatus),
  };

  const addBook = () => {
    if (bookshelf.status !== undefined) {
      axios({
        method: "post",
        url: "http://localhost:8080/api/bookshelves/",
        data: bookshelf,
      });
    }
  };

  const handleChange = async (e) => {
    setReadingStatus(e.target.value);
    setSelectStatus(false);
    addBook();
  };

  return (
    <div className="book-card">
      <div className={bookDetails ? "show-details" : "display-off"}>
        <div className="detail-content">
          <div className="close-detail" onClick={() => setBookDetails(false)}>
            <FaTimes />
          </div>
          <div>{book.title}</div>
          <div>{book.pages} pages</div>
          <div>
            {book.firstname} {book.lastname} - {book.publication_date}
          </div>
          <div> {book.summary}</div>
        </div>
      </div>
      <div className="book-general">
        <div className="cover-book">
          <img className="img" src={book.cover_picture} alt={book.title} />
        </div>
        <div className="back-book">
          <div className="title">{book.title}</div>
          <div className="author">
            {book.lastname} {book.firstname}
          </div>
          <div className="show-more" onClick={() => setBookDetails(true)}>
            Voir plus
          </div>
        </div>
      </div>
      <div className="adding-book">
        <div className="add" onClick={() => setSelectStatus(true)}>
          {" "}
          {readingStatus}{" "}
        </div>
        <select
          className={selectStatus ? "select-status" : "select-off"}
          onChange={handleChange}>
          <option value="A lire"> A lire</option>
          <option value="En lecture"> En lecture</option>
          <option value="Déjà lu"> Déjà lu</option>
        </select>
      </div>
    </div>
  );
};

export default BookCard;
