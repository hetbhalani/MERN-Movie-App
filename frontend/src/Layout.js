import React from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { useSearch } from "./SearchContext";

function Layout() {
  const { searchTerm, setSearchTerm } = useSearch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/card");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          
          <img src="/imgs/logo.jpg" style={{ width: "100px" }} alt="Logo" />
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className="nav-link active ms-2"
                aria-current="page"
                to="/"
                style={{ fontSize: "18px" }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active ms-2"
                aria-current="page"
                to="/watchlist"
                style={{ fontSize: "18px" }}
              >
                Watchlist
              </Link>
            </li>
          </ul>
          <div className="flex-grow-1 text-center">
            <form
              className="d-flex justify-content-center"
              role="search"
              onSubmit={handleSubmit}
            >
              <input
                className="form-control me-1"
                type="search"
                placeholder="Search For Movies/Series"
                aria-label="Search"
                style={{ width: "700px" }}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
          <div className="d-flex">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="btn btn-outline-primary me-3 ms-2 btn-md"
                  to="/login"
                  style={{ fontSize: "18px" }}
                >
                  LogIn
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="btn btn-primary btn-md"
                  to="/signup"
                  style={{ fontSize: "18px" }}
                >
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
    </div>
  );
}

export default Layout;
