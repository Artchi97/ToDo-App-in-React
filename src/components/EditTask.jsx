import { useState } from "react";
import "./EditTask.css";

export default function EditTask({
  editTitle,
  currentContent,
  onSaveEdit,
  onCancelEdit,
  showEdit,
}) {
  const [inputValue, setInputValue] = useState(currentContent);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSave = () => {
    if (inputValue.trim()) {
      onSaveEdit(inputValue.trim());
    }
  };

  return (
    <>
      <div
        id="edit-task-background"
        className={showEdit ? "visible" : "hidden"}
      >
        <div id="edit-task-window">
          <h2 className="edit-task-title">{editTitle}</h2>
          <input
            className="edit-task-input"
            type="text"
            onChange={handleInputChange}
            value={inputValue}
          />
          <div className="edit-btns">
            <button className="edit task-btn" onClick={handleSave}>
              CONFIRM
            </button>
            <button className="cancel task-btn" onClick={onCancelEdit}>
              CANCEL
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
