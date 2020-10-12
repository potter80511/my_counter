import { ActionType } from '../reducers/todoListReducer';

export const createTodo = (text: string, maxId: number) => ({
  type: ActionType.CreateTodo,
  text,
  id: maxId + 1,
});

export const removeTodo = (id: number) => ({
  type: ActionType.RemoveTodo,
  id,
});
