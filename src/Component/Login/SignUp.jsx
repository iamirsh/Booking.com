import React, { useState } from "react";
import { form, Alert } from "react-bootstrap";
import {Login} from "./Login";
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import './Login.css';

 export const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);
  

  function handleFormSubmit(e) {
    e.preventDefault();

    if (!name || !email || !password) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("sanskarEmail", JSON.stringify(email));
      localStorage.setItem(
        "sanskarPassword",
        JSON.stringify(password)
      );
      console.log("Saved in Local Storage");

      setLogin(!login);
    }
  }
  return (
    <>
 
        <div className="container col-3 mt-5">
          {" "}
          {login ? (
            <form onSubmit={handleFormSubmit}>
              <h3>Register</h3>

              <div className="form-group mt-3">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control mt-2"
                  placeholder="Enter Full Name"
                  name="name"
                  onChange={(event) => setName(event.target.value)}
                />
              </div>

              <div className="form-group mt-2">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control mt-2"
                  placeholder="Enter email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>

              <div className="form-group mt-2">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control mt-2"
                  placeholder="Enter password"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>


              <button type="submit" className="btn btn-primary btn-lg btn-block mt-3">
                Register
              </button>
              <p className="forgot-password text-right">
                <Link to="/login" >Already registered?{" "}Login</Link>
              </p>
              {flag && (
                <Alert color="primary" variant="danger">
                  I got it you are in hurry! But every Field is important!
                </Alert>
              )}
            </form>
          ) : (
            <Login />
          )}
        </div>
    
    </>
  );
}
