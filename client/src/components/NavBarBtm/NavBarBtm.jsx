import React from 'react';
import NavBarIcons from "./../NavBarIcons/NavBarIcons"
import account_img from "./assets/account.png"
import gallery_img from "./assets/gallery.png"
import messages_img from "./assets/messages.png"
import search_img from "./assets/search.png"
import upload_img from "./assets/upload.png"
import SearchModal from "./../SearchModal/SearchModal"
import GalleryModal from "./../GalleryModal/GalleryModal"

const clickMe = () => {
    console.log("i've been clicked")
}

const icons = [
        {id: 1,
        name: "search",
        img: search_img,
        clickMe: clickMe},
        {id: 2,
        name: "messages",
        img: messages_img,
        clickMe: clickMe},
        {id: 3,
        name: "gallery",
        img: gallery_img,
        clickMe: clickMe},
        {id: 4,
        name: "upload",
        img: upload_img,
        clickMe: clickMe},
        {id: 5,
        name: "account",
        img: account_img,
        clickMe: clickMe},
]

const NavBarBtm = () => {

    return (
        <>
        {/* <SearchModal    />  */}
        <GalleryModal   />
        <div className="bottom-background row">
        <div className="col s1 bottom-nav-content"></div>
        <NavBarIcons icons={icons} />
        <div className="col s1 bottom-nav-content"></div> 
        </div>

        <div className="bottom-nav">  
        </div>       
        </>
    );
};

export default NavBarBtm;