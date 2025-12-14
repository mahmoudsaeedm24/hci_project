import React from "react";
import { Link } from "react-router-dom";

function Navbar({ toggleTheme, currentTheme }) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <Link to="/" className="logo">
            📊 TaskMaster
          </Link>
          <Link to="/" className="nav-link">
            Projects
          </Link>
        </div>

        <div className="navbar-center">
          <input
            type="text"
            placeholder="Search tasks..."
            className="search-input"
          />
        </div>

        <div className="navbar-right">
          <button
            onClick={toggleTheme}
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              fontSize: "1.2rem",
              marginRight: "10px",
              padding: "5px",
              borderRadius: "50%",
              transition: "transform 0.2s",
            }}
          >
            {currentTheme === "dark" ? "☀️" : "🌙"}
          </button>

          <Link to="/add-project" className="create-btn">
            + Create
          </Link>
          <div className="user-avatar">AM</div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
