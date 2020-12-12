import { createSlice, PayloadAction, Action } from '@reduxjs/toolkit';

export type State = {
  beatNumber: number;
  startStatus: boolean;
  blueLightActive: boolean;
  countingSeconds: number;
};

export const defaultState: State = {
  beatNumber: 0,
  startStatus: false,
  blueLightActive: false,
  countingSeconds: 0,
};

export type CaseReducer = {
  beat: (state: State, action: PayloadAction<number>) => State;
  statusChanged: (state: State, action: PayloadAction<boolean>) => State;
  setBlueLightActive: (state: State, action: PayloadAction<boolean>) => State;
  countingTime: (state: State, action: PayloadAction<number>) => State;
  reset: (state: State, action: Action) => State;
};

export const { actions, reducer } = createSlice<State, CaseReducer>({
  name: 'metronome/beating/',
  initialState: defaultState,
  reducers: {
    beat: (state, action) => {
      return {
        ...state,
        beatNumber: action.payload,
      };
    },
    statusChanged: (state, action) => {
      return {
        ...state,
        startStatus: action.payload,
      };
    },
    setBlueLightActive: (state, action) => {
      return {
        ...state,
        blueLightActive: action.payload,
      };
    },
    countingTime: (state, action) => {
      return {
        ...state,
        countingSeconds: action.payload,
      };
    },
    reset: () => defaultState,
  },
});
