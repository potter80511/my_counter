import { combineReducers, applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'; // tslint:disable-line
import thunk from 'redux-thunk';

import todoListReducer, { CombinedState as TodoListState} from 'src/features/todo_list/reducers/combinedReducer';
import weatherReducer, { CombinedState as WeatherState } from 'src/features/weather/reducers/combinedReducer';

const composeEnhancers = composeWithDevTools({
  // options like actionSanitizer, stateSanitizer
});

export const appReducer = combineReducers<StoreState>({
  todoList: todoListReducer,
  weather: weatherReducer,
});

export interface StoreState {
  todoList: TodoListState;
  weather: WeatherState;
}

export const NULL_STATE: StoreState = {
  todoList: {} as any,
  weather: {} as any,
};

const makeStore = () => {
  createStore<StoreState, any, {}, {}>(
    appReducer,
    composeEnhancers(applyMiddleware(thunk)),
  )
}

export const store = makeStore();
export type Store = typeof store;

export { makeStore as createStore };

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
