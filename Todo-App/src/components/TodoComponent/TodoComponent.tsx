import "./TodoComponent.css";

import {
  Todo,
  checkCompleted,
  deleteTodo,
} from "../../features/todo/todoSlice";
import { faCheck, faCircleMinus } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
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
    <article className={completed ? "item completed" : "item"}>
      <p className="todo__title">{title}</p>
      <div className="btn__wrapper">
        <FontAwesomeIcon
          icon={faCheck as IconProp}
          className={completed ? "todo__icon btn--completed" : "todo__icon"}
          onClick={onCheckCompleted}
        />
        <FontAwesomeIcon
          icon={faCircleMinus as IconProp}
          className="todo__icon"
          onClick={onTodoDelete}
        />
      </div>
    </article>
  );
};

export default TodoComponent;
