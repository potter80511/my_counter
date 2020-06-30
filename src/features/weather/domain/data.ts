import { LocationData, TaipeiLocationName, WeatherLocationType, TaoyuanLocationName } from 'src/features/weather/domain/model/Location';

export const allLocationsData: LocationData[] = [
  {
    name: TaipeiLocationName.Taipei,
    type: WeatherLocationType.City,
  },
  {
    name: TaipeiLocationName.Neihu,
    type: WeatherLocationType.Location,
  },
  {
    name: TaoyuanLocationName.Taoyuan,
    type: WeatherLocationType.City,
  },
  {
    name: TaoyuanLocationName.TaoyuanArea,
    type: WeatherLocationType.Location,
  },
  {
    name: TaoyuanLocationName.Luzhu,
    type: WeatherLocationType.Location,
  },
];
