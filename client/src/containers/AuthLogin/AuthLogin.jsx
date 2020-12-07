import React, { useState, useContext } from 'react';
import { Link } from "react-router-dom"
import API from "../../utils/API";
import Main from "./../../containers/Main/Main";

const AuthLogin = () => {
    const [returnUserObj, setReturnUserObj] = useState({
        email: "",
        password: ""
    });

    function handleInputChange(event) {
        const {name, value} = event.target;
        setReturnUserObj({ ...returnUserObj, [name]: value });
    }

    const handleFormSubmit = (e) => {
        API.loginUser({
            email: returnUserObj.email.trim(),
            password: returnUserObj.password.trim()
        }).then((result) => {
            if(!result.data.data){
                console.log("there was an error in logging in")
            }

            console.log(result.data.data)
        })
    }
    return (
        <>
        <Main />
        <div className="login-form-modal row">
          <form action="">
              Email
              <input type="text"/>
              Password
              <input type="text"/>
              <div className="col s12 m12 l12 form-btn" value="File Upload">
              Login</div>
              <Link to="/newuser"> 
              <div className="col s12 m12 l12 form-btn" value="File Upload">
              New User</div>
              </Link>
  
          </form>
        </div>
        <div className="login-form-modal-background"></div>
      </>
    );
};

export default AuthLogin;