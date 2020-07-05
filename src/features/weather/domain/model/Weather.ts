import { Moment } from 'moment';

export enum WXType {
  Sunny = '晴',
  SunnyCloudy = '多雲時晴',
  Cloudy = '多雲',
  CloudyTempRainyOrThunder = '多雲午後短暫雷陣雨',
  TempRainyOrThunder = '午後短暫雷陣雨',
}

export interface TodayEveryHour {
  hourName: string;
  wXIcon: string;
  temperature: string;
}

export interface CurrentDayDetails {
  locationName: string;
  wX: WXType;
  currentTemperature: string;
  todayEveryHourArray: TodayEveryHour[];
  weatherBackgroundImage: string;
};

export interface WeekTemperature {
  dayName: Moment;
  wX: WXType;
  minT: number;
  maxT: number;
};
