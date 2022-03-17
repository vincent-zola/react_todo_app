import React, { useState } from "react";
import "./app.css";

const App = () => {
  const [savedValue, setSavedValue] = useState("");

  const [todos, setTodos] = useState([]);

  const DeleteTodo = (e) => {
    const listElement = e.target.parentNode;
    listElement.remove();
  };

  const SaveValue = (e) => {
    setSavedValue(e.target.value);
  };

  const CreateTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, { myTodo: savedValue, status: false }]);
    setSavedValue("");
  };

  const CompletedOrNot = (e) => {
    const todoText = e.target.parentNode.firstChild.innerText;
    todos.map((todo) => {
      if (todo.myTodo === todoText) {
        todo.status = !todo.status; // {myTodo: 1, status: true}
      }
    });
    console.log(todos)
    setTodos([...todos]);
  };

  return (
    <div className="todo-app">
      <form>
        <input onChange={SaveValue} type="text" value={savedValue} />
        <button onClick={CreateTodo}>Create Todo</button>
      </form>
      {todos.map((todo, index) => {
        return (
          <div className="todo-container" key={index}>
            <h2 className={todo.status ? "completed" : ""}>{todo.myTodo}</h2>
            <button onClick={CompletedOrNot}>&#10003;</button>
            <button onClick={DeleteTodo}>X</button>
          </div>
        );
      })}
    </div>
  );
};

export default App;
