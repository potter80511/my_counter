import { StoreState } from 'src/Store';
import { createSelector } from 'reselect';
import { timeSignatureData } from 'src/features/metronome/domain/model/TimeSignature';
import { SpeedExpression } from 'src/features/metronome/domain/model/SpeedExpression';

export const settingSelector = (state: StoreState) => state.metronome.setting;

export const beatingSelector = (state: StoreState) => state.metronome.beating;

export const speedSelector = createSelector(settingSelector, ({ speed }) =>
  Number(speed),
);

export const timeSignatureSelector = createSelector(
  settingSelector,
  ({ timeSignature }) => timeSignature,
);

export const showTempoTypeModalSelector = createSelector(
  settingSelector,
  ({ showTempoTypeModal }) => showTempoTypeModal,
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

export const perBeatSecondsSelector = createSelector(
  speedSelector,
  speed => (60 / speed) * 1000,
);

export const beatingNumberSelector = createSelector(
  beatingSelector,
  beating => beating.beatNumber,
);

export const beatingStatusSelector = createSelector(
  beatingSelector,
  ({ startStatus }) => startStatus,
);

export const blueLightActiveSelector = createSelector(
  beatingSelector,
  ({ blueLightActive }) => blueLightActive,
);

export const speedExpressionSelector = createSelector(speedSelector, speed => {
  if (speed < 40) {
    return SpeedExpression.Adagissimo;
  }
  if (speed > 39 && speed < 61) {
    return SpeedExpression.Largo;
  }
  if (speed > 59 && speed < 67) {
    return SpeedExpression.Larghetto;
  }
  if (speed > 65 && speed < 77) {
    return SpeedExpression.Adagio;
  }
  if (speed > 75 && speed < 109) {
    return SpeedExpression.Andante;
  }
  return 'no';
});
