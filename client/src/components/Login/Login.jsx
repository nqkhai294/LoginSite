import "./Login.scss";

const Login = () => {
  return (
    <div className="login-container">
        
      <div className="login-body">
        <div className="left-image"></div>

        <div className="login-form">
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
        </div>

        <div className="right-image"></div>
      </div>
        
      <div className="login-footer">
        <div>This is my company's formation. If you want to 
            contact with us, please call 0964737054. We do this
            for you bro, lets use it. If you have a good day, look at this.
            This will make your sense fucking bad!</div> 

        
        
        <div className="f-image1">0000</div>

        <div className="f-contact">
            <div className="facebook">
                <p>Facebook</p>
                <div className="i-facebook">0</div>
            </div>

            <div>Lozzzzzzzzzzzzzzzzz</div>

            <div className="instagram">
                <p>Instagram</p>
                <div className="i-insta1">0</div>
                <div className="i-insta2">0</div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
