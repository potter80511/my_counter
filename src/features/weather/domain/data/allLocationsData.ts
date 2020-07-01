import {
  LocationData,
  WeatherLocationType,
  TaiwanCities,
  TaipeiLocationValue,
  TaoyuanLocationValue,
} from 'src/features/weather/domain/model/Location';

export const allLocationsData: LocationData[] = [
  { // 台北
    name: TaiwanCities.Taipei,
    value: TaiwanCities.Taipei,
    type: WeatherLocationType.City,
  },
  {
    name: TaiwanCities.Taipei + TaipeiLocationValue.Neihu,
    value: TaipeiLocationValue.Neihu,
    type: WeatherLocationType.Location,
  },
  {
    name: TaiwanCities.Taipei + TaipeiLocationValue.Yonghe,
    value: TaipeiLocationValue.Yonghe,
    type: WeatherLocationType.Location,
  },
  {
    name: TaiwanCities.Taipei + TaipeiLocationValue.Zhongshan,
    value: TaipeiLocationValue.Zhongshan,
    type: WeatherLocationType.Location,
  },
  { // 桃園
    name: TaiwanCities.Taoyuan,
    value: TaiwanCities.Taoyuan,
    type: WeatherLocationType.City,
  },
  {
    name: TaiwanCities.Taoyuan + TaoyuanLocationValue.TaoyuanArea,
    value: TaoyuanLocationValue.TaoyuanArea,
    type: WeatherLocationType.Location,
  },
  {
    name: TaiwanCities.Taoyuan + TaoyuanLocationValue.Luzhu,
    value: TaoyuanLocationValue.Luzhu,
    type: WeatherLocationType.Location,
  },
];
