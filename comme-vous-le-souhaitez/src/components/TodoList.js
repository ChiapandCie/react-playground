import React from "react";
import {useState} from 'react';

export default function TodoList({listItems,handleChangeChecked}) {
  
  const toDoList = listItems.map((item) => (
    <tr>
      <td>{item.title}</td>
      <td><input onClick={handleChangeChecked} 
                 type="checkbox" 
                 value={item.id} 
                 name={item.title} 
                 checked={item.isCompleted ? "true":""} /></td>
      <td><button>Edit</button></td>
      <td><button>Delet</button></td>
    </tr>
  ))

  return(
    <table>
      <thead>
          <tr>
              <th colspan="4">Pense bête pour les bètes</th>
          </tr>
      </thead>
      <tbody>
          {toDoList}
      </tbody>
    </table>
  );
}
