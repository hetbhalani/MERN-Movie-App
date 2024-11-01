import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'


function Signup() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post("https://movie-app-86dv.onrender.com/signup", {
          email,
          password,
        })
        .then(() => { 
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "success",
            title: "Signed in successfully"
          });
          setTimeout(() => {
            navigate('/'); 
        }, 2000);
        })
        .catch((e) => {
          alert("wrong details");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center">Sign Up</h1>
      <form
        onSubmit={submit}
        className="bg-light p-4 rounded shadow mx-auto"
        style={{ maxWidth: "400px", minHeight: "340px" }}
      >
        <div className="mb-4">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-5">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100" navigate='/'>
          Sign Up
        </button>

        <div className="mt-4 float-start">
          Already have an account?
          <Link className="ms-1" to="/login">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Signup;
