//Imports
import './App.css';
import React, {useState, useEffect } from 'react';  
import Forms from './Components/Forms';
import List from './Components/List';
import Todo from './Components/Todo';

function App() {
  //States
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filtered, setFiltered] = useState([]);
  //Effects
  useEffect (()=> {
    getLocalData();
  }, []);
  useEffect(()=> {
    saveLocalData();
    filterHandler();
  }, [todos, status]);


  //Filter
  const filterHandler = () => {
    switch(status){
      case "completed": 
        setFiltered(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted": 
        setFiltered(todos.filter((todo) => todo.completed === false));
        break;
      default:
         setFiltered(todos);
        break;
    }
  }

  //save doesnot work
  const saveLocalData = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const getLocalData = () => {
    if(localStorage.getItem("todos") === null){
      localStorage.setItem("todos", JSON.stringify([]));
    }
    else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  //main
  return (
    <div className="App">
      <header>
        <h1>React todo-app</h1>
      </header>
      <Forms 
      inputText = {inputText} 
      todos={todos} 
      setTodos = {setTodos} 
      setInputText={setInputText} 
      setStatus = {setStatus}
      />
      <List filtered ={filtered} setTodos={setTodos} todos ={todos}/>
    </div>
  );
}

export default App;
