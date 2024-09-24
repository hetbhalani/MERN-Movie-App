import React from "react";
import { Outlet, Link } from "react-router-dom";



function Layout() {

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <img src="/imgs/logo.jpg"  style={{width: '100px'}}/>

          
          <div className="flex-grow-1 text-center">
            <form className="d-flex justify-content-center" role="search">
              <input
                className="form-control me-1"
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{ width: "700px" }} 
              />
              <button className="btn btn-outline-success" type="submit" >
                Search
              </button>
            </form>
          </div>

          <div className="d-flex">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/" style={{fontSize: "18px"}}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/login" style={{fontSize: "18px"}}>
                  LogIn
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/signup" style={{fontSize: "18px"}}>
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
