import React from 'react';
import { TodoItem } from '../domain/models/TodoList';

const Todo = (props: TodoItem) => {
  return (
    <div>{props.text}</div>
  );
};

export type TodoListProps = {
  todoItems: TodoItem[];
}

const TodoList = (props: TodoListProps) => {
  const listItems = props.todoItems.map((item, index) => {
    return (
      <Todo
        id={index}
        key={index}
        text={item.text}
      />
    )
  });
  return (
    <div className="todo-list">
      {listItems}
    </div>
  );
};

export default TodoList;
