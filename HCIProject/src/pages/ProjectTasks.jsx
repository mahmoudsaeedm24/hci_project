import React from "react";
import { useParams } from "react-router-dom";

function ProjectTasks() {
  const { id } = useParams();

  return (
    <div className="board-container">
      <div className="board-column">
        <div className="column-header">To Do</div>
        <div className="column-content">
          <div className="task-card">Design System</div>
          <div className="task-card">API Integration</div>
          <div className="task-card">Fix Navigation</div>
        </div>
      </div>

      <div className="board-column">
        <div className="column-header">In Progress</div>
        <div className="column-content">
          <div className="task-card">Database Schema</div>
        </div>
      </div>

      <div className="board-column">
        <div className="column-header">Done</div>
        <div className="column-content">
          <div className="task-card">Project Setup</div>
        </div>
      </div>

      <button
        style={{
          minWidth: "280px",
          height: "fit-content",
          background: "rgba(255,255,255,0.2)",
          color: "white",
          border: "none",
          padding: "10px",
          borderRadius: "8px",
          textAlign: "left",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        + Add another list
      </button>
    </div>
  );
}

export default ProjectTasks;
