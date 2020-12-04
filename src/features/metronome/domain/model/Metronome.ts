import { TimeSignature } from 'src/features/metronome/domain/model/TimeSignature';

export type Metronome = {
  timeSignature: TimeSignature;
  speed: string;
};

export enum VoiceCode {
  Voice1 = 'w',
  Voice2 = 'm',
  Voice3 = 'h',
  Voice4 = 'old',
  Voice5 = 'n',
}

export type Voice = {
  value: VoiceCode;
  label: string;
};

export const voiceData: Voice[] = [
  {
    label: '木',
    value: VoiceCode.Voice1,
  },
  {
    label: '金屬',
    value: VoiceCode.Voice2,
  },
  {
    label: '合成',
    value: VoiceCode.Voice3,
  },
  {
    label: '復古',
    value: VoiceCode.Voice4,
  },
  {
    label: '無聲',
    value: VoiceCode.Voice5,
  },
];
