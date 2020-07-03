import {
  LocationData,
  WeatherLocationType,
  TaiwanCities,
  TaipeiLocationValue,
  TaoyuanLocationValue,
} from 'src/features/weather/domain/model/Location';

export const allLocationsData: LocationData[] = [
  { // 台北
    city: TaiwanCities.Taipei,
    name: TaiwanCities.Taipei,
    value: TaiwanCities.Taipei,
    type: WeatherLocationType.City,
  },
  {
    city: TaiwanCities.Taipei,
    name: TaiwanCities.Taipei + TaipeiLocationValue.Neihu,
    value: TaipeiLocationValue.Neihu,
    type: WeatherLocationType.Location,
  },
  {
    city: TaiwanCities.Taipei,
    name: TaiwanCities.Taipei + TaipeiLocationValue.Yonghe,
    value: TaipeiLocationValue.Yonghe,
    type: WeatherLocationType.Location,
  },
  {
    city: TaiwanCities.Taipei,
    name: TaiwanCities.Taipei + TaipeiLocationValue.Zhongshan,
    value: TaipeiLocationValue.Zhongshan,
    type: WeatherLocationType.Location,
  },
  { // 桃園
    city: TaiwanCities.Taoyuan,
    name: TaiwanCities.Taoyuan,
    value: TaiwanCities.Taoyuan,
    type: WeatherLocationType.City,
  },
  {
    city: TaiwanCities.Taoyuan,
    name: TaiwanCities.Taoyuan + TaoyuanLocationValue.TaoyuanArea,
    value: TaoyuanLocationValue.TaoyuanArea,
    type: WeatherLocationType.Location,
  },
  {
    city: TaiwanCities.Taoyuan,
    name: TaiwanCities.Taoyuan + TaoyuanLocationValue.Luzhu,
    value: TaoyuanLocationValue.Luzhu,
    type: WeatherLocationType.Location,
  },
  { // 宜蘭
    city: TaiwanCities.Yilan,
    name: TaiwanCities.Yilan,
    value: TaiwanCities.Yilan,
    type: WeatherLocationType.City,
  },
];
