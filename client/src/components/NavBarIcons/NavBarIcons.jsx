import React from 'react';

const NavBarIcons = (props) => {
    return (
        <>
        {props.icons.map((icon) => (
        <div className="col s2 bottom-nav-content" onClick={icon.clickMe} >
        <img src={icon.img} alt={icon.name}/></div> 
        ))}
        </>
    );
};

export default NavBarIcons;