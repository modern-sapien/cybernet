import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Main from "./../../containers/Main/Main";
import API from "./../../utils/API";

const ImagePost = () => {
  const { id } = useParams();
  const [userId, setUserId] = useState({
    _id: "",
  });
  const [imageObj, setImgObj] = useState({
    user: "",
    image: "",
    title: "",
  });

  function postImage(imageObj) {
    API.addImage(userId._id, {
      user: imageObj.user,
      image: imageObj.image,
      title: imageObj.title,
    })
      .then((res) => console.log(res))
      .catch((err) => {
        console.log(err);
      });
  }

  function setParamId(id) {
    setUserId({ _id: id });
  }

  function setImageUser(id) {
    setImgObj({ ...imageObj, user: id });
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setImgObj({ ...imageObj, [name]: value });
  }

  useEffect(() => {
    setParamId(id);
    setImageUser(id);
  }, []);

  return (
    <>
      <div className="img-upload-modal row">
        <div className="img-upload-form">
          <form action="" className="">
            <input
              type="text"
              id="title"
              name="title"
              onChange={handleInputChange}
              className="col s12 m12 l12 validate"
            />

            <input
              className="col s12 m12 l12 "
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleInputChange}
            />

            <div
              className="col s12 m12 l12 form-btn"
              value="Image Upload"
              onClick={postImage}
            >
              File Upload
            </div>
          </form>
        </div>
      </div>

      <div className="img-upload-modal-background"></div>
      <Main />
    </>
  );
};

export default ImagePost;
