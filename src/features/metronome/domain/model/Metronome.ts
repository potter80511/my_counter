import { TimeSignature } from 'src/features/metronome/domain/model/TimeSignature';

export type Metronome = {
  timeSignature: TimeSignature;
  speed: string;
};

export type Voice = {
  value: string;
  label: string;
};

export const voiceData: Voice[] = [
  {
    label: '木',
    value: 'w',
  },
  {
    label: '金屬',
    value: 'm',
  },
  {
    label: '合成',
    value: 'h',
  },
  {
    label: '復古',
    value: 'old',
  },
  {
    label: '無聲',
    value: 'n',
  },
];
