import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../Context/UserProvider";


const Login = () => {

  const navigate = useNavigate();
  const { Login, loading, error } = useUser();


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await Login(email, password);
      console.log("Logged in user:", res);
      navigate("/")
    } catch (err) {
      console.log("Login failed:", err);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center py-5 bg-light shadow mt-5">
      <div className="w-100 p-md-5 p-3">
        <h2 className="fw-bold mt-4">Welcome Back</h2>
        <p className="text-center fw-semibold mb-4">
          Please login to your account
        </p>

        <form className="d-flex flex-column justify-content-center align-items-center gap-3" onSubmit={handleSubmit}>

          <input
            type="email"
            placeholder="Email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="btn btn-primary btn-lg px-4 " type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>

          {error && <p className="text-danger fw-semibold mt-2">{error}</p>}

          <p className="text-center  mt-3 d-flex gap-2 flex-column">
            <Link to="/register" className="text-decoration-none "> I don't have account </Link>
            <Link to="/login" className="text-decoration-none "> Forgot Password ? </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;