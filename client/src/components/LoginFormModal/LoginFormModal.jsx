import { Link } from "react-router-dom"

const LoginFormModal = () => {
  return (
    <>
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

export default LoginFormModal;
