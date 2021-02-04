import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";

import "../styles/css/profile.css";

const Profile = () => {
  const [userStat, setUserStat] = useState([]);
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/bookshelves/stats/users/2")
      .then((response) => {
        const data = response.data;
        setUserInfo(data[0]);
        setUserStat(data);
      });
  }, []);

  return (
    <div className="profile">
      {" "}
      <Navbar />
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
      <div> Voir sa bibliothèque</div>
    </div>
  );
};

export default Profile;
