import React from "react";

const Form = ({inputText, setInputText, todos, setTodos, setStatus, status}) => {

    //Input Handler
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };
    //Submit Handler
    const submitTodoHandler = (e) => {
            e.preventDefault();
            setTodos([...todos,{text: inputText, completed: false, id: Math.random()*1000}]);
            setInputText("");
    
    };
    //Status Handler
    const statusHandler = (e) => {
        setStatus(e.target.value);
    }
    //Main
    return(
        <form>
            <div className="select">
            <select onChange={statusHandler} name="todos" className="filter-todo">
                <option value="all">All todos</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
            </div>
            <input value ={inputText} onChange = {inputTextHandler}type="text" className ="todo-input" />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>

        </form>
    );
}
export default Form;