import React from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";

function Dashboard({ projects }) {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h2>Your Projects</h2>
      </header>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}

        <Link to="/add-project" className="placeholder-card add-new">
          Create New Board
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;