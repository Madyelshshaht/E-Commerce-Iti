import React, { useState } from "react";
import "./stylesheet.css";
import { Link, useNavigate } from "react-router-dom";
import UseAuth from "../Hooks/useAuth/UseAuth";
import { useUser } from "../Context/UserProvider";
import { ToastContainer, toast } from "react-toastify";

const Register = () => {

  const { RegisterFunc, loading, error } = useUser();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = [];

    if (password.length < 8) {
      errors.push("Password must be at least 8 characters long.");
    }
    if (!/[A-Z]/.test(password)) {
      errors.push("Password must include at least one uppercase letter.");
    }
    if (!/[0-9]/.test(password)) {
      errors.push("Password must include at least one number.");
    }
    if (!/[@$!%*?&]/.test(password)) {
      errors.push("Password must include at least one special character.");
    }
    if (password !== confirmPassword) {
      errors.push("Password and ConfirmPassword don't match.");
    }


    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    if (!emailRegex.test(email)) {
      errors.push("Please enter a valid email address ");
    }


    if (errors.length > 0) {
      errors.forEach((err) => toast.error(err, { draggable: true, draggablePercent: 50, draggableDirection: "x" }));
      return;
    }


    const result = await RegisterFunc({
      email,
      password,
      firstName,
      lastName,
    });

    if (result) {
      toast.success("Account created successfully 🎉");
      console.log("✅ Registered successfully:", result);
      navigate("/")

      // Reset
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    }
  };

  return (
    <div className="register-fullscreen d-flex justify-content-center align-items-center">
      <ToastContainer />
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
                placeholder="Enter your first name "
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
                placeholder="Enter your last name "
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

            <div className="col-md-6">
              <label htmlFor="password" className="form-label fw-semibold">
                Password
              </label>
              <input
                type="password"
                className="form-control shadow-sm"
                id="password"
                placeholder="At least 8 chars, 1 uppercase, 1 number, 1 special char"
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
                placeholder="Re-enter your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>

          {/* button */}
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
