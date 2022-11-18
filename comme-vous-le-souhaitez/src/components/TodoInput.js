import React from "react";

export default function TodoInput({handleChangeInput,title,handleSubmitInput}) {
  return( <div>
            <h1>To Do List</h1>
            <label>Quoi de prévu  :</label>{"  "}
            <input type="text" 
                    value={title} 
                    name="" 
                    placeholder="Nouvelle tâche..."
                    onChange={handleChangeInput} 
                    onKeyDown={handleSubmitInput}/>
          </div>
        );
}
