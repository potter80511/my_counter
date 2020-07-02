import { Action } from 'redux';
import { StoreState } from 'src/Store';

export type Dispatch = (action: Action | ThunkAction | PromiseAction) => any;

export type GetState = () => StoreState;

export type ThunkAction<T = any> = (
  dispatch: Dispatch,
  getState: GetState,
) => T;

export type PromiseAction<T = any> = ThunkAction<Promise<T>>;

export interface ErrorAction extends Action {
  error: Error;
}
