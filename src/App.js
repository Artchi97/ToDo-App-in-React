import { useState, useEffect } from "react";

import InputSection from "./components/InputSection";
import Tasks from "./components/Tasks";
import EditTask from "./components/EditTask";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [editIndex, setEditIndex] = useState(null);
  const [editContent, setEditContent] = useState("");
  const [showEdit, setShowEdit] = useState(false);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function onAddTask(content) {
    setTasks((prevState) => [...prevState, content]);
  }

  function onEditTask(index) {
    setEditIndex(index);
    setEditContent(tasks[index]);
    setShowEdit(true);
  }

  function onSaveEditTask(newContent) {
    setTasks((prevTasks) =>
      prevTasks.map((task, index) => (index === editIndex ? newContent : task))
    );

    setEditIndex(null);
    setEditContent("");
    setShowEdit(false);
  }

  function onCancelEdit() {
    setEditIndex(null);
    setEditContent("");
    setShowEdit(false);
  }

  function handleDeleteTask(indexToDelete) {
    setTasks((prevTasks) =>
      prevTasks.filter((_, index) => index !== indexToDelete)
    );
  }

  return (
    <div className="App">
      {editIndex !== null && (
        <EditTask
          editTitle="Task edition"
          currentContent={editContent}
          onSaveEdit={onSaveEditTask}
          onCancelEdit={onCancelEdit}
          showEdit={showEdit}
        />
      )}
      <InputSection title="ToDo List App" onAddTask={onAddTask} />
      <ul id="tasks-list">
        {tasks.length === 0 ? (
          <p className="no-tasks">Brak zadań na liście!</p>
        ) : (
          tasks.map((task, index) => (
            <Tasks
              key={Math.random()}
              task={task}
              onEditTask={() => onEditTask(index)}
              onDeleteTask={() => handleDeleteTask(index)}
            />
          ))
        )}
      </ul>
    </div>
  );
}

export default App;
