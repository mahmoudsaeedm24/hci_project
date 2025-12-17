import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import ProjectTasks from "./pages/ProjectTasks";
import AddProject from "./pages/AddProject";
import AddTask from "./pages/AddTask";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      document.body.classList.add("light-mode");
    } else {
      setTheme("dark");
      document.body.classList.remove("light-mode");
    }
  };

  return (
    <BrowserRouter>
      <Navbar toggleTheme={toggleTheme} currentTheme={theme} />
      <main>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/project/:id/:name" element={<ProjectTasks />} />
          <Route path="/add-project" element={<AddProject />} />
          <Route path="/add-task" element={<AddTask />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
