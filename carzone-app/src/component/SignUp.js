import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import "../App.css";
import backgroundImage from "../Images/SignUp.png";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import {gapi} from 'gapi-script';



const SignUp = () => {
  const [Email, SetEmail] = useState("");
  const [Password, SetPassword] = useState("");
  const [ConfirmPassword, SetConfirmPassword] = useState("");
  const [UserName, SetUserName] = useState("");
  const [Tel, SetTel] = useState("");
  const [ErrorMsg, SetErrorMsg] = useState("");

 
  useEffect(() => {
    
    gapi.load("client:auth2",()=>{
      gapi.auth2.getAuthInstance({client_id:client_id})
    },[])
  })
  const client_id="67295596488-qjg965oe3oiirnmgcpcoeovccan8mnkj.apps.googleusercontent.com"
  const [showLoginButton, setShowLoginButton] = useState(true);
  const [showLogoutButton, setShowLogoutButton] = useState(false);

  const onLoginSuccess = (res) => {
    alert('You have been signed in successfully')
    console.log('Login Success', res.profileObj);
    setShowLoginButton(false);
    setShowLogoutButton(true);


  }
  
  const onFailureSuccess = (res) => {
    console.log('Login Failed', res);
  }

  const onSignoutSuccess = () => {
    alert("You have been signed out successfully");
    setShowLoginButton(true);
    setShowLogoutButton(false);
  }

  

  const handleSubmit = (event) => {
    event.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((u) => u.Email === Email);
    if (user) {
      SetErrorMsg("This email address is already registered.");
      return;
    }
    const EmailRegex = /^\S+@\S+\.\S+$/;
    if (!EmailRegex.test(Email)) {
      SetErrorMsg("Please enter a valid email address.");
      return;
    }
    const TelRegex = /^\d{10}$/;
    if (!TelRegex.test(Tel)) {
      SetErrorMsg("Please enter a valid phone number");
      return;
    }
    const PasswordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if (!PasswordRegex.test(Password)) {
      SetErrorMsg(
        "Password must contain at least eight characters, at least one uppercase letter, at least one lowercase letter and at least one number."
      );
      return;
    }

    if (Password !== ConfirmPassword) {
      SetErrorMsg("Passwords do not match");
      return;
    }

    const userData = { Email, UserName, Tel, Password };
    users.push(userData);
    localStorage.setItem("users", JSON.stringify(users));
    console.log(userData);

    SetEmail("");
    SetUserName("");
    SetTel("");
    SetPassword("");
    SetConfirmPassword("");
    SetErrorMsg("");
  };

  return (
    <div
      className="background-image"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container mt-5 mb-5">
        <div className="row justify-content-end">
          <div className="col-lg-4 col-md-6 col-sm-8">
            <Form className="d-flex flex-column mt-5" onSubmit={handleSubmit}>
              <h1 className=" Sign fw-bold text-center mb-5">Sign Up</h1>
              <Form.Group className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="Email Address"
                  style={{
                    boxShadow: "3px 3px 3px lightgrey",
                    fontSize: "1.2rem",
                  }}
                  value={Email}
                  autoComplete="on"
                  required
                  onChange={(e) => SetEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="User Name"
                  style={{
                    boxShadow: "3px 3px 3px lightgrey",
                    fontSize: "1.2rem",
                  }}
                  value={UserName}
                  autoComplete="on"
                  required
                  onChange={(e) => SetUserName(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="tel"
                  placeholder="Contact Number"
                  style={{
                    boxShadow: "3px 3px 3px lightgrey",
                    fontSize: "1.2rem",
                  }}
                  value={Tel}
                  autoComplete="on"
                  required
                  onChange={(e) => SetTel(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  style={{
                    boxShadow: "3px 3px 3px lightgrey",
                    fontSize: "1.2rem",
                  }}
                  value={Password}
                  autoComplete="on"
                  required
                  onChange={(e) => SetPassword(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Control
                  className="mb-2"
                  type="password"
                  placeholder="Confirm Password"
                  style={{
                    boxShadow: "3px 3px 3px lightgrey",
                    fontSize: "1.2rem",
                  }}
                  value={ConfirmPassword}
                  autoComplete="on"
                  required
                  onChange={(e) => SetConfirmPassword(e.target.value)}
                />
              </Form.Group>
              <Button
                className="mb-2"
                style={{ backgroundColor: "#476072", fontSize: "1.2rem" }}
                type="submit"
              >
                SIGN UP{" "}
              </Button>
              {ErrorMsg && <p style={{ color: "red" }}>{ErrorMsg}</p>}
              <p>
                Already have an account?{" "}
                <Link style={{ textDecoration: "none" }} to="/Registration">
                  Sign In
                </Link>
              </p>
              <Form.Text className="mb-3 mt-3 text-muted text-center">
                Or
              </Form.Text>
              <div className="d-flex justify-content-center">
                {showLoginButton ?
                <GoogleLogin
                  client_id="67295596488-qjg965oe3oiirnmgcpcoeovccan8mnkj.apps.googleusercontent.com"
                  buttonText="Login with google"
                  onSuccess={onLoginSuccess}
                  onFailure={onFailureSuccess}
                  cookiePolicy={"single_host_origin"}
                /> : null }
                {showLogoutButton ?
                <GoogleLogout
                  client_id="67295596488-qjg965oe3oiirnmgcpcoeovccan8mnkj.apps.googleusercontent.com"
                  buttonText="Logout"
                  onLogoutSuccess={onSignoutSuccess}
                ></GoogleLogout> : null }
               
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
