import { useState } from "react";
import "./Tasks.css";

export default function Tasks({ task, onEditTask, onDeleteTask }) {
  const [confirmed, setConfirmed] = useState(false);

  function handleConfirmTask() {
    setConfirmed((prev) => !prev);
  }

  return (
    <>
      <li className="task-item">
        <p className={confirmed ? "task-content task-done" : "task-content"}>
          {task}
        </p>
        <div className="icons">
          <i className="fa-solid fa-check" onClick={handleConfirmTask}></i>
          <span className="edit-icon" onClick={onEditTask}>
            EDIT
          </span>
          <i className="fa-solid fa-trash" onClick={onDeleteTask}></i>
        </div>
      </li>
    </>
  );
}
