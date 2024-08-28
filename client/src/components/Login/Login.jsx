import "./Login.scss";
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const Login = () => {
  return (
    <div className="login-container">
        
      <div className="login-body">
        <div className="left-image"></div>

        <div className="login-form">
          <div className="image1">Image 1</div>
          <div className="image2">Image 2</div>
          <div className="image3">Image 3</div>

          <div className="wrapper">
            
            <form action="">
              <h1>Login</h1>
              <div className="input-box">
                  <input type="text" placeholder="Username" />
                  <FaUserAlt className="icon"/>
              </div>
              <div className="input-box">
                <input type="password" placeholder="Password" />
                <FaLock className="icon"/>
              </div>
              <div className="remember-me">
                <label><input type="checkbox"/>Remember me
                </label>
              </div>
              <button>Login</button>
            </form>
          </div>
        </div>

        <div className="right-image"></div>
      </div>
        
      <div className="login-footer">
        <div className="f-infor">This is my company's formation. If you want to 
            contact with us, please call 0964737054. We do this
            for you bro, lets use it. If you have a good day, look at this.
            This will make your sense fucking bad!</div> 

        
        
        <div className="f-image1"></div>

        <div className="f-contact">
            <div className="facebook">
                <p>Facebook</p>
                <div className="i-facebook">0</div>
            </div>

            <div className="f-text">Paramecia/Demacia</div>

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
