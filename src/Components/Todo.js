import React from "react";

const Todo = ({text, todo, setTodos, todos}) => {
    //Delete button Handler
    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id))
    }
    //Complete/uncomplete button Handler
    const completeHandler =() => {
        setTodos(todos.map(item => {
            if (item.id === todo.id){
                return{
                    ...item, completed: !item.completed
                };
            }
            return item;
        }))
    }
    //Todo main
    return(
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li> 
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="ban-btn">
                <i className="fas fa-ban"></i>
            </button>
        </div>
    );
};

export default Todo;