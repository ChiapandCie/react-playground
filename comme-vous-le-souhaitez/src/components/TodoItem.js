import React, { useState, useEffect } from "react";
export default function TodoItem({
  id,
  isCompleted,
  title,
  editTitle,
  handleChangeIsCompleted,
  handleDeleteItem,
  handleChangeEdit,
  isEditing,
  handleChangeInputEdit,
  handleChangeKeyDownEdit,
}) {
  return (
    <tr>
      <td>
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={() => handleChangeIsCompleted(id)}
        />
      </td>

      {isEditing ? (
        <td>
          <input
            type="text"
            value={editTitle}
            onChange={({ target: { value } }) =>
              handleChangeInputEdit(id, value)
            }
            onKeyDown={({ key }) => handleChangeKeyDownEdit(id, key)}
            autoFocus
          />
        </td>
      ) : (
        <td
          className={isCompleted ? "isCompleted" : ""}
          onDoubleClick={() => handleChangeEdit(id)}
        >
          {title}
        </td>
      )}

      <td>
        <button onClick={() => handleDeleteItem(id)}>Delet</button>
      </td>
    </tr>
  );
}
