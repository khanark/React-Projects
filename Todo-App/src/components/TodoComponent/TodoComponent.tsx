import "./TodoComponent.css";

import {
  Todo,
  checkCompleted,
  deleteTodo,
} from "../../features/todo/todoSlice";

import { useAppDispatch } from "../../app/hooks";

const TodoComponent = ({ id, title, completed }: Todo) => {
  const dispatch = useAppDispatch();

  const onTodoDelete = () => {
    dispatch(deleteTodo(id));
  };

  const onCheckCompleted = () => {
    console.log("button is pressed");
    dispatch(checkCompleted(id));
  };

  return (
    <li className="todo-item scale-in-center">
      <p className="todo-item--text">{title}</p>
      <div className="todo-right-box">
        <button className="todo-right--btn" onClick={onCheckCompleted}>
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
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </button>
        <button className="todo-right--btn" onClick={onTodoDelete}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="todo-icon"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
          </svg>
        </button>
      </div>
    </li>
  );
};

export default TodoComponent;
