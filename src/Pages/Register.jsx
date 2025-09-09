import React, { useState } from "react";
import "./stylesheet.css";
import { Link } from "react-router-dom";
import UseAuth from "../Hooks/useAuth/UseAuth";

const Register = () => {

  const { register, loading, error } = UseAuth();


  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert(" Passwords don't match! ");
      return;
    }

    const result = await register({
      firstName,
      lastName,
      email,
      address,
      password,
      confirmPassword,
    });

    if (result) {
      console.log("✅ Registered successfully:", result);
      // navigate("/login")
    }
  };

  return (
    <div className="register-fullscreen d-flex justify-content-center align-items-center">
      <div className="form-container">
        <h2 className="fw-bold text-center mb-4 text-dark">Create an Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-md-6">
              <label htmlFor="firstName" className="form-label fw-semibold">
                First Name
              </label>
              <input
                type="text"
                className="form-control shadow-sm"
                id="firstName"
                placeholder="Enter Your First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="lastName" className="form-label fw-semibold">
                Last Name
              </label>
              <input
                type="text"
                className="form-control shadow-sm"
                id="lastName"
                placeholder="Enter Your Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <div className="col-12">
              <label htmlFor="email" className="form-label fw-semibold">
                Email
              </label>
              <input
                type="email"
                className="form-control shadow-sm"
                id="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="col-12">
              <label htmlFor="address" className="form-label fw-semibold">
                Address
              </label>
              <input
                type="text"
                className="form-control shadow-sm"
                id="address"
                placeholder="123 street Elmansoura"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="password" className="form-label fw-semibold">
                Password
              </label>
              <input
                type="password"
                className="form-control shadow-sm"
                id="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="confirmPassword" className="form-label fw-semibold">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control shadow-sm"
                id="confirmPassword"
                placeholder="********"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="d-flex justify-content-center gap-3 mt-4 flex-wrap">
            <button
              type="submit"
              className="btn btn-primary px-4 shadow w-100 w-md-auto fw-bold py-2"
              disabled={loading}
            >
              {loading ? "Registering..." : "Register"}
            </button>
          </div>

          {error && <p className="text-danger text-center mt-2">{error}</p>}

          <p className="text-center mt-3 mb-0 text-secondary">
            Already have an account?{" "}
            <Link to="/login" className="fw-bold text-decoration-none ">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
