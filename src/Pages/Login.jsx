import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="login-page d-flex justify-content-center align-items-center">
      <div className="login-container">
        <h2 className="login-title">Welcome Back</h2>
        <p className="login-subtitle text-center">Please login to your account</p>

        <div className="login-form">
          <input type="email" placeholder="Email" className="form-control" />
          <input type="password" placeholder="Password" className="form-control" />
          <button className="btn-login">Login</button>
          <p className="forgot-password text-center">
            <a href="#">Forgot Password?</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;