import "./Login.scss";

const Login = () => {
  return (
    <div className="login-container">
      <div className="image1">Image 1</div>
      <div className="image2">Image 2</div>
      <div className="image3">Image 3</div>

      <div className="login">
        <h1>Login</h1>
        <form>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button>Login</button>
        </form>
      </div>

      <div className="footer">
        <p>Footer</p>
      </div>
    </div>
  );
};

export default Login;
