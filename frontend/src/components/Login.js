import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:3690/login", {
          email,
          password,
        })
        .then((res) => {
          if (res.data == "exist") {
            history("/");
          } else if (res.data == "notexist") {
            alert("User have not sign up");
            history("/");
          }
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
      <h1 className="text-center">Login</h1>
      <form
        onSubmit={submit}
        className="bg-light p-4 rounded shadow mx-auto"
        style={{ maxWidth: "400px", minHeight: "340px" }}
      >
        <div className="mb-4  ">
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
        <button type="submit" className="btn btn-primary w-100">
          Log In
        </button>
        <div className="mt-4 float-start">
          New Here?
          <Link className="ms-1" to="/signup">
            Signup
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
