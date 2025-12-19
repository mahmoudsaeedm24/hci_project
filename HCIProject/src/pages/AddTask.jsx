import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [projectId, setProjectId] = useState(""); // جديد: لتخزين المشروع المختار
  const [status, setStatus] = useState("To Do");
  const navigate = useNavigate();

  // قائمة المشاريع (بدل ما تكون هاردكود، ممكن تجيبها من API بعدين)
  const projects = [
    { id: 1, name: "HCI Project" },
    { id: 2, name: "React App" },
    { id: 3, name: "Portfolio Site" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      alert("Task title is required!");
      return;
    }

    if (!projectId) {
      alert("Please select a project!");
      return;
    }

    // هنا الداتا كلها بتتبعت معًا، بما فيها projectId
    const newTask = {
      title,
      description,
      projectId: Number(projectId), // مهم: تحويل لـ number
      status,
    };

    console.log("New Task Submitted:", newTask);

    // في التطبيق الكامل: هنا هتضيف المهمة للـ state العام أو ترسلها للـ backend

    // توجيه المستخدم لصفحة المهام الخاصة بالمشروع المختار
    const selectedProject = projects.find((p) => p.id === Number(projectId));
    const projectName = selectedProject?.name.replace(/\s+/g, "-") || "unknown"; // للـ URL

    navigate(`/project/${projectId}/${projectName}`);

    // اختياري: إعادة تعيين النموذج بعد الإضافة
    setTitle("");
    setDescription("");
    setProjectId("");
    setStatus("To Do");
  };

  return (
    <div className="add-form-container">
      <h2 className="form-header">Add New Task</h2>
      <form onSubmit={handleSubmit} className="add-form">

        

        <div className="form-group">
          <label htmlFor="task-title">Task Title <span className="required">*</span></label>
          <input
            type="text"
            id="task-title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter task title"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="task-description">Task Description</label>
          <textarea
            id="task-description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter task description (optional)"
            rows="4"
          />
        </div>

        <div className="form-group">
          <label htmlFor="status">Initial Status</label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
        </div>

        <div className="form-actions">
          <button type="button" onClick={() => navigate("/")} className="btn-cancel">
            Cancel
          </button>
          <button type="submit" className="btn-submit">
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTask;