const ImgUploadModal = () => {
  return (
    <>
      <div className="img-upload-modal row">
          <div className="img-upload-form">
          
          <form action="" className="">
            <input
              className="col s12 m12 l12 "
              type="file"
              id="img"
              name="img"
              accept="image/*"
            />
            <input type="text" value="" className="col s12 m12 l12 img-upload-form-font"/>            
            <div className="col s12 m12 l12 form-btn" value="File Upload">
            File Upload</div>
          </form>
          </div>
      </div>

      <div className="img-upload-modal-background"></div>
    </>
  );
};

export default ImgUploadModal;
