import { StoreState } from '../../Store';

export const todosSelector = (store: StoreState) => store.todoList.TodoList.todos;
