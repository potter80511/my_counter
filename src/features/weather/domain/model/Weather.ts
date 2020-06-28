import { Moment } from 'moment';

export enum WXType {
  SunnyCloudy = '晴時多雲',
  CloudyTempRainyOrThunder = '多雲短暫陣雨或雷雨',
  Cloudy = '多雲'
}

export interface TodayEveryHour {
  hourName: Moment;
  wX: WXType;
  temperature: string;
}

export interface CurrentDayDetails {
  locationName: string;
  wX: WXType;
  currentTemperature: string;
  todayEveryHourArray: TodayEveryHour[];
};

export interface WeekTemperature {
  dayName: Moment;
  wX: WXType;
  minT: number;
  maxT: number;
};
