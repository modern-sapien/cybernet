import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import API from "./../../utils/API";
import NavBarIcons from "./../NavBarIcons/NavBarIcons";
import account_img from "./assets/account.png";
import gallery_img from "./assets/gallery.png";
import messages_img from "./assets/messages.png";
import search_img from "./assets/search.png";
import upload_img from "./assets/upload.png";

const clickMe = () => {
  console.log("i've been clicked");
};

const NavBarBtm = () => {
  const icons = [
    {
      id: 1,
      name: "search",
      url: "/search",
      img: search_img,
      clickMe: clickMe,
    },
    {
      id: 2,
      name: "gallery",
      url: `/images`,
      img: gallery_img,
      clickMe: clickMe,
    },
  ];

  const history = useHistory();
  const [authUser, setAuthUser] = useState();

  useEffect(() => {
    getAuthUser();
  }, []);

  function getAuthUser() {
    API.authUser()
      .then((res) => {
        setAuthUser(res.data.data._id);
      })
      .catch((err) => console.log(err));
  }

  const postImageClick = () => {
    getAuthUser();
    if (authUser !== undefined) {
      history.push(`/user/${authUser}/images`);
    } else {
      history.push("/");
    }
  };

  const accountClick = () => {
    getAuthUser();
    if (authUser !== undefined) {
      history.push(`/user/${authUser}`);
    } else {
      history.push("/");
    }
  };
  return (
    <>
      <div className="bottom-background row">
        <div className="col s2 m3 l3 bottom-nav-content"></div>
        <NavBarIcons icons={icons} />

        <div className="col s2 bottom-nav-content" onClick={postImageClick}>
          <img src={upload_img} alt="upload" height="24px" />
        </div>

        <div className="col s2 bottom-nav-content" onClick={accountClick}>
          <img src={account_img} alt="account" height="24px" />
        </div>

        <div className="col s1 bottom-nav-content"></div>
      </div>

      <div className="bottom-nav"></div>
    </>
  );
};

export default NavBarBtm;
