import { createSlice, PayloadAction, Action } from '@reduxjs/toolkit';
import { Metronome } from 'src/features/metronome/domain/model/Metronome';
import {
  TimeSignature,
  timeSignatureData,
} from 'src/features/metronome/domain/model/TimeSignature';

export type State = Metronome;

export const defaultState: State = {
  timeSignature: TimeSignature.FourFour,
  speed: 80,
};

export type CaseReducer = {
  loaded: (state: State, action: PayloadAction<State>) => State;
  update: (state: State, action: PayloadAction<Partial<State>>) => State;
  adjustedTimeSignature: (state: State, action: PayloadAction<number>) => State;
  reset: (state: State, action: Action) => State;
};

export const { actions, reducer } = createSlice<State, CaseReducer>({
  name: 'metronome/setting/',
  initialState: defaultState,
  reducers: {
    loaded: (_state, action) => action.payload,
    update: (state, action: PayloadAction<Partial<State>>) => {
      const { speed } = action.payload;
      if (speed < 30) {
        console.log('已達最低速度30');
        return;
      }
      if (speed > 300) {
        console.log('已達最高速度300');
        return;
      }

      return {
        ...state,
        ...action.payload,
      };
    },
    adjustedTimeSignature: (state, action: PayloadAction<number>) => {
      const newIndex = action.payload;
      const maxIndex = timeSignatureData.length - 1;
      if (newIndex > maxIndex) {
        console.log('已是最後一個！');
        return;
      }
      if (newIndex < 0) {
        console.log('已是第一個！');
        return;
      }
      const newTimeSignature = timeSignatureData.find(
        (_item, index) => index === newIndex,
      );
      return {
        ...state,
        timeSignature: newTimeSignature,
      };
    },
    reset: () => defaultState,
  },
});
