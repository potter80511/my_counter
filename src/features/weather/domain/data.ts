import {
  LocationData,
  WeatherLocationType,
  TaipeiLocationValue,
  TaoyuanLocationValue,
} from 'src/features/weather/domain/model/Location';

export const allLocationsData: LocationData[] = [
  { // 台北
    name: TaipeiLocationValue.Taipei,
    value: TaipeiLocationValue.Taipei,
    type: WeatherLocationType.City,
  },
  {
    name: TaipeiLocationValue.Taipei + TaipeiLocationValue.Neihu,
    value: TaipeiLocationValue.Neihu,
    type: WeatherLocationType.Location,
  },
  {
    name: TaipeiLocationValue.Taipei + TaipeiLocationValue.Yonghe,
    value: TaipeiLocationValue.Yonghe,
    type: WeatherLocationType.Location,
  },
  {
    name: TaipeiLocationValue.Taipei + TaipeiLocationValue.Zhongshan,
    value: TaipeiLocationValue.Zhongshan,
    type: WeatherLocationType.Location,
  },
  { // 桃園
    name: TaoyuanLocationValue.Taoyuan,
    value: TaoyuanLocationValue.Taoyuan,
    type: WeatherLocationType.City,
  },
  {
    name: TaoyuanLocationValue.Taoyuan + TaoyuanLocationValue.TaoyuanArea,
    value: TaoyuanLocationValue.TaoyuanArea,
    type: WeatherLocationType.Location,
  },
  {
    name: TaoyuanLocationValue.Taoyuan + TaoyuanLocationValue.Luzhu,
    value: TaoyuanLocationValue.Luzhu,
    type: WeatherLocationType.Location,
  },
];
