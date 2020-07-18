import { Reducer, combineReducers } from 'redux';
import todoListReducer, { State as TodoListState } from './todoListReducer';

export interface CombinedState {
  TodoList: TodoListState;
}

const combinedReducer: Reducer<CombinedState> = combineReducers({
  TodoList: todoListReducer,
});

export default combinedReducer;
