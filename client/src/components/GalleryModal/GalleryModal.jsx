import GalleryObj from "../GalleryObj/GalleryObj"
import image from "./image.png"


const GalleryModal = () => {
    return (
        <>
        <div className="gallery-modal row gallery-modal-nomargin-nopadding">
            <div className="col s1 m1 l1"></div>
            <GalleryObj image={image} />
            <GalleryObj image={image}/>
            <GalleryObj image={image}/>
            <GalleryObj image={image}/>
            <GalleryObj image={image}/>
            <div className="col s1 m1 l1"></div>
        </div>

        </>
    );
};

export default GalleryModal;