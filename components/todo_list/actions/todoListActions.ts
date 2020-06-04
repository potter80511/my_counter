import { ActionType } from "../reducers/todoListReducers";

export const createTodo = (text: string, maxId: number) => ({
  type: ActionType.CreateTodo,
  text,
  id: maxId + 1,
});

export const removeTodo = (id: number) => ({
  type: ActionType.RemoveTodo,
  id,
});
