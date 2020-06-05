import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { todosSelector } from '../selectors';
import { createTodo, removeTodo } from '../actions/todoListActions';
import TodoList from '../components/TodoList';

const meta = {
  title: "Johnny's App - Todo List",
  description: "Johnny's App - Todo List",
  keywords: "Johnny's App - Todo List",
  ogtitle: "Johnny's App - Todo List",
  ogdescription: "Johnny's App - Todo List",
  ogtype: 'website',
  ogimage: '',
  ogsitename: "Johnny's App - Todo List",
  ogurl: '',
};

const TodoListContainer = () => {
  const dispatch = useDispatch();
  const todos = useSelector(todosSelector);

  const onCreateTodo = () => {
    dispatch(createTodo);
  };
  const onRemoveTodo = () => {
    dispatch(removeTodo);
  };
  return (
    <div className="todo-list">
      <h2>待辦清單</h2>
      <TodoList
        todoItems={todos}
      />
    </div>
  );
};

export default TodoListContainer;
