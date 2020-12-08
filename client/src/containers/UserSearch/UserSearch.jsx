import React, { useEffect, useContext, useState } from 'react';
import SearchObj from "./../../components/SearchObj/SearchObj"
import Main from "./../../containers/Main/Main"
import UsersContext from "../../context/UsersContext"
import API from "./../../utils/API"

const UserSearch = () => {
    const [allUsers, setUsers] = useState([])

    useEffect(() => {
    getUsers()
    }, []);

    function getUsers() {
    API.getUsers().then((res) =>   {
    console.log(res.data.data)
    setUsers(res.data.data)
    })
    }
    
    return (
        <>
            <div className="search-modal row">
            <form className="col s12 m12 l12" action="">
            <input type="text"/>
            </form>
            {allUsers.map((user) => (
            <SearchObj key={user._id} username={user.username} id={user._id}/>
            ))
            }

        </div>
        <Main />
        </>
    );
};

export default UserSearch;