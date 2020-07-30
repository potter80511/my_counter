import React from 'react';
import { TodoItem } from '../domain/models/TodoList';
import '@styles/features/todo_list/TodoList.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

type TodoItemProps = TodoItem & {
  position: number;
  onDelete: (id: number) => void;
};

const Todo = (props: TodoItemProps) => {
  const { id, text, position, onDelete } = props;
  return (
    <div className="item">
      <span>
        {position}. {text}
        {id}
      </span>
      <button onClick={() => onDelete(id)}>
        <FontAwesomeIcon icon={faTimes} />
      </button>
    </div>
  );
};

export type TodoListProps = {
  todoItems: TodoItem[];
  onDelete: (id: number) => void;
};

const TodoList = (props: TodoListProps) => {
  const { onDelete } = props;
  const listItems = props.todoItems.map((item, index) => {
    return (
      <Todo
        id={item.id}
        key={index}
        text={item.text}
        position={index + 1}
        onDelete={id => onDelete(id)}
      />
    );
  });
  return <div className="todo-list">{listItems}</div>;
};

export default TodoList;
