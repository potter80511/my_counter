import { createSlice, PayloadAction, Action } from '@reduxjs/toolkit';
import {
  Metronome,
  Voice,
  voiceData,
  VoiceName,
} from 'src/features/metronome/domain/model/Metronome';
import {
  TimeSignature,
  timeSignatureData,
} from 'src/features/metronome/domain/model/TimeSignature';

import { nonNegativeIntegerPattern } from 'src/helpers/regPatterns';

export type State = Metronome & {
  originalSpeed: string;
  errorMessages: string;
  showTempoTypeModal: boolean;
  firstBeatHint: boolean;
  currentVoice: Voice;
};

export const defaultState: State = {
  timeSignature: TimeSignature.FourFour,
  speed: '80',
  originalSpeed: '80',
  errorMessages: '',
  showTempoTypeModal: false,
  firstBeatHint: false,
  currentVoice: voiceData[0],
};

export type CaseReducer = {
  loaded: (state: State, action: Action) => State;
  setLocalStorage: (state: State, action: PayloadAction<State>) => State;
  update: (state: State, action: PayloadAction<Partial<State>>) => State;
  onBlurChecked: (state: State, action: PayloadAction<string>) => State;
  adjustedTimeSignature: (state: State, action: PayloadAction<number>) => State;
  timeSignatureChange: (
    state: State,
    action: PayloadAction<TimeSignature>,
  ) => State;
  onShowTempoTypeModal: (state: State, action: PayloadAction<boolean>) => State;
  setFirstBeatHint: (state: State, action: PayloadAction<boolean>) => State;
  voiceChanged: (state: State, action: PayloadAction<VoiceName>) => State;
  voiceNextChanged: (
    state: State,
    action: PayloadAction<{ name: VoiceName; backWards?: boolean }>,
  ) => State;
  reset: (state: State, action: Action) => State;
};

const minSpeed = 30;
const maxSpeed = 240;

export const { actions, reducer } = createSlice<State, CaseReducer>({
  name: 'metronome/setting/',
  initialState: defaultState,
  reducers: {
    loaded: (state, _action) => {
      const metronome_settings: any = localStorage.getItem('metronome_settings')
        ? JSON.parse(localStorage.getItem('metronome_settings'))
        : defaultState;
      const {
        timeSignature,
        speed,
        originalSpeed,
        currentVoice,
        firstBeatHint,
      } = metronome_settings;
      return {
        ...state,
        timeSignature,
        speed,
        originalSpeed,
        currentVoice,
        firstBeatHint,
      };
    },
    setLocalStorage: (state, _action) => {
      const {
        timeSignature,
        speed,
        originalSpeed,
        currentVoice,
        firstBeatHint,
      } = state;

      const metronome_settings: any = localStorage.getItem('metronome_settings')
        ? JSON.parse(localStorage.getItem('metronome_settings'))
        : defaultState;
      const newSettings = {
        ...metronome_settings,
        timeSignature,
        speed,
        originalSpeed,
        currentVoice,
        firstBeatHint,
      };

      localStorage.setItem('metronome_settings', JSON.stringify(newSettings));
      return {
        ...state,
      };
    },
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
      const inputIndex = action.payload;
      const maxIndex = timeSignatureData.length - 1;
      let newIndex = inputIndex;
      if (inputIndex > maxIndex) {
        newIndex = 0;
      }
      if (inputIndex < 0) {
        newIndex = maxIndex;
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
    setFirstBeatHint: (state: State, action: PayloadAction<boolean>) => {
      return {
        ...state,
        firstBeatHint: action.payload,
      };
    },
    voiceChanged: (state: State, action: PayloadAction<VoiceName>) => {
      const newVoice = voiceData.find(v => v.common === action.payload);
      return {
        ...state,
        currentVoice: newVoice,
      };
    },
    voiceNextChanged: (
      state: State,
      action: PayloadAction<{ name: VoiceName; backWards?: boolean }>,
    ) => {
      const { name, backWards } = action.payload;
      const voiceIndex = voiceData.findIndex(v => v.common === name);
      const nextIndex = backWards ? voiceIndex - 1 : voiceIndex + 1;

      if (nextIndex > voiceData.length - 1) {
        const newVoice = voiceData[0];
        return {
          ...state,
          currentVoice: newVoice,
        };
      }
      if (nextIndex < 0) {
        const newVoice = voiceData[voiceData.length - 1];
        return {
          ...state,
          currentVoice: newVoice,
        };
      }
      return {
        ...state,
        currentVoice: voiceData[nextIndex],
      };
    },
    reset: () => defaultState,
  },
});
