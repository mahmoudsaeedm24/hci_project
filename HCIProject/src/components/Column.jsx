import TaskCard from "./TaskCard";
import { Droppable, Draggable } from "@hello-pangea/dnd";

export default function Column({ title, tasks,columnKey, moveTask, deleteTask  }) {

    return (
<Droppable droppableId={columnKey}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className="board-column"
        >
          <h2 className="column-header">{title}</h2>

          {tasks.map((task, index) => (
            <Draggable key={task._id} draggableId={task._id.toString()} index={index}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  <TaskCard
                    task={task}
                    onMoveNext={() =>
                      moveTask(task._id, columnKey, columnKey === "todo"
                        ? "inProgress"
                        : columnKey === "inProgress"
                        ? "done"
                        : null)
                    }
                    onMovePrev={() =>
                      moveTask(task._id, columnKey, columnKey === "done"
                        ? "inProgress"
                        : columnKey === "inProgress"
                        ? "todo"
                        : null)
                    }
                    onDelete={() => deleteTask(task._id, columnKey)}
                  />
                </div>
              )}
            </Draggable>
          ))}

          {provided.placeholder}
        </div>
      )}
    </Droppable>
    );
}