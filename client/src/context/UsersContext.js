import React from "react";

const UsersContext = React.createContext({
    usersState:[],
    setUsersState: () => {},
});

export default UsersContext;