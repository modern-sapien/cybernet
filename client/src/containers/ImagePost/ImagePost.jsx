import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Main from "./../../containers/Main/Main";
import API from "./../../utils/API";
import axios from "axios";

const ImagePost = () => {
  const { id } = useParams();
  const [ fileState, setFileState] = useState({
      selectedFile: null
  });
  const [userId, setUserId] = useState({
    _id: "",
  });
  const [imageObj, setImgObj] = useState({
    image: "",
    title: "",
    user: "",
  });

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

  function fileSelectedHandler(event)  {
        console.log(event.target.files[0]);
        console.log(event.target.type);
        setFileState(event.target.files[0]);
    }

    function fileUploadHandler(event) {
        event.preventDefault();
        const fd = new FormData();
        fd.append("image", fileState, fileState.name)
        fd.append("user", imageObj.user);
        fd.append("title", imageObj.title);
        axios.post(`/api/v1/users/${userId._id}/images`, fd)
        .then(res => {console.log(res)})
    }

  function postImage() {
    API.addImage(imageObj.user, {
      user: imageObj.user,
      image: imageObj.image,
      title: imageObj.title,
    })
      .then((res) => console.log(res))
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <div className="img-upload-modal row">
        <div className="img-upload-form">
          <form action="post" className="" enctype="multipart/form-data">
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
              onChange={fileSelectedHandler}
            />
            <button className="col s12 m12 l12 form-btn white-text" onClick={fileUploadHandler}>File Upload</button>
          </form>
        </div>
      </div>

      <div className="img-upload-modal-background"></div>
      <Main props={id}/>
    </>
  );
};

export default ImagePost;
