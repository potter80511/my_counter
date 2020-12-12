import { StoreState } from 'src/Store';
import { createSelector } from 'reselect';
import { timeSignatureData } from 'src/features/metronome/domain/model/TimeSignature';
import { SpeedExpression } from 'src/features/metronome/domain/model/SpeedExpression';
import {
  VoiceName,
  voiceData,
} from 'src/features/metronome/domain/model/Metronome';
import { Sound } from 'src/features/metronome/domain/model/Sound';
import { Howl } from 'howler';

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

export const firstBeatHintSelector = createSelector(
  settingSelector,
  ({ firstBeatHint }) => firstBeatHint,
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

export const countingSecondsSelector = createSelector(
  beatingSelector,
  ({ countingSeconds }) => countingSeconds,
);

export const countingTimesSelector = createSelector(
  countingSecondsSelector,
  countingSeconds => {
    const minuteNumber = Math.floor(countingSeconds / 60);
    const secondNumber = countingSeconds % 60;

    const minute = minuteNumber < 10 ? `0${minuteNumber}` : minuteNumber;
    const second = secondNumber < 10 ? `0${secondNumber}` : secondNumber;
    return `${minute} : ${second}`;
  },
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
  if (speed > 108 && speed < 120) {
    return SpeedExpression.Moderato;
  }
  if (speed > 119 && speed < 168) {
    return SpeedExpression.Allegro;
  }
  if (speed > 167 && speed < 200) {
    return SpeedExpression.Presto;
  }
  if (speed > 199) {
    return SpeedExpression.Prestissimo;
  }
  return 'no';
});

export const currentVoiceSelector = createSelector(
  settingSelector,
  ({ currentVoice }) => {
    return voiceData.find(v => v.common === currentVoice.common);
  },
);

export const voiceSwitchDegSelector = createSelector(
  currentVoiceSelector,
  ({ common }) => {
    switch (common) {
      case VoiceName.Voice1:
        return '0deg';
      case VoiceName.Voice2:
        return '-45deg';
      case VoiceName.Voice3:
        return '-90deg';
      case VoiceName.Voice4:
        return '-135deg';
      case VoiceName.Voice5:
        return '-180deg';
      default:
        break;
    }
  },
);

export const soundSelector = createSelector(
  currentVoiceSelector,
  firstBeatHintSelector,
  ({ common, ding }, firstBeatHint): Sound => {
    return {
      common: new Howl({
        src: [`/audios/metronome/${common}.mp3`],
      }),
      ding: new Howl({
        src: [`/audios/metronome/${firstBeatHint ? ding : common}.mp3`],
      }),
      select: new Howl({
        src: [`/audios/metronome/beap1.mp3`],
        volume: 0.1,
      }),
      show: new Howl({
        src: [`/audios/metronome/show.mp3`],
      }),
      adjust: new Howl({
        src: [`/audios/metronome/click.mp3`],
        volume: 0.05,
      }),
      next: new Howl({
        src: [`/audios/metronome/beap3.mp3`],
        volume: 0.09,
      }),
      switch: new Howl({
        src: [`/audios/metronome/switch.mp3`],
      }),
      bubble: new Howl({
        src: [`/audios/metronome/bubble.mp3`],
        volume: 0.3,
      }),
    };
  },
);
