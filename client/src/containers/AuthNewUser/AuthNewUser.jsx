import React from 'react';
import CreateUserFormModal from "./../../components/CreateUserFormModal/CreateUserFormModal"
import Main from "./../../containers/Main/Main"

const AuthNewUser = () => {
    return (
        <>
        <CreateUserFormModal />
        <Main />
        </>
    );
};

export default AuthNewUser;