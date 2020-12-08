import React from 'react';
import {Link} from "react-router-dom"

const Header = () => {
    return (
        <>
        <Link to="/">
        <div className="header-background">InstaVram</div>
        </Link>
        
        {/* <div className="header-nav"> </div>  */}
        </>
    );
};

export default Header;