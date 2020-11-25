const ImgUploadModal = () => {
  return (
    <>
      <div className="img-upload-modal row">
          <div className="img-upload-form">
          
          <form action="" className="">
           <input
              className="col s8 m8 l8"
              type="file"
              id="img"
              name="img"
              accept="image/*"
            />
            <div className="col s4 m4 l4 form-btn" value="File Upload">
            File Upload</div>
          </form>
          </div>
      </div>

      <div className="img-upload-modal-background"></div>
    </>
  );
};

export default ImgUploadModal;
