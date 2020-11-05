import { StoreState } from 'src/Store';
import { createSelector } from 'reselect';

export const settingSelector = (state: StoreState) => state.metronome.setting;

export const computedTimeSignatureSelector = createSelector(
  settingSelector,
  ({ timeSignature }) => {
    const array = timeSignature.split('/');
    return {
      beatingPerSignature: Number(array[0]),
      beatingPresent: Number(array[1]),
    };
  },
);
