import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Bookshelf from "./Bookshelf";

import reading from "../styles/assets/profile.jpg";
import "../styles/css/profile.css";

const Profile = () => {
  const [userStat, setUserStat] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  const [userBooks, setUserBooks] = useState([]);

  const readBooks = userBooks.filter((book) => book.status === "read");
  const readingBooks = userBooks.filter((book) => book.status === "reading");
  const toReadBooks = userBooks.filter((book) => book.status === "to-read");

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/bookshelves/stats/users/2")
      .then((response) => {
        const data = response.data;
        setUserInfo(data[0]);
        setUserStat(data);
      });
    axios
      .get("http://localhost:8080/api/bookshelves/users/2")
      .then((response) => {
        const data = response.data;
        setUserBooks(data);
      });
  }, []);

  return (
    <div className="profile">
      {" "}
      <Navbar />
      <div className="profile-container">
        <div className="profile-card">
          <div className="profile-picture">
            <img
              src={userInfo.avatar && userInfo.avatar.toString()}
              alt="user"
              img
            />
          </div>
          <div className="username">{userInfo.username}</div>
        </div>
        <div className="reading-stats">{userStat.length} livres </div>
        <div className="all-bookshelves">
          <div className="bookshelf">
            <p> Déjà lu</p>
            {readBooks.map((bookDetails) => (
              <Bookshelf bookDetails={bookDetails} />
            ))}
          </div>
          <div className="bookshelf">
            <p> En cours de lecture </p>
            {readingBooks.map((bookDetails) => (
              <Bookshelf bookDetails={bookDetails} />
            ))}
          </div>
          <div className="bookshelf">
            <p> A lire </p>
            {toReadBooks.map((bookDetails) => (
              <Bookshelf bookDetails={bookDetails} />
            ))}
          </div>
        </div>
        <img
          className="picture"
          src={reading}
          alt="women on top of a book stack"
        />
      </div>
    </div>
  );
};

export default Profile;
