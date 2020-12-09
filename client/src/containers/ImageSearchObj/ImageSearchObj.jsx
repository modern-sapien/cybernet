import React, { useEffect, useState } from 'react';
import SoloMain from "./../../containers/SoloMain/SoloMain"
import { useHistory, useParams, Link } from "react-router-dom"
import API from "../../utils/API";

const ImageSearchObj = () => {
    const history = useHistory();
    const { id } = useParams();

    return (
        <>
        <SoloMain props={ id } />
        </>
    );
};

export default ImageSearchObj;