import React from "react";
import { Link } from "react-router-dom";

const ImgSearchObj = ({ title, id }) => {
  return (
    <>
      <Link to={`/images/${id}`}>
        <div className="searchObj col s12 m12 l12 ">{title}</div>
      </Link>
    </>
  );
};

export default ImgSearchObj;