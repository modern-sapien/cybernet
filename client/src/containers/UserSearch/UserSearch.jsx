import React, { useEffect, useContext, useState } from "react";
import SearchObj from "./../../components/SearchObj/SearchObj";
import Main from "./../../containers/Main/Main";
import UsersContext from "../../context/UsersContext";
import API from "./../../utils/API";

const UserSearch = () => {
  const [allUsers, setUsers] = useState([]);
  const [searchBox, setSearchBox] = useState("");
  const [searchedUsers, setSearchedUsers] = useState([]);

  // initial load of the users
  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    API.getUsers()
      .then((res) => {
        console.log(res.data.data);
        setUsers(res.data.data);
        setSearchedUsers(res.data.data);
      })
      .catch((err) => console.log(err));
  }

  function setOriginalUsers() {
    setSearchedUsers(allUsers);
  }

  function handleSearch(event) {
    let searchedDm = event.target.value.toLowerCase();
    setSearchBox(searchedDm);
  }

  useEffect(() => {
    if (searchBox.length > 0) {
      console.log("I am greater than 0");
      setOriginalUsers();
      for (let i = 0; i < searchBox.length; i++) {
        setSearchedUsers((prevState) =>
          prevState.filter((user) => {
            return user.username.toLowerCase().indexOf(searchBox) !== -1;
          })
        );
      }
    } else {
      setOriginalUsers();
      for (let i = 0; i < searchBox.length; i++) {
        setSearchedUsers((prevState) =>
          prevState.filter((user) => {
            return user.username.toLowerCase().indexOf(searchBox) !== -1;
          })
        );
      }
    }
  }, [searchBox]);

  return (
    <>
      <div className="search-modal row">
        <form className="col s12 m12 l12" action="">
          <input
            type="text"
            className="validate"
            onChange={(event) => handleSearch(event)}
          />
        </form>
        {searchedUsers.map((user) => (
          <SearchObj
            key={user._id}
            username={user.username.toLowerCase()}
            id={user._id}
          />
        ))}
      </div>
      <Main />
    </>
  );
};

export default UserSearch;
