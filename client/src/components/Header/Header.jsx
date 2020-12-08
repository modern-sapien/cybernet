import React from 'react';
import {Link} from "react-router-dom"

const Header = () => {
    return (
        <>
        <Link to="/">
        <div className="row header-background">
        <div className="header-background col s2 m2 l2">InstaVram</div>
        </div>
        </Link>
        
        </>
    );
};

export default Header;