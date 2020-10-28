import { combineReducers, applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'; // tslint:disable-line
import thunk from 'redux-thunk';

import todoListReducer, {
  CombinedState as TodoListState,
} from 'src/features/todo_list/reducers/combinedReducer';
import weatherReducer, {
  CombinedState as WeatherState,
} from 'src/features/weather/reducers/combinedReducer';
import {
  combinedReducer as metronomeReducer,
  CombinedState as Metronome,
} from 'src/features/metronome/combinedReducer';

const composeEnhancers = composeWithDevTools({
  // options like actionSanitizer, stateSanitizer
});

export const appReducer = combineReducers<StoreState>({
  todoList: todoListReducer,
  weather: weatherReducer,
  metronome: metronomeReducer,
});

export interface StoreState {
  todoList: TodoListState;
  weather: WeatherState;
  metronome: Metronome;
}

export const store = createStore(
  appReducer,
  composeEnhancers(applyMiddleware(thunk)),
);
