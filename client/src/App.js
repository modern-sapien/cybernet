import { useState, useEffect, useContext } from "react";
import axios from "axios"
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// containers

import AuthLogin from "./containers/AuthLogin/AuthLogin"
import AuthNewUser from "./containers/AuthNewUser/AuthNewUser"
import AuthUpdateUser from "./containers/AuthUpdateUser/AuthUpdateUser"

import Main from "./containers/Main/Main"
import ImageSearch from "./containers/ImageSearch/ImageSearch"
import ImageSearchObj from "./containers/ImageSearchObj/ImageSearchObj"
import ImagePost from "./containers/ImagePost/ImagePost"

import UserSearch from "./containers/UserSearch/UserSearch"
import UserSearchObj from "./containers/UserSearchObj/UserSearchObj"

// components
import Header from "./components/Header/Header"
import NavBarBtm from "./components/NavBarBtm/NavBarBtm"

// three

// context API


function App() {

  useEffect(() => {
    console.log("make an API call")
    axios
      .get("/api/v1/users")
      .then((response) => {
        console.log(response.data.data)
      })
      .catch((err) => {
        console.log(err)
      })

    axios
      .get("/api/v1/users/5fcae83017f71d94c02c5cb4")
      .then((response) => {
        console.log(response.data.data)
      })
      .catch((err) => {
        console.log(err)
      })

      axios
      .get("/api/v1/images")
      .then((response) => {
        console.log(response.data.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route  exact path="/" component={AuthLogin} />
          <Route  exact path="/newUser" component={AuthNewUser} />
          <Route  exact path="/user/:id" component={AuthUpdateUser} />
          
          <Route  exact path="/images" component={ImageSearch} />
          <Route  exact path="/images/post" component={ImagePost} />
          <Route  exact path="/images/:id" component={ImageSearchObj} />

          <Route exact path="/search" component={UserSearch} />
          <Route exact path="/search/:id" component={UserSearchObj} />

        </Switch>
      <NavBarBtm />
    </Router>

      
      
      
    </div>
  );
}

export default App;