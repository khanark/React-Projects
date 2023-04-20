import "./TodoSection.css";

import React, { useState } from "react";
import { addTodo, clearTodos } from "../../features/todo/todoSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

import TodoComponent from "../TodoComponent/TodoComponent";
import { v4 as uuidV4 } from "uuid";

const TodoSection = () => {
  const [todo, setTodo] = useState("");
  const todos = useAppSelector((state) => state.todos);
  const dispatch = useAppDispatch();

  const onTodoChange = (e: any) => {
    setTodo(e.target.value);
  };

  const onTodoSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todo === "") return;
    dispatch(
      addTodo({
        id: uuidV4(),
        title: todo,
        completed: false,
      })
    );
    setTodo("");
  };

  const onTodoClear = () => dispatch(clearTodos());

  return (
    <section className="todo__section" id="todo-section">
      <h3> Add your new task! </h3>
      <form className="form" onSubmit={onTodoSubmit}>
        <input
          type="text"
          name="todo"
          placeholder="Add Todo..."
          value={todo}
          onChange={onTodoChange}
        />
        <button className="add-btn">Add</button>
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
