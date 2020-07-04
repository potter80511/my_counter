import { Moment } from 'moment';

export enum WXType {
  Sunny = '晴',
  SunnyCloudy = '晴時多雲',
  Cloudy = '多雲',
  CloudyTempRainyOrThunder = '多雲午後短暫雷陣雨',
  TempRainyOrThunder = '午後短暫雷陣雨',
}

export interface TodayEveryHour {
  hourName: Moment;
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
