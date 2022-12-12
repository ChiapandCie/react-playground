import React from "react";

export default function TodoFilter({ handleChangeFilterTodo }) {
  return (
    <div className="filterBar">
      <button onClick={() => handleChangeFilterTodo("all")}>ALL</button>
      <button onClick={() => handleChangeFilterTodo("completed")}>
        COMPLETED
      </button>
      <button onClick={() => handleChangeFilterTodo("inWork")}>IN WORK</button>
    </div>
  );
}
