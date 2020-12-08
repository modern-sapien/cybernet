import React from 'react';
import { useParams } from "react-router-dom";
import SearchObj from "./../../components/SearchObj/SearchObj"
import Main from "./../../containers/Main/Main"
import API from "./../../utils/API";


const UserSearchObj = () => {
    const { id } = useParams();

    return (
        <>
        <Main props={id} />
        </>
    );
};

export default UserSearchObj;