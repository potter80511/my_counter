import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { todosSelector } from 'src/features/todo_list/selectors';
import {
  createTodo,
  removeTodo,
} from 'src/features/todo_list/actions/todoListActions';
import TodoList from 'src/features/todo_list/components/TodoList';
import CreateInput from 'src/features/todo_list/components/CreateInput';

const TodoListContainer = () => {
  const dispatch = useDispatch();
  const todos = useSelector(todosSelector);

  const onCreateTodo = (text: string, maxId: number) => {
    dispatch(createTodo(text, maxId));
  };
  const onRemoveTodo = (id: number) => {
    dispatch(removeTodo(id));
  };
  return (
    <div className="todo-list">
      <h2>待辦清單</h2>
      <CreateInput onSubmit={newText => onCreateTodo(newText, todos.length)} />
      <TodoList todoItems={todos} onDelete={id => onRemoveTodo(id)} />
    </div>
  );
};

export default TodoListContainer;
