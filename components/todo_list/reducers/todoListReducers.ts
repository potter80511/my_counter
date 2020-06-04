import { State } from "../models/TodoList";

const defaultState: State = {
  todos: [
    { id: 0, text: '洗碗' },
    { id: 1, text: '倒垃圾' },
    { id: 2, text: '吸地' },
  ],
}

export enum ActionType {
  CreateTodo = 'CREATE_TODO',
  RemoveTodo = 'REMOVE_TODO',
}

const reducer = (state: State = defaultState, action: Action) => {};

export default reducer;
