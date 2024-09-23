import React from "react";
import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <a className="navbar-brand" href="#">
            Navbar
          </a>

          
          <div className="flex-grow-1 text-center">
            <form className="d-flex justify-content-center" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{ width: "700px" }} 
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>

          <div className="d-flex">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active fs-5" aria-current="page" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active fs-5" to="/login">
                  LogIn
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active fs-5" to="/signup">
                  SignUp
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div>
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
