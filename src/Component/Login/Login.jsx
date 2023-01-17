import React, { useState } from "react";
import { form, Alert } from "react-bootstrap";
import {Home} from "../../Pages/Home/Home";
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import './Login.css';

export const Login = ()=> {
  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");

  const [flag, setFlag] = useState(false);
  const [home, setHome] = useState(true);

  function handleLogin(e) {
    e.preventDefault();
    let pass = localStorage
      .getItem("sanskarPassword")
      .replace(/"/g, "");
    let mail = localStorage.getItem("sanskarEmail").replace(/"/g, "");
    

    if (!emaillog || !passwordlog) {
      setFlag(true);
      console.log("EMPTY");
    } else if (passwordlog !== pass || emaillog !== mail) {
      setFlag(true);
    } else {
      setHome(!home);
      setFlag(false);
    }
  }
  

  return (
    <div className="container col-3 mt-5" >
      {home ? (
        <form onSubmit={handleLogin} className="container mt-3">
          <h3>LogIn</h3>
          <div className="form-group mt-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control mt-2"
              placeholder="Enter email"
              onChange={(event) => setEmaillog(event.target.value)}
            />
          </div>

          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-2"
              placeholder="Enter password"
              onChange={(event) => setPasswordlog(event.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary btn-lg btn-block mt-3">
            Login
          </button>
          <p className="forgot-password text-right"><Link to='/signup'>
                Not a member?{" "}Signup Now</Link>
              </p>

          {flag && (
            <Alert color="primary" variant="warning">
              Fill correct Info else keep trying.
            </Alert>
          )}
        </form>
      ) : (
        <Home />
      )}
    </div>
  );
}