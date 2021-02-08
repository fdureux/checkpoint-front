import React from "react";
import axios from "axios";

const Bookshelf = ({ bookDetails }) => {
  const { id, title, firstname, lastname, status } = bookDetails;

  return (
    <div className="user-book-infos">
      <div>
        {" "}
        {title} - {firstname} {lastname}{" "}
      </div>
      <div> Commenter </div>
      <div></div>
    </div>
  );
};

export default Bookshelf;
