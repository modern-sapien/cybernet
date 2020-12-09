import React, { useEffect, useState } from 'react';
import SoloMain from "./../../containers/SoloMain/SoloMain"
import { useParams } from "react-router-dom"
import API from "../../utils/API";

const ImageSearchObj = () => {
    const { id } = useParams();

    return (
        <>
        <SoloMain props={ id } />
        </>
    );
};

export default ImageSearchObj;