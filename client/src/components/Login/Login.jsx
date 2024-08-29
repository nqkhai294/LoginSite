import "./Login.scss";
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const [userInfor, setUserInfor] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfor({
      ...userInfor,
      [name]: value,
    });
  };

  const fetchData = async (data) => {
    try {
      const res = await axios.post("http://localhost:5000/api/login", data);
      console.log(res);
      if (res.status === 200) {
        setSubmitSuccess(true);
        console.log("Login successfully!");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    setUserInfor({
      ...userInfor,
    });

    // Send data to database
    if (
      (userInfor.username !== "") &
      (userInfor.username !== undefined) &
      (userInfor.password !== "") &
      (userInfor.password !== undefined)
    ) {
      const data = {
        username: userInfor.username,
        password: userInfor.password,
      };
      fetchData(data);
      console.log(data);
    }

    var error = document.getElementsByClassName("error");
    for (let i = 0; i < error.length; i++) {
      error[i].innerHTML = "";
    }

    // Handle error for username
    if ((userInfor.username === "") | (userInfor.username === undefined)) {
      let errorItem = document.getElementsByClassName("error_username");
      errorItem.innerHTML = "Username is required!";
      console.log(userInfor.username);
      setSubmitSuccess(false);
    }

    // Handle error for password
    if ((userInfor.password === "") | (userInfor.password === undefined)) {
      let errorItem = document.getElementsByClassName("error_password");
      errorItem.innerHTML = "Password is required!";
      console.log("Password is required!");
      setSubmitSuccess(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-body">
        <div className="left-image"></div>

        <div className="login-form">
          <div className="image1"></div>
          <div className="image2"></div>
          <div className="image3"></div>

          <div className="wrapper">
            <form action="" onSubmit={(e) => handleSubmit(e)}>
              <h1>Login</h1>
              <div className="input-box username">
                <input
                  type="text"
                  placeholder="Username"
                  name="username"
                  onChange={(e) => handleChange(e)}
                />
                <FaUserAlt className="icon" />
                <div id="error_username" className="error"></div>
              </div>
              <div className="input-box password">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={(e) => handleChange(e)}
                />
                <FaLock className="icon" />
                <div id="error_password" className="error"></div>
              </div>
              <div className="remember-me">
                <label>
                  <input type="checkbox" />
                  Remember me
                </label>
              </div>
              <button type="submit">Login</button>
            </form>
          </div>
        </div>

        <div className="right-image"></div>
      </div>

      <div className="login-footer">
        <div className="f-infor">
          This is my company's formation. If you want to contact with us, please
          call 0964737054. We do this for you bro, lets use it. If you have a
          good day, look at this. This will make your sense fucking bad!
        </div>

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
