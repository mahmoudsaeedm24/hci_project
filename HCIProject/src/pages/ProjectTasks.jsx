import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { DragDropContext } from "@hello-pangea/dnd";
import Column from "../components/Column";

function ProjectTasks() {
  const { id, name } = useParams();
  const projectName = name ? decodeURIComponent(name) : "Project";

  const [columns, setColumns] = useState({
    todo: [
      { id: 1, title: "task1", description: "Create wireframes for the new app", status: "To Do" },
      { id: 2, title: "task2", description: "Initialize GitHub repository", status: "To Do" },
    ],
    inProgress: [
      { id: 3, title: "task3", description: "Develop login page", status: "In Progress" },
    ],
    done: [
      { id: 4, title: "task4", description: "Set up project repository", status: "Done" },
    ],
  });

  // Move task
const moveTask = (taskId, fromColumn, toColumn) => {
  if (!toColumn) return; // 🚫 Exit if there's no previous/next column

  setColumns(prev => {
    const task = prev[fromColumn].find(t => t.id === taskId);
    if (!task) return prev;

    const updatedTask = {
      ...task,
      status:
        toColumn === "todo"
          ? "To Do"
          : toColumn === "inProgress"
          ? "In Progress"
          : "Done",
    };

    return {
      ...prev,
      [fromColumn]: prev[fromColumn].filter(t => t.id !== taskId),
      [toColumn]: [...prev[toColumn], updatedTask],
    };
  });
};

  // Delete task
  const deleteTask = (taskId, fromColumn) => {
    setColumns(prev => ({
      ...prev,
      [fromColumn]: prev[fromColumn].filter(t => t.id !== taskId),
    }));
  };

  // Handle drag & drop
  const handleDragEnd = result => {
    const { source, destination } = result;
    if (!destination) return;

    const sourceColumn = source.droppableId;
    const destColumn = destination.droppableId;

    if (sourceColumn === destColumn && source.index === destination.index) return;

    setColumns(prev => {
      const sourceTasks = Array.from(prev[sourceColumn]);
      const [movedTask] = sourceTasks.splice(source.index, 1);

      if (sourceColumn === destColumn) {
        // Reorder within same column
        sourceTasks.splice(destination.index, 0, movedTask);
        return { ...prev, [sourceColumn]: sourceTasks };
      } else {
        // Move to another column
        const destTasks = Array.from(prev[destColumn]);
        movedTask.status =
          destColumn === "todo"
            ? "To Do"
            : destColumn === "inProgress"
            ? "In Progress"
            : "Done";
        destTasks.splice(destination.index, 0, movedTask);

        return {
          ...prev,
          [sourceColumn]: sourceTasks,
          [destColumn]: destTasks,
        };
      }
    });
  };
  return (
    <>
<div className="project-header">
        <h1 className="project-title">{projectName}</h1>
        <Link to="/add-task" className="add-task-button">
          + Add Task
        </Link>
      </div>

      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="board-container">
          <Column
            title="To Do"
            tasks={columns.todo}
            columnKey="todo"
            moveTask={moveTask}
            deleteTask={deleteTask}
          />
          <Column
            title="In Progress"
            tasks={columns.inProgress}
            columnKey="inProgress"
            moveTask={moveTask}
            deleteTask={deleteTask}
          />
          <Column
            title="Done"
            tasks={columns.done}
            columnKey="done"
            moveTask={moveTask}
            deleteTask={deleteTask}
          />
        </div>
      </DragDropContext>
    </>
  );
}

export default ProjectTasks;
