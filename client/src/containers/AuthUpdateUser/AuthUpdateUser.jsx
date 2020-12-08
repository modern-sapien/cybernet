import React, { useEffect, useState } from 'react';
import Main from "./../../containers/Main/Main"
import { useHistory, Link } from "react-router-dom"
import API from "../../utils/API";


const AuthUpdateUser = () => {
  const history = useHistory();
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
        // setUpdateUserObj(res.data.data._id)
        // console.log(res.data.data)
        setUpdateUserObj({
          _id: res.data.data._id,
          username: res.data.data.username,
          email: res.data.data.email
        })
      }).catch((err) => (
        console.log(err)
      ));
      }

  function updateAuthUser() {
    API.updateUser({
      username: updateUserObj.username,
      email: updateUserObj.email
    }).then((res) => {
      console.log(res)
    })
  }

  function deleteAuthUser() {
    API.deleteUser(updateUserObj._id).then((res) => {
      console.log(res)
      history.go("/")
    })
  }

    function handleInputChange(event) {
      const { name, value } = event.target;
      setUpdateUserObj({ ...updateUserObj, [name]: value });
    }

    function goBack(event){
      history.goBack()
   }

    return (
    <>
      <div className="user-form-modal row">
        <form action="">
          Username
          <input id="username" value={updateUserObj.username} type="text" className="validate" name="username" onChange={handleInputChange}/>
          Email
          <input  id="email"  value={updateUserObj.email} type="email" className="validate" name="email" onChange={handleInputChange}/>

          <div className="col s12 m12 l12 form-btn" value="update" onClick={updateAuthUser}>
            Update Account
          </div>
          <div className="col s12 m12 l12 form-btn" value="updatePassword" >
            Update Password
          </div>
          <div className="col s12 m12 l12 form-btn" value="delete" onClick={deleteAuthUser}>
            Delete Account
          </div>
          <div className="col s12 m12 l12 form-btn" value="cancel" onClick={goBack}>
            Cancel
          </div>
        </form>
      </div>
      <div className="user-form-modal-background"></div>
        <Main />
        
            
        </>
    );
};

export default AuthUpdateUser;