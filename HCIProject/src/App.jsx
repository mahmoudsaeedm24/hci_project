import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import ProjectTasks from "./pages/ProjectTasks";
import AddProject from "./pages/AddProject";
import AddTask from "./pages/AddTask";
import "./App.css";
import { AddTaskTest } from "./test/TestStateManage";
// import { createTask } from "./models/task_model";

function App() {
  const [theme, setTheme] = useState("dark");

  // Shared state for projects and tasks
  const [projects, setProjects] = useState([
    { id: 1, name: "HCI Project", description: "Human Computer Interaction final project" },
    { id: 2, name: "React App", description: "Building a task manager" },
    { id: 3, name: "Portfolio Site", description: "Personal website showcase" },
  ]);

  const [tasks, setTasks] = useState([]); // All tasks across projects

  // Sync theme with body classes on mount and when theme changes
  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  // createTask({ projectId: "id", title: "title" });


  return (
    <BrowserRouter>
      <Navbar toggleTheme={toggleTheme} currentTheme={theme} />
      <main>
        <Routes>
          <Route path="/" element={<Dashboard projects={projects} />} />
          <Route
            path="/project/:id/:name"
            element={<ProjectTasks projects={projects} tasks={tasks} setTasks={setTasks} />}
          />
          <Route
            path="/add-project"
            element={<AddProject projects={projects} setProjects={setProjects} />}
          />
          <Route
            path="/add-task"
            element={<AddTask projects={projects} tasks={tasks} setTasks={setTasks} />}
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;