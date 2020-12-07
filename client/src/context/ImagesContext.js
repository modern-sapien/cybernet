import React from "react";

const ImagesContext = React.createContext({
    imagesState:[],
    setImagesState: () => {},
});

export default ImagesContext;