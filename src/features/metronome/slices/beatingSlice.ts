import { createSlice, PayloadAction, Action } from '@reduxjs/toolkit';

export type State = {
  beatNumber: number;
};

export const defaultState: State = {
  beatNumber: 0,
};

export type CaseReducer = {
  beat: (state: State, action: PayloadAction<State>) => State;
  reset: (state: State, action: Action) => State;
};

export const { actions, reducer } = createSlice<State, CaseReducer>({
  name: 'metronome/beating/',
  initialState: defaultState,
  reducers: {
    beat: (_state, action) => action.payload,
    reset: () => defaultState,
  },
});
