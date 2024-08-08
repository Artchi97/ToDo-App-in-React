import { useRef } from "react";

import "./InputSection.css";

export default function InputSection({ title, onAddTask }) {
  const taskRef = useRef();

  const handleAddTask = () => {
    const taskValue = taskRef.current.value.trim();
    if (taskValue) {
      onAddTask(taskValue);
      taskRef.current.value = "";
    }
  };

  return (
    <>
      <div id="top-section">
        <h2 className="title">{title}</h2>
        <div className="input-button-section">
          <input
            ref={taskRef}
            type="text"
            placeholder="Wpisz zadanie..."
          ></input>
          <button className="add-task-button" onClick={handleAddTask}>
            ADD TASK
          </button>
        </div>
      </div>
    </>
  );
}
