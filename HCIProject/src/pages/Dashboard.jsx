import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h2>Your Projects</h2>
      </header>

      <div className="projects-grid">
        <div className="placeholder-card">HCI Project</div>
        <div className="placeholder-card">Compiler Project</div>

        <Link to="/add-project" className="placeholder-card add-new">
          Create New Board
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
