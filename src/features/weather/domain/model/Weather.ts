import { WeatherLocationType, TaiwanCities, LocationValue } from "src/features/weather/domain/model/Location";

export enum WXType {
  Sunny = '晴',
  SunnyCloudy = '晴時多雲',
  StrongCloudy = '陰',
  Cloudy = '多雲',
  CloudySunny = '多雲時晴',
  CloudyTempRainyOrThunder = '多雲短暫陣雨或雷雨',
  CloudCloudyTempRain = '多雲時陰短暫陣雨',
  CloudTempRain = '多雲短暫陣雨',
  CloudyAfternoonTempRainyOrThunder = '多雲午後短暫雷陣雨',
  TempRainyOrThunder = '短暫陣雨或雷雨',
  AfternoonTempRainyOrThunder = '午後短暫雷陣雨',
}

export interface TodayEveryHour {
  hourName: string;
  wXIcon: string;
  temperature: string;
}

export interface CurrentDayDetails {
  inputIndex: number;
  locationName: LocationValue;
  locationType: WeatherLocationType;
  city?: TaiwanCities;
  wX: WXType;
  currentTemperature: string;
  minT: string;
  maxT: string;
  todayEveryHourArray: TodayEveryHour[];
  othersDataArray: OthersData[];
  weatherBackgroundImage: string;
};

export interface WeekTemperature {
  dayName: string;
  wXIcon: string;
  minT: string;
  maxT: string;
};

export interface OthersData {
  name: string;
  value: string;
  unit: string;
};
