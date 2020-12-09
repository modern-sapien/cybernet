import React, { useContext, useState } from "react";
import { useHistory, Link } from "react-router-dom"
import API from "../../utils/API";
import Main from "./../../containers/Main/Main"

const AuthNewUser = () => {
    const history = useHistory();
    const [newUserObj, setNewUserObj] = useState({
      _id: "",
      username: "",
      email: "",
      password: ""
    });

    function handleInputChange(event) {
        const { name, value } = event.target;
        setNewUserObj({ ...newUserObj, [name]: value });
      }

    function goBack(event){
        history.goBack()
     }

    const handleFormSubmit = (e) => {
        console.log(document.cookie.split(";"))

        API.registerUser({
            username: newUserObj.username,
            email: newUserObj.email,
            password: newUserObj.password
        }).then((result) => {
            console.log(result)
            console.log(result.data.token)
            
        })
    }

    return (
        <>
        <Main />
        <div className="user-form-modal row">
          <form action="">
            username
            <input id="username" value={newUserObj.username} type="text" className="validate" name="username" onChange={handleInputChange}/>
            email
            <input  id="email"  value={newUserObj.email} type="email" className="validate" name="email" onChange={handleInputChange}/>
            password
            <input id="password" value={newUserObj.password} name="password" type="password" className="validate" onChange={handleInputChange}/>
            <div className="col s12 m12 l12 form-btn" value="register" disabled={!(newUserObj.password && newUserObj.email)} onClick={handleFormSubmit}>
            create account
            </div>
            <div className="col s12 m12 l12 form-btn" value="cancel" onClick={goBack}>
            cancel
            </div>
          </form>
        </div>
      </>
    );
};

export default AuthNewUser;