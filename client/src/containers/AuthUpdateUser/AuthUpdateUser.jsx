import React, { useEffect, useState } from "react";
import Main from "./../../containers/Main/Main";
import { useHistory, useParams, Link } from "react-router-dom";
import API from "../../utils/API";

const AuthUpdateUser = () => {
  const history = useHistory();
  const { id } = useParams();
  const [updateUserObj, setUpdateUserObj] = useState({
    _id: "",
    username: "",
    email: "",
    currentPassword: "",
    newPassword: "",
  });

  useEffect(() => {
    getAuthUser();
  }, []);

  function getAuthUser() {
    API.authUser()
      .then((res) => {
        setUpdateUserObj({
          _id: res.data.data._id,
          username: res.data.data.username,
          email: res.data.data.email,
        });
      })
      .catch((err) => console.log(err));
  }

  function updateAuthUser() {
    API.updateUser({
      username: updateUserObj.username,
      email: updateUserObj.email,
    }).then((res) => {
      console.log(res);
    });
  }

  function updatePassAuthUser() {
    API.updatePassword({
      currentPassword: updateUserObj.currentPassword,
      newPassword: updateUserObj.newPassword,
    }).then((res) => {
      console.log(res);
      window.location.reload()
    });
  }

  function deleteAuthUser() {
    API.deleteUser(updateUserObj._id).then((res) => {
      console.log(res);
      history.go("/");
    });
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setUpdateUserObj({ ...updateUserObj, [name]: value });
  }

  function goBack(event) {
    history.goBack();
  }

  return (
    <>
      <div className="user-form-modal row">
        <form action="">
          username
          <input
            id="username"
            value={updateUserObj.username}
            type="text"
            className="validate"
            name="username"
            onChange={handleInputChange}
          />
          email
          <input
            id="email"
            value={updateUserObj.email}
            type="email"
            className="validate"
            name="email"
            onChange={handleInputChange}
          />
          current password
          <input
            id="currentPassword"
            value={updateUserObj.currentPassword}
            type="password"
            className="validate"
            name="currentPassword"
            onChange={handleInputChange}
          />
          new password
          <input
            id="newPassword"
            value={updateUserObj.newPassword}
            type="password"
            className="validate"
            name="newPassword"
            onChange={handleInputChange}
          />
          <div
            className="col s12 m12 l12 form-btn"
            value="update"
            onClick={updateAuthUser}
          >
            update account
          </div>
          <div
            className="col s12 m12 l12 form-btn"
            value="updatePassword"
            onClick={updatePassAuthUser}
          >
            update password
          </div>
          <div
            className="col s12 m12 l12 form-btn"
            value="delete"
            onClick={deleteAuthUser}
          >
            delete account
          </div>
          <Link to={`/user/${id}/gallery`}>
            <div
              className="col s12 m12 l12 form-btn"
              value="update"
            >
              view gallery
            </div>
          </Link>
          <div
            className="col s12 m12 l12 form-btn"
            value="cancel"
            onClick={goBack}
          >
            cancel
          </div>
        </form>
      </div>
      <div className="user-form-modal-background"></div>
      <Main props={id} />
    </>
  );
};

export default AuthUpdateUser;
