import React, { useState } from "react";
import "./app.css";

const App = () => {
  const [savedValue, setSavedValue] = useState("");

  const [todos, setTodos] = useState([]);

  const DeleteTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => {
        return todo.id !== id;
      });
    });
  };

  const SaveValue = (e) => {
    setSavedValue(e.target.value);
  };

  const CreateTodo = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { myTodo: savedValue, status: false, id: Math.random() },
    ]);
    setSavedValue("");
  };

  const CompletedOrNot = (e) => {
    const todoText = e.target.parentNode.firstChild.innerText;
    todos.map((todo) => {
      if (todo.myTodo === todoText) {
        todo.status = !todo.status; // {myTodo: 1, status: true}
      }
    });
    setTodos([...todos]);
  };

  return (
    <div className="todo-app">
      <form>
        <input onChange={SaveValue} type="text" value={savedValue} />
        <button onClick={CreateTodo}>Create Todo</button>
      </form>
      {todos.map((todo) => {
        return (
          <div className="todo-container" key={todo.id}>
            <h2 className={todo.status ? "completed" : ""}>{todo.myTodo}</h2>
            <button onClick={CompletedOrNot}>&#10003;</button>
            <button
              onClick={() => {
                DeleteTodo(todo.id);
              }}
            >
              X
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default App;
