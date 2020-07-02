import { Action, AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import { StoreState } from 'src/Store';
import { ErrorAction } from 'src/ReduxTypes';

declare global {
  interface Window {
    renderAdmin: (el: HTMLElement) => void;
    info_warning: (s: string) => void;
  }
  interface CsrfMeta extends Element {
    content: string;
  }
}

export type Nullable<T> = T | null;
export type Voidable<T> = T | undefined;

export type Partial<T> = {
  [P in keyof T]?: T[P];
};

export interface OptionType {
  label: string;
  value: string;
}

export type StringObjType = { [key: string]: any };

export interface VoidableIdAction extends Action {
  id: Voidable<number>;
}

export type TDispatch = ThunkDispatch<StoreState, {}, AnyAction>;
export type TAction = ThunkAction<Promise<void>, StoreState, {}, AnyAction>;

export interface IdAction extends Action {
  id: number;
}

export interface StringAction extends Action {
  value: string;
}

export interface CheckedAction extends Action {
  checked: boolean;
}

export interface NumberAction extends Action {
  value: number;
}

export interface OptionTypeAction extends Action {
  option: OptionType;
}

export function getErrorAction(action: Action): ErrorAction {
  return action as ErrorAction;
}

export function getStringAction(action: Action): StringAction {
  return action as StringAction;
}

export type InputMode =
  | 'button'
  | 'checkbox'
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'hidden'
  | 'image'
  | 'month'
  | 'number'
  | 'password'
  | 'radio'
  | 'range'
  | 'reset'
  | 'search'
  | 'submit'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week'
  | 'datetime';

export interface List<T> {
  items: T[];
  currentPage: number;
  totalPages: number;
  totalCount: number;
}
export type NonEmptyArray<T> = [T, ...T[]];
