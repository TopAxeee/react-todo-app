import React from "react";
import Todo from './Todo';
//List view
const List = ({todos, setTodos, filtered}) => {
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {filtered.map((todo) =>(
                    <Todo setTodos={setTodos} todos ={todos} todo = {todo} key={todo.id} text ={todo.text}/>
                ))}
            </ul>
        </div>
    );
}
export default List;