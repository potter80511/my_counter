import { combineReducers, Reducer } from 'redux';
import {
  State as Setting,
  reducer as settingReducer,
  defaultState as defaultSetting,
} from 'src/features/metronome/slices/settingSlice';
import {
  State as Beating,
  reducer as beatingReducer,
  defaultState as defaultBeating,
} from 'src/features/metronome/slices/beatingSlice';

export interface CombinedState {
  setting: Setting;
  beating: Beating;
}

export const combinedReducer: Reducer<CombinedState> = combineReducers({
  setting: settingReducer,
  beating: beatingReducer,
});

export const defaultState = {
  setting: defaultSetting,
  beating: defaultBeating,
};
