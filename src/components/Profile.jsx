import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";

import "../styles/css/profile.css";

const Profile = () => {
  const [userInfos, setUserInfos] = useState({});
  const [userStat, setUserStat] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/bookshelves/stats/users/1")
      .then((response) => {
        setUserStat(response.data);
        setUserInfos(response.data[0]);
      });
  });

  return (
    <div className="profile">
      {" "}
      <Navbar />
      <div className="profile-card">
        <div className="profile-picture">
          <img src={userInfos.avatar} alt="user" img />
        </div>
        <div className="username">{userInfos.username}</div>
      </div>
      <div className="reading-stats">{userStat.length} livres </div>
      <div> Voir sa bibliothèque</div>
    </div>
  );
};

export default Profile;
