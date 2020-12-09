import React from "react";
import { Link } from "react-router-dom";

const SearchObj = ({ username, id }) => {
  return (
    <>
      <Link to={`/images/${id}`}>
        <div className="searchObj col s12 m12 l12 ">{username}</div>
      </Link>
    </>
  );
};

export default SearchObj;
