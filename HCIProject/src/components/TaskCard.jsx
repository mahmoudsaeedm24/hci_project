import { FaArrowLeft, FaArrowRight, FaTrash } from "react-icons/fa";

export default function TaskCard({ task , onMoveNext, onMovePrev, onDelete}) {

  const statusClass = 
    task.status === "Done" ? "status-done" :
    task.status === "In Progress" ? "status-inprogress" :
    "status-todo";

    return (
    <div className="task-card" >
      <div className="task-header">
        <h4 >{task.title}</h4>
        <p className={`task-status ${statusClass}`}>{task.status}</p>
      </div>
      <div className="task-body">
        <p >{task.description}</p>
        <div className="move-buttons">
          <button onClick={onMovePrev} className="iconButtonStyle"><FaArrowLeft/></button>
          <button onClick={onMoveNext} className="iconButtonStyle"><FaArrowRight/></button>
        </div>
      </div>

      {/* Delete button below, centered */}
      <div className="delete-button-container">
        <button onClick={onDelete} className="iconButtonStyle"><FaTrash/></button>
      </div>
        </div>

    );
}
