import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header-background col s2 m2 l2 ">
        <Link to="/">VRAM</Link>
      </div>
    </>
  );
};

export default Header;
