
const ImgUploadModal = () => {
    return (
        <>
        <div className="img-upload-modal row nomargin-nopadding">
        <div className="col s3 m3 l3 "></div>
        
        <div className="col s6 m6 l6">
        <form>
            <input type="file" id="img" name="img" accept="image/*"/>
            <input type="submit"/>
        </form>
        </div>

        <div className="col s3 m3 l3"></div>
        </div>

        <div className="img-upload-modal-background"></div>
        </>
    );
};

export default ImgUploadModal;