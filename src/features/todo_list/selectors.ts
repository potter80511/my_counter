import { StoreState } from 'src/Store';

export const todosSelector = (store: StoreState) => store.todoList.TodoList.todos;
