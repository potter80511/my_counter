import { WeatherLocationType, TaiwanCities, LocationValue } from "src/features/weather/domain/model/Location";

export enum WXType {
  CLEAR = '晴',
  MOSTLY_CLEAR = '晴時多雲',
  PARTLY_CLEAR = '多雲時晴',
  PARTLY_CLOUDY = '多雲',
  MOSTLY_CLOUDY = '陰時多雲',
  CLOUDY = '陰',
  PARTLY_CLOUDY_WITH_OCCASIONAL_SHOWERS = '多雲短暫陣雨',
  OCCASIONAL_SHOWERS = '短暫陣雨',
  PARTLY_CLOUDY_WITH_OCCASIONAL_SHOWERS_OR_THUNDERSHOWERS = '多雲短暫陣雨或雷雨',
  MOSTLY_CLOUDY_WITH_OCCASIONAL_SHOWERS = '多雲時陰短暫陣雨',
  PARTLY_CLOUDY_WITH_OCCASIONAL_AFTERNOON_THUNDERSHOWERS = '多雲午後短暫雷陣雨',
  OCCASIONAL_SHOWERS_OR_THUNDERSTORMS = '短暫陣雨或雷雨',
  OCCASIONAL_AFTERNOON_THUNDERSHOWERS = '午後短暫雷陣雨',
  CLEAR_WITH_OCCASIONAL_AFTERNOON_THUNDERSHOWERS = '晴午後短暫雷陣雨',
}

export interface TodayEveryHour {
  hourName: string;
  wX: WXType;
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
  wX: WXType;
  minT: string;
  maxT: string;
};

export interface OthersData {
  name: string;
  value: string;
  unit: string;
};
