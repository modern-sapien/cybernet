

const GalleryObj = (props) => {
    return (
        <div className="col s2 m2 l2 ">
        <div className="gallery-object-container">
        image
        <img src={props.image} alt="" className="galleryObj"/>
        </div>
        </div>
    );
};

export default GalleryObj;