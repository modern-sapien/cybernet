const UserFormModal = () => {
  return (
    <>
      <div className="user-form-modal row">
        <div className="col s11 m11 l11"></div>
        <div className="col s1 m1 l1">X</div>
        {/* <div className="row"> */}
        <div className="col s5 m5 l5">
        <img src="" alt=""/>
            box</div>
        <div className="col s7 m7 l7">
          <div className="row">
            <div className="col s6 m6 l6">images</div>
            <div className="col s6 m6 l6">scripts</div>
            <div className="col s6 m6 l6">following</div>
            <div className="col s6 m6 l6">visitors</div>
          </div>
        </div>

        {/* </div> */}
        <form action="">
          Human Name
          <input type="text" />
          Cyber Name
          <input type="text" />
          Email
          <input type="email" />
          Password
          <input type="password" />
          <div className="col s12 m12 l12 form-btn" value="File Upload">
            Create Account
          </div>
          <div className="col s12 m12 l12 form-btn" value="File Upload">
            Cancel
          </div>
        </form>
      </div>
      <div className="user-form-modal-background"></div>
    </>
  );
};

export default UserFormModal;
