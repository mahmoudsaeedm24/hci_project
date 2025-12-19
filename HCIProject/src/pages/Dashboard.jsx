import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";

function Dashboard() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/projects");
        if (!res.ok) throw new Error("Failed to fetch projects");
        const data = await res.json();
        setProjects(data);
      } catch (err) {
        console.error(err);
        setProjects([]); // لو فشل، خلي array فاضية
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h2>Your Projects</h2>
      </header>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}

        <Link to="/add-project" className="placeholder-card add-new">
          Create New Board
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
