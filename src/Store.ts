import { combineReducers, applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'; // tslint:disable-line
import thunk from 'redux-thunk';

import todoListReducer, { CombinedState as TodoListState} from 'src/features/todo_list/reducers/combinedReducer';
import weatherReducer, { CombinedState as WeatherState } from 'src/features/weather/reducers/combinedReducer';

export const appReducer = combineReducers<StoreState>({
  todoList: todoListReducer,
  weather: weatherReducer,
});

export interface StoreState {
  todoList: TodoListState;
  weather: WeatherState;
}

export const store = createStore(appReducer);

// const appReducer = combineReducers<StoreState>({
//   todoList: todoListReducer,
// });

// export const store = createStore(appReducer);

// const initStore = (preloadedState = initialState) => {
//   return createStore(
//     appReducer,
//     preloadedState,
//     composeWithDevTools(applyMiddleware())
//   )
// }
