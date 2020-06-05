import { combineReducers, createStore } from 'redux';
import todoListReducer, { CombinedState as TodoListState} from 'src/features/todo_list/reducers/combinedReducer';

export interface StoreState {
  todoList: TodoListState;
}

const appReducer = combineReducers<StoreState>({
  todoList: todoListReducer,
});

export const store = createStore(appReducer);

// const initStore = (preloadedState = initialState) => {
//   return createStore(
//     appReducer,
//     preloadedState,
//     composeWithDevTools(applyMiddleware())
//   )
// }

// const makeStore = () => {
//   createStore<StoreState, any, {}, {}>(
//     appReducer,
//   )
// }

// export const store = makeStore();
// export type Store = typeof store;

// export { makeStore as createStore };
