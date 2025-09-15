import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../Context/UserProvider";
import { ToastContainer, toast } from "react-toastify";
import { Spinner } from "react-bootstrap";



import RegisterForm from "../Components/Register/RegisterForm";

const Register = () => {

  return (
    <div className="register-fullscreen d-flex justify-content-center align-items-center ">
      <ToastContainer />
      <div className="form-container my-5">
        <h2 className="fw-bold text-center  text-dark my-5 ">Create an Account</h2>
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
