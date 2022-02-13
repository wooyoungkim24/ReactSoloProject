// frontend/src/components/LoginFormModal/LoginForm.js
import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { useHistory, Link } from 'react-router-dom'
import './LoginForm.css'

function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const history = useHistory();


  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    await dispatch(sessionActions.login({ credential, password }))
    .then(() => history.goBack())
    .catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );

  };

  return (
    <div className="loginPage">
      <div id="loginTopBar">
          <i className="fab fa-yelp fa-5x" onClick={() => history.push("/")}></i>
      </div>
      <div className="loginFormBody">
        <div className="loginFormDiv">
          <div className="formHeader">
              <h2>Log in to Yelperaunt</h2>
              <div id="signupfromlogin">
                  New to Yelperaunt? <Link to="/signup">Sign Up</Link>
              </div>
          </div>
          <form onSubmit={handleSubmit}>
            <ul>
              {errors.map((error, idx) => (
                <li key={idx}>{error}</li>
              ))}
            </ul>
            <label>
              <input
                type="text"
                value={credential}
                onChange={(e) => setCredential(e.target.value)}
                required
                placeholder="Username or Email"
              />
            </label>
            <label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Password"
              />
            </label>
            <button type="submit">Log In</button>
          </form>
        </div>
        <div className="loginFormImage">
          <img src="https://s3-media0.fl.yelpcdn.com/assets/2/www/img/7922e77f338d/signup/signup_illustration.png"></img>
        </div>
      </div>


    </div>


  );
}

export default LoginForm;
