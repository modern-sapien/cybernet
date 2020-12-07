
const CreateUserFormModal = () => {
    return (
        <>
        <div className="user-form-modal row">
          <form action="">
            Username
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
      </>
    );
};

export default CreateUserFormModal;