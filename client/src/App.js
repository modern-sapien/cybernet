import { useState, useEffect, useContext } from "react";
import axios from "axios"
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// containers
import Main from "./containers/Main/Main"
import UserSearch from "./containers/UserSearch/UserSearch"

// components
import Header from "./components/Header/Header"
import NavBarBtm from "./components/NavBarBtm/NavBarBtm"

// three


// context API

//

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
        <Main />
        <Switch>
          <Route  path="/search" component={UserSearch} />
          <Route  path="/search/:id" component={UserSearch} />


        </Switch>
      <NavBarBtm />
    </Router>

      
      
      
    </div>
  );
}

export default App;