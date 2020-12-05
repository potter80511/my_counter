import { TimeSignature } from 'src/features/metronome/domain/model/TimeSignature';

export type Metronome = {
  timeSignature: TimeSignature;
  speed: string;
};

export enum VoiceName {
  Voice1 = 'default_common',
  Voice2 = 'low_frequency',
  Voice3 = 'voice3',
  Voice4 = 'voice4',
  Voice5 = 'voice5',
}

export type Voice = {
  value: VoiceName;
  label: string;
};

export const voiceData: Voice[] = [
  {
    label: '木',
    value: VoiceName.Voice1,
  },
  {
    label: '金屬',
    value: VoiceName.Voice2,
  },
  {
    label: '合成',
    value: VoiceName.Voice3,
  },
  {
    label: '復古',
    value: VoiceName.Voice4,
  },
  {
    label: '無聲',
    value: VoiceName.Voice5,
  },
];
