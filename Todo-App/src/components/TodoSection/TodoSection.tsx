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
    <section className="todo-section">
      <div className="todo">
        <h2 className="todo-title">Add your new task!</h2>
        {!todos.length && (
          <p className="no-tasks">No tasks yet, hurry up & add one!</p>
        )}
        {todos.length > 0 && (
          <ul className="todo-list">
            {todos.map((todo: any, i: number) => (
              <TodoComponent key={i} {...todo} />
            ))}
          </ul>
        )}
        <form className="todo-form" onSubmit={onTodoSubmit}>
          <input
            type="text"
            value={todo.value}
            onChange={onTodoChange}
            className="todo-text"
            placeholder="New task..."
          />
          <button type="submit" className="btn-add">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="todo-icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </form>
        {todo.error && <p className="todo-error">{todo.error}</p>}
        <button className="btn-clear" onClick={onTodoClear}>
          Clear Tasks
        </button>
      </div>
    </section>
  );
};

export default TodoSection;
