import React from 'react';
import { Link } from "react-router-dom"


const NavBarIcons = (props) => {
    return (
        <>
        {props.icons.map((icon) => (
        <Link to={`${icon.url}`}>
        <div className="col s2 bottom-nav-content" onClick={icon.clickMe} key={icon.id} >
        <img src={icon.img} alt={icon.name} height="24px"/></div> 
        </Link>
        ))}
        </>
    );
};

export default NavBarIcons;