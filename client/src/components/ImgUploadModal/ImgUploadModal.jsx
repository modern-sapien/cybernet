const ImgUploadModal = () => {
  return (
    <>
      <div className="row img-upload-modal">
          <div className="img-upload-form">
          </div>
          <form action="">
           <input
              className="col s8 m8 l8"
              type="file"
              id="img"
              name="img"
              accept="image/*"
            />
            <div className="col s4 m4 l4 btn" value="File Upload">File Upload </div>
          </form>
      </div>

      <div className="img-upload-modal-background"></div>
    </>
  );
};

export default ImgUploadModal;
