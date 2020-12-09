import React, { useEffect, useContext, useState } from 'react';
import { useParams } from "react-router-dom";
import ImgSearchUserObj from "./../../components/ImgSearchUserObj/ImgSearchUserObj"
import Main from "../Main/Main"
import API from "./../../utils/API"

const UserGallery = () => {
    const { id } = useParams();
    const [allImages, setImages] = useState([]);
    const [searchBox, setSearchBox] = useState("");
    const [searchedImages, setSearchedImages] = useState([]);
  
    // initial load of the users
    useEffect(() => {
      getImages();
    }, []);
  
    function getImages() {
      API.getImageByUser(id)
        .then((res) => {
          console.log(res.data.data);
          setImages(res.data.data);
          setSearchedImages(res.data.data);
        })
        .catch((err) => console.log(err));
    }
  
    function setOriginalImages() {
      setSearchedImages(allImages);
    }
  
    function handleSearch(event) {
      let searchedDm = event.target.value.toLowerCase();
      setSearchBox(searchedDm);
    }
  
    useEffect(() => {
      if (searchBox.length > 0) {
        console.log("I am greater than 0");
        setOriginalImages();
        for (let i = 0; i < searchBox.length; i++) {
          setSearchedImages((prevState) =>
            prevState.filter((image) => {
              return image.title.toLowerCase().indexOf(searchBox) !== -1;
            })
          );
        }
      } else {
        setOriginalImages();
        for (let i = 0; i < searchBox.length; i++) {
          setSearchedImages((prevState) =>
            prevState.filter((image) => {
              return image.title.toLowerCase().indexOf(searchBox) !== -1;
            })
          );
        }
      }
    }, [searchBox]);

    return (
    <>
    <div className="search-modal row">
        <form className="col s12 m12 l12" action="">
          <input
            type="text"
            className="validate"
            onChange={(event) => handleSearch(event)}
          />
        </form>
        {searchedImages.map((image) => (
          <ImgSearchUserObj
            key={image._id}
            title={image.title.toLowerCase()}
            id={image._id}
          />
        ))}
      </div>
        <Main props={id} />
        </>
    );
};

export default UserGallery;