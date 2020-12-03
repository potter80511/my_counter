import { createSlice, PayloadAction, Action } from '@reduxjs/toolkit';
import { Metronome } from 'src/features/metronome/domain/model/Metronome';
import {
  TimeSignature,
  timeSignatureData,
} from 'src/features/metronome/domain/model/TimeSignature';
import { nonNegativeIntegerPattern } from 'src/helpers/regPatterns';

export type State = Metronome & {
  originalSpeed: string;
  errorMessages: string;
  showTempoTypeModal: boolean;
};

export const defaultState: State = {
  timeSignature: TimeSignature.FourFour,
  speed: '80',
  originalSpeed: '80',
  errorMessages: '',
  showTempoTypeModal: false,
};

export type CaseReducer = {
  loaded: (state: State, action: PayloadAction<State>) => State;
  update: (state: State, action: PayloadAction<Partial<State>>) => State;
  onBlurChecked: (state: State, action: PayloadAction<string>) => State;
  adjustedTimeSignature: (state: State, action: PayloadAction<number>) => State;
  timeSignatureChange: (
    state: State,
    action: PayloadAction<TimeSignature>,
  ) => State;
  onShowTempoTypeModal: (state: State, action: PayloadAction<boolean>) => State;
  reset: (state: State, action: Action) => State;
};

const minSpeed = 30;
const maxSpeed = 240;

export const { actions, reducer } = createSlice<State, CaseReducer>({
  name: 'metronome/setting/',
  initialState: defaultState,
  reducers: {
    loaded: (_state, action) => action.payload,
    update: (state, action: PayloadAction<Partial<State>>) => {
      const { speed } = action.payload;
      const validate = nonNegativeIntegerPattern.test(speed);

      if (speed !== '') {
        if (!validate) {
          return {
            ...state,
            errorMessages: '請輸入合理數字',
          };
        }
      }

      return {
        ...state,
        ...action.payload,
        errorMessages: '',
      };
    },
    onBlurChecked: (state, action: PayloadAction<string>) => {
      const value = action.payload;
      const numSpeed = Number(value);

      if (value === '') {
        return {
          ...state,
          speed: state.originalSpeed,
        };
      }
      if (numSpeed < 30) {
        return {
          ...state,
          speed: state.originalSpeed,
          errorMessages: `不得低於最低速度 ${minSpeed}`,
        };
      }
      if (numSpeed > maxSpeed) {
        return {
          ...state,
          speed: state.originalSpeed,
          errorMessages: `不得高於最高速度 ${maxSpeed}`,
        };
      }
      return {
        ...state,
        errorMessages: '',
        originalSpeed: value,
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
    timeSignatureChange: (
      state: State,
      action: PayloadAction<TimeSignature>,
    ) => {
      return {
        ...state,
        timeSignature: action.payload,
      };
    },
    onShowTempoTypeModal: (state: State, action: PayloadAction<boolean>) => {
      return {
        ...state,
        showTempoTypeModal: action.payload,
      };
    },
    reset: () => defaultState,
  },
});
