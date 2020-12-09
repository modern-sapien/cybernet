import React, { useEffect, useState } from 'react';
import Main from "./../../containers/Main/Main"
import { useHistory, useParams, Link } from "react-router-dom"
import API from "../../utils/API";
const SoloMain = () => {
    const history = useHistory();
    const { id } = useParams();
    const [updateUserObj, setUpdateUserObj] = useState({
      _id: "",
      username: "",
      email: "",
      password: ""
    });
  
    useEffect(() => {
      getAuthUser();
      }, [])
  
    function getAuthUser() {
        API.authUser().then((res) =>   {
          setUpdateUserObj({
            _id: res.data.data._id,
            username: res.data.data.username,
            email: res.data.data.email
          })
        }).catch((err) => (
          console.log(err)
        ));
        }
    return (
        <Main props={id}/>
    );
};

export default SoloMain;