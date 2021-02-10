import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";

// CONTAINERS
import AuthLogin from "./containers/AuthLogin/AuthLogin"
import AuthNewUser from "./containers/AuthNewUser/AuthNewUser"
import AuthUpdateUser from "./containers/AuthUpdateUser/AuthUpdateUser"

import ImageSearch from "./containers/ImageSearch/ImageSearch"
import ImageSearchObj from "./containers/ImageSearchObj/ImageSearchObj"
import UserImageUpDel from "./containers/UserImageUpDel/UserImageUpDel"
import ImagePost from "./containers/ImagePost/ImagePost"

import UserSearch from "./containers/UserSearch/UserSearch"
import UserGallery from "./containers/UserGallery/UserGallery"
import UserUpdateGallery from "./containers/UserUpdateGallery/UserUpdateGallery"

// COMPONENTS
import Header from "./components/Header/Header"
import NavBarBtm from "./components/NavBarBtm/NavBarBtm"

// UTILS
import API from "./utils/API";

// CONTEXT
import ImagesContext from "./context/ImagesContext";
import UsersContext from "./context/UsersContext";

function App() {
  const [ imagesState, setImagesState ] = useState();
  const [ usersState, setUsersState ] = useState();

  useEffect(() => {
    // get all images
    API.getImages().then((res) => {
      let imagesArray = res.data.data;
      setImagesState(imagesArray)
    })

    // get all users
    API.getUsers().then((res) =>  {
      let usersArray = res.data.data;
      setUsersState(usersArray)
    })
  }, []);

  return (
    <div className="App">
      <Router>
        <ImagesContext.Provider value={{ imagesState, setImagesState}}>
        <UsersContext.Provider value={{ usersState, setUsersState}}>

        <Header />
        <Switch>
          <Route  exact path="/" component={AuthLogin}/>
          <Route  exact path="/login" component={AuthLogin} />
          <Route  exact path="/newuser" component={AuthNewUser} />
          <Route  exact path="/user/:id" component={AuthUpdateUser} />
          <Route  exact path="/user/:id/images" component={ImagePost} />
          <Route  exact path="/user/:id/gallery" component={UserUpdateGallery} />
          <Route  exact path="/userimage/:id/" component={UserImageUpDel} />
          
          <Route  exact path="/images" component={ImageSearch} />
          <Route  exact path="/images/post" component={ImagePost} />
          <Route  exact path="/images/:id" component={ImageSearchObj} />

          <Route exact path="/search" component={UserSearch} />
          <Route exact path="/search/:id" component={UserGallery} />

        </Switch>
      <NavBarBtm />

      </UsersContext.Provider>
      </ImagesContext.Provider>

    </Router>
    </div>
  );
}

export default App;