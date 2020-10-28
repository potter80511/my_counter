import { createSlice, PayloadAction, Action } from '@reduxjs/toolkit';
import { Metronome } from 'src/features/metronome/domain/model/Metronome';
import { TimeSignature } from 'src/features/metronome/domain/model/TimeSignature';

export type State = Metronome;

export const defaultState: State = {
  timeSignature: TimeSignature.FourFour,
  speed: 80,
};

export type CaseReducer = {
  loaded: (state: State, action: PayloadAction<State>) => State;
  update: (state: State, action: PayloadAction<Partial<State>>) => State;
  reset: (state: State, action: Action) => State;
};

export const { actions, reducer } = createSlice<State, CaseReducer>({
  name: 'metronome/setting/',
  initialState: defaultState,
  reducers: {
    loaded: (_state, action) => action.payload,
    update: (state, action: PayloadAction<Partial<State>>) => ({
      ...state,
      ...action.payload,
    }),
    reset: () => defaultState,
  },
});
