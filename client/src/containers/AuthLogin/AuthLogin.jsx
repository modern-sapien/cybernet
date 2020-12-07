import React, { useState, useContext } from 'react';
import { useHistory, Link } from "react-router-dom"
import API from "../../utils/API";
import Main from "./../../containers/Main/Main";

const AuthLogin = () => {
    const history = useHistory();
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
        console.log(result)
        const tokenToStore = result.data.token;

        if(result.data.token)   {
            localStorage.setItem("jwt", tokenToStore);
        }
        history.push("/");
        })
    }
    return (
        <>
        <Main />
        <div className="login-form-modal row">
          <form action="">
              Email
              <input id="email" onChange={handleInputChange} value={returnUserObj.email}  name="email"
                type="email" className="validate" />
              Password
              <input id="password" onChange={handleInputChange} name="password" value={returnUserObj.password} type="password" className="validate"/>
              <div className="col s12 m12 l12 form-btn" value="login" onClick={handleFormSubmit}>
              Login</div>
              <Link to="/newuser"> 
              <div className="col s12 m12 l12 form-btn" value="new-user">
              New User</div>
              </Link>
  
          </form>
        </div>
        <div className="login-form-modal-background"></div>
      </>
    );
};

export default AuthLogin;