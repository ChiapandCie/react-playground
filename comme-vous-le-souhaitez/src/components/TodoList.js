import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({
  items,
  handleChangeIsCompleted,
  handleDeleteItem,
  handleChangeEdit,
  handleChangeInputEdit,
  handleChangeKeyDownEdit,
  DeleteAllCompleted,
}) {
  return (
    <table>
      <thead>
        <tr>
          <th colSpan="3">Pense bête pour les bètes</th>
          <th colSpan="1">
            {items.find((item) => item.isCompleted === true) && (
              <button onClick={DeleteAllCompleted}>Delete OK</button>
            )}{" "}
          </th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <TodoItem
            key={item.id}
            handleChangeIsCompleted={handleChangeIsCompleted}
            handleDeleteItem={handleDeleteItem}
            handleChangeEdit={handleChangeEdit}
            handleChangeInputEdit={handleChangeInputEdit}
            handleChangeKeyDownEdit={handleChangeKeyDownEdit}
            {...item}
          />
        ))}
      </tbody>
    </table>
  );
}
