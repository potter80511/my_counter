import { TimeSignature } from 'src/features/metronome/domain/model/TimeSignature';

export type Metronome = {
  timeSignature: TimeSignature;
  speed: string;
};

export enum VoiceName {
  Voice1 = 'default_common',
  Voice2 = 'low_frequency',
  Voice3 = 'voice4',
  Voice4 = 'voice5',
  Voice5 = 'bubble',
}

export enum DingName {
  Ding1 = 'default_ding',
  Ding2 = 'glass_ding',
  Ding3 = 'ding3',
  Ding4 = 'voice4',
  Ding5 = 'bubble',
}

export type Voice = {
  common: VoiceName;
  ding: DingName;
  label: string;
};

export const voiceData: Voice[] = [
  {
    label: '一般',
    common: VoiceName.Voice1,
    ding: DingName.Ding1,
  },
  {
    label: '碗+木魚',
    common: VoiceName.Voice2,
    ding: DingName.Ding2,
  },
  {
    label: '玻璃杯+節拍器',
    common: VoiceName.Voice3,
    ding: DingName.Ding3,
  },
  {
    label: '普通節拍器',
    common: VoiceName.Voice4,
    ding: DingName.Ding4,
  },
  {
    label: '泡泡',
    common: VoiceName.Voice5,
    ding: DingName.Ding5,
  },
];
