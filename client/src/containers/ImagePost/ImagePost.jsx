import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Main from "./../../containers/Main/Main";
import SoloMain from "./../../containers/SoloMain/SoloMain";
import API from "./../../utils/API";
import axios from "axios";

const ImagePost = () => {
  const { id } = useParams();
  
  // new image upload 
  const [fileInputState, setFileInputState] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [previewSource, setPreviewSource] = useState();

  const handleFileInputChange = (e) => {
    setPreviewSource("")
    let file = e.target.files[0]
    previewFile(file);
  }

  const previewFile = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result)
    }
  }
  
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
        .then(res => 
          console.log(res),
          useHistory.go(`user/${id}/images`)
        )
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
    {previewSource && (  <SoloMain props={previewSource} />
    
    // <img src={previewSource}  alt="chosen" className="preview-image" /> 
    )}
      <div className="img-upload-modal row">
        <div className="img-upload-form">
          <form action="post" className="" encType="multipart/form-data">
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
              value={fileInputState}
              onChange={handleFileInputChange}
            />
            {/* <input
              className="col s12 m12 l12 "
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleInputChange}
              onChange={fileSelectedHandler}
            /> */}
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
