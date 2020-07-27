import { TodoItem } from '../domain/models/TodoList';

export interface State {
  todos: TodoItem[];
}

const defaultState: State = {
  todos: [
    { id: 0, text: '洗碗' },
    { id: 1, text: '倒垃圾' },
    { id: 2, text: '吸地' },
  ],
};

export enum ActionType {
  CreateTodo = 'CREATE_TODO',
  RemoveTodo = 'REMOVE_TODO',
}

export type CreateTodo = {
  type: ActionType.CreateTodo;
  text: string;
  id: number;
};

export type RemoveTodo = {
  type: ActionType.RemoveTodo;
  id: number;
};

export type Action = CreateTodo | RemoveTodo;

const reducer = (state: State = defaultState, action: Action) => {
  switch (action.type) {
    case ActionType.CreateTodo:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            text: action.text,
            id: action.id,
          },
        ],
      };
    case ActionType.RemoveTodo:
      return {
        ...state,
        todos: state.todos.filter(item => item.id !== action.id),
      };
    default:
      return state;
  }
};

export default reducer;
