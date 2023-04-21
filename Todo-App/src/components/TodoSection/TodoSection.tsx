import "./TodoSection.css";

import React, { useState } from "react";
import { addTodo, clearTodos } from "../../features/todo/todoSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

import TodoComponent from "../TodoComponent/TodoComponent";
import { v4 as uuidV4 } from "uuid";

const TodoSection = () => {
  const [todo, setTodo] = useState({
    value: "",
    error: "",
  });
  const [error, setError] = useState("");
  const todos = useAppSelector((state) => state.todos);
  const dispatch = useAppDispatch();

  const onTodoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo({ ...todo, value: e.target.value });
  };

  const onTodoSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // validate todo
    if (!todo.value.length) {
      return setTodo({ ...todo, error: "Field is required" });
    } else if (todo.value.length >= 40) {
      return setTodo({
        ...todo,
        error: "Field cannot exceed more than 40 characters",
      });
    }
    dispatch(
      addTodo({
        id: uuidV4(),
        title: todo.value,
        completed: false,
      })
    );

    //reset todo
    setTodo({ value: "", error: "" });
  };

  const onTodoClear = () => dispatch(clearTodos());

  return (
    <section className="todo__section" id="todo-section">
      <h3> Add your new task! </h3>
      <form className="form" onSubmit={onTodoSubmit}>
        <div className="input-wrapper">
          <input
            type="text"
            name="todo"
            placeholder="Add Todo..."
            value={todo.value}
            onChange={onTodoChange}
          />
          <button className="add-btn">Add</button>
        </div>
        {error && <p className="todo-error">{error}</p>}
      </form>
      <ul className="todos">
        {todos.map((todo) => (
          <TodoComponent key={todo.id} {...todo} />
        ))}
      </ul>
      {!todos.length && (
        <p className="text--primary">
          There are no tasks yet. Be the first and add one!
        </p>
      )}
      {todos.length > 0 && (
        <button type="button" className="clear-btn" onClick={onTodoClear}>
          Clear
        </button>
      )}
    </section>
  );
};

export default TodoSection;
