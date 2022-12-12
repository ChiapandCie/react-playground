import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";

function App() {
  //DEFINITION DES CONSTANTES ETATS   ////////////////////////////////////
  const [newToDo, setNewToDo] = useState({
    id: 0,
    title: "",
    editTitle: "",
    isCompleted: false,
    isEditing: false,
  });

  const [allTodo, setAllTodo] = useState([]);
  const [filterTodo, setFilterTodo] = useState([]);
  const [filter, setFilter] = useState("all");

  //DEFINITION DES HOOKEFFECT   //////////////////////////////////////////
  useEffect(() => {
    //if (filter === "all")  setFilterTodo(allTodo);
    switch (filter) {
      case "all":
        setFilterTodo(allTodo);
        break;
      case "completed":
        setFilterTodo(() =>
          allTodo.filter((item) => item.isCompleted === true)
        );
        break;
      case "inWork":
        setFilterTodo(() =>
          allTodo.filter((item) => item.isCompleted === false)
        );
        break;
      default:
        break;
    }
  }, [allTodo, filter]);

  //DEFINITONS DES FONCTIONS   ///////////////////////////////////////////
  function handleChangeInput(value) {
    setNewToDo((prevState) => ({
      ...prevState,
      title: value,
      editTitle: value,
    }));
  }

  function handleChangeKeyDown(key) {
    if (newToDo.title === "") return;
    if (key === "Enter") {
      setAllTodo((prevState) => [...prevState, newToDo]);
      setNewToDo((prevState) => ({
        ...prevState,
        title: "",
        editTitle: "",
        id: prevState.id + 1,
      }));
    }
    if (key === "Escape") handleChangeInput("");
  }

  function handleChangeIsCompleted(itemId) {
    setAllTodo((prevSate) =>
      prevSate.map((item) => {
        if (item.id === itemId)
          return { ...item, isCompleted: !item.isCompleted };
        return item;
      })
    );
  }

  function handleDeleteItem(itemId) {
    setAllTodo((prevSate) => prevSate.filter((item) => item.id !== itemId));
  }

  function handleChangeEdit(id) {
    setAllTodo((prevSate) =>
      prevSate.map((item) => {
        if (item.id === id) return { ...item, isEditing: !item.isEditing };
        return item;
      })
    );
  }

  function handleChangeInputEdit(id, value) {
    setAllTodo((prevSate) =>
      prevSate.map((item) => {
        if (item.id === id) return { ...item, editTitle: value };
        return item;
      })
    );
  }
  function handleChangeKeyDownEdit(id, key) {
    if (key === "Enter") {
      setAllTodo((prevSate) =>
        prevSate.map((item) => {
          if (item.id === id) return { ...item, title: item.editTitle };
          return item;
        })
      );
      handleChangeEdit(id);
    }

    if (key === "Escape") {
      setAllTodo((prevSate) =>
        prevSate.map((item) => {
          if (item.id === id) return { ...item, editTitle: item.title };
          return item;
        })
      );
      handleChangeEdit(id);
    }
  }

  function DeleteAllCompleted() {
    setAllTodo((prevSate) =>
      prevSate.filter((item) => item.isCompleted === false)
    );
  }
  return (
    <div className="App">
      <TodoInput
        handleChangeKeyDown={handleChangeKeyDown}
        handleChangeInput={handleChangeInput}
        title={newToDo.title}
      />
      <TodoFilter handleChangeFilterTodo={setFilter} />
      <TodoList
        items={filterTodo}
        handleChangeIsCompleted={handleChangeIsCompleted}
        handleDeleteItem={handleDeleteItem}
        handleChangeEdit={handleChangeEdit}
        handleChangeInputEdit={handleChangeInputEdit}
        handleChangeKeyDownEdit={handleChangeKeyDownEdit}
        DeleteAllCompleted={DeleteAllCompleted}
      />
    </div>
  );
}

export default App;
