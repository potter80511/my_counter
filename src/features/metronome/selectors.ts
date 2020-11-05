import { StoreState } from 'src/Store';
import { createSelector } from 'reselect';
import { timeSignatureData } from 'src/features/metronome/domain/model/TimeSignature';

export const settingSelector = (state: StoreState) => state.metronome.setting;

export const timeSignatureSelector = createSelector(
  settingSelector,
  ({ timeSignature }) => timeSignature,
);

export const currentTimeSignatureIndexSelector = createSelector(
  timeSignatureSelector,
  timeSignature => timeSignatureData.findIndex(item => item === timeSignature),
);

export const computedTimeSignatureSelector = createSelector(
  timeSignatureSelector,
  timeSignature => {
    const array = timeSignature.split('/');
    return {
      beatingPerSignature: Number(array[0]),
      beatingPresent: Number(array[1]),
    };
  },
);
