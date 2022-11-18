import logo from "./logo.svg";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import {useState} from 'react';
import {useEffect} from 'react';

function App() {
  const [newToDo, setNewToDo] = useState({
    id: 0,
    title: '',
    isCompleted : true,
    isEditing: false
  });
  const [toDoList, setToDoList] = useState([])

  useEffect(() => {
    setNewToDo((prevState) => ({...prevState,title:'',id:prevState.id+1}));
  }, [toDoList])
  
  function handleChangeInput(e) {
    setNewToDo((prevState) => ({...prevState,title:e.target.value}));
  }
  function handleSubmitInput(e){
    if (e.key === "Enter") setToDoList ( (prevState) => (prevState.concat(newToDo)));
  }

  function handleChangeChecked({target:{value}}) {
    
      const item =toDoList.find(({id}) =>id=== +value);
      item.isCompleted = !item.isCompleted;
      
  }

  return (
    <div className="App">
      
      <TodoInput handleSubmitInput={handleSubmitInput} 
                 handleChangeInput={handleChangeInput} 
                 title={newToDo.title}/>

      <TodoList listItems={toDoList}
                handleChangeChecked={handleChangeChecked}
                //handleChangeEditButton={handleChangeEditButton}
                //handleChangeDeleteButton={handleChangeDeleteButton}
                />
    </div>
  );
}

export default App;
