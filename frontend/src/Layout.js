import React, { useRef } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { useSearch } from "./SearchContext";
import axios from "axios";
import "./Layout.css";

function Layout() {
  const { searchTerm, setSearchTerm } = useSearch();
  const navigate = useNavigate();
  const audioRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/card");
  };

  const handleMicClick = async () => {
    try {
      audioRef.current.play();
      const response = await axios.get(
        "http://localhost:5001/api/voice-to-text"
      );
      if (response.data.text) {
        setSearchTerm(response.data.text);
        console.log("Updated searchTerm:", response.data.text);
      }
    } catch (error) {
      console.error("Error capturing voice input:", error);
    }
  };

  return (
    <div>
      <audio ref={audioRef} src="mic_sound.mp3" preload="auto" />
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src="/imgs/logo.jpg" style={{ width: "100px" }} alt="Logo" />
          </Link>
          <div
            className="collapse navbar-collapse "
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                  style={{ fontSize: "18px" }}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/watchlist"
                  style={{ fontSize: "18px" }}
                >
                  Watchlist
                </Link>
              </li>
            </ul>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="d-flex flex-grow-1 justify-content-center align-items-center">
            <form
              style={{ width: "900px" }}
              className="d-flex flex-grow-1 mx-2"
              role="search"
              onSubmit={handleSubmit}
            >
              <input
                className="form-control me-1"
                type="search"
                placeholder="Search For Movies/Series"
                aria-label="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button
                className="btn btn-outline-secondary ms-1 me-2 btn-sm"
                type="button"
                onClick={handleMicClick}
                aria-label="Voice Search"
              >
                <img
                  src="/mic.png"
                  alt="Mic"
                  style={{ width: "20px", height: "20px" }}
                />
              </button>
              <button
                className="btn btn-outline-success btn-sm"
                type="submit"
                aria-label="Search"
              >
                Search
              </button>
            </form>

            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNav"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    className="btn btn-outline-primary me-2 btn-sm"
                    to="/login"
                    style={{ fontSize: "18px" }}
                  >
                    LogIn
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="btn btn-primary btn-sm"
                    to="/signup"
                    style={{ fontSize: "18px" }}
                  >
                    SignUp
                  </Link>
                </li>
              </ul>
            </div>
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
