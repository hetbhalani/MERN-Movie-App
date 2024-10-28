import React, { useRef } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { useSearch } from "./SearchContext";
import axios from "axios";

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
      const response = await axios.get("http://localhost:5001/api/voice-to-text");
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
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <img src="/imgs/logo.jpg" style={{ width: "100px" }} alt="Logo" />
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active ms-2" aria-current="page" to="/" style={{ fontSize: "18px" }}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active ms-2" aria-current="page" to="/watchlist" style={{ fontSize: "18px" }}>
                Watchlist
              </Link>
            </li>
          </ul>
          <div className="flex-grow-1 text-center">
            <form className="d-flex" role="search" onSubmit={handleSubmit}>
              <input
                className="form-control me-1"
                type="search"
                placeholder="Search For Movies/Series"
                aria-label="Search"
                style={{ width: "700px" }}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button
                className="btn btn-outline-secondary ms-2 me-2"
                type="button"
                onClick={handleMicClick}
                aria-label="Voice Search"
              >
                <img src="/mic.png" alt="Mic" style={{ width: "20px", height: "20px" }} />
              </button>
              <button className="btn btn-outline-success" type="submit" aria-label="Search">
                Search
              </button>
            </form>
          </div>
          <div className="d-flex">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="btn btn-outline-primary me-3 ms-2 btn-md" to="/login" style={{ fontSize: "18px" }}>
                  LogIn
                </Link>
              </li>
              <li className="nav-item">
                <Link className="btn btn-primary btn-md" to="/signup" style={{ fontSize: "18px" }}>
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
