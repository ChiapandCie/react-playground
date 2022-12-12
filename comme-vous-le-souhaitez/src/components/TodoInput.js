import React, { useEffect, useRef } from "react";

export default function TodoInput({
  handleChangeInput,
  title,
  handleChangeKeyDown,
}) {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <h1>To Do List</h1>
      <label>Quoi de prévu :</label>
      {"  "}
      <input
        ref={inputRef}
        type="text"
        value={title}
        name=""
        placeholder="Nouvelle tâche..."
        onChange={({ target: { value } }) => handleChangeInput(value)}
        onKeyDown={({ key }) => handleChangeKeyDown(key)}
      />
    </div>
  );
}
