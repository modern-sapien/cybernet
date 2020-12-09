import React from 'react';
import {Link} from "react-router-dom"

const Header = () => {
    return (
        <>
        <Link to="/">
        <div className="header-background col s2 m2 l2 ">INSTAVRAM</div>
        </Link>
        </>
    );
};

export default Header;