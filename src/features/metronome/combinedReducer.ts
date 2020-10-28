import { combineReducers, Reducer } from 'redux';
import {
  State as Setting,
  reducer as settingReducer,
  defaultState as defaultSetting,
} from 'src/features/metronome/slices/settingSlice';

export interface CombinedState {
  setting: Setting;
}

export const combinedReducer: Reducer<CombinedState> = combineReducers({
  setting: settingReducer,
});

export const defaultState = {
  setting: defaultSetting,
};
