import React, { useEffect, useContext, useState } from 'react';
import ImgSearchObj from "./../../components/ImgSearchObj/ImgSearchObj"
import Main from "./../../containers/Main/Main"
import UsersContext from "../../context/UsersContext"
import API from "./../../utils/API"

const ImageSearch = () => {
    const [allImages, setImages] = useState([]);
    const [searchBox, setSearchBox] = useState("");
    const [searchedImages, setSearchedImages] = useState([]);
  
    // initial load of the users
    useEffect(() => {
      getImages();
    }, []);
  
    function getImages() {
      API.getImages()
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
          <ImgSearchObj
            key={image._id}
            title={image.title.toLowerCase()}
            id={image._id}
          />
        )).reverse()}
      </div>
        <Main />
    </>
    );
};

export default ImageSearch;