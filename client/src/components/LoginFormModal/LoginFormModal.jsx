const LoginFormModal = () => {
  return (
    <>
      <div className="login-form-modal row">
        <div className="col s11 m11 l11 nomargin-nopadding"></div>
        <div className="col s1 m1 l1">X</div>
        <form action="">
            Email
            <input type="text"/>
            Password
            <input type="text"/>
            <div className="col s12 m12 l12 form-btn" value="File Upload">
            Login</div>
            <div className="col s12 m12 l12 form-btn" value="File Upload">
            New User</div>
        </form>
      </div>
      <div className="login-form-modal-background"></div>
    </>
  );
};

export default LoginFormModal;
