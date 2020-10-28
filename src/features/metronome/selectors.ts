import { StoreState } from 'src/Store';
import { createSelector } from 'reselect';

export const settingSelector = (state: StoreState) => state.metronome.setting;
