import React from "react";
import "./stylesheet.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register-fullscreen d-flex justify-content-center align-items-center">
      <div className="form-container">
        <h2 className="fw-bold text-center mb-4 text-dark">Create an Account</h2>
        <form>
          <div className="row g-3">
            <div className="col-md-6">
              <label htmlFor="firstName" className="form-label fw-semibold">First Name</label>
              <input type="text" className="form-control shadow-sm" id="firstName" placeholder="Enter Your First Name" />
            </div>

            <div className="col-md-6">
              <label htmlFor="lastName" className="form-label fw-semibold">Last Name</label>
              <input type="text" className="form-control shadow-sm" id="lastName" placeholder="Enter Your Last Name" />
            </div>

            <div className="col-12">
              <label htmlFor="email" className="form-label fw-semibold">Email</label>
              <input type="email" className="form-control shadow-sm" id="email" placeholder="Enter Your Email" />
            </div>

            <div className="col-12">
              <label htmlFor="address" className="form-label fw-semibold">Address</label>
              <input type="text" className="form-control shadow-sm" id="address" placeholder="123 street Elmansoura" />
            </div>

            <div className="col-md-6">
              <label htmlFor="password" className="form-label fw-semibold">Password</label>
              <input type="password" className="form-control shadow-sm" id="password" placeholder="********" />
            </div>

            <div className="col-md-6">
              <label htmlFor="confirmPassword" className="form-label fw-semibold">Confirm Password</label>
              <input type="password" className="form-control shadow-sm" id="confirmPassword" placeholder="********" />
            </div>
          </div>

          <div className="d-flex justify-content-center gap-3 mt-4 flex-wrap">
            <button type="submit" className="btn btn-primary px-4 shadow w-100 w-md-auto">Register</button>
            <button type="reset" className="btn btn-outline-dark px-4 shadow w-100 w-md-auto">Reset</button>
          </div>

          <p className="text-center mt-3 mb-0 text-secondary">
            Already have an account? <Link to="/login" className="fw-bold text-decoration-none" >Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
