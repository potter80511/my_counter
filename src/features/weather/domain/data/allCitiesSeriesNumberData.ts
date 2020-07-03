import {
  LocationData,
  WeatherLocationType,
  TaiwanCities,
  TaipeiLocationValue,
  TaoyuanLocationValue,
} from 'src/features/weather/domain/model/Location';
import {
  SeriesNumber,
  SeriesNumberItem,
} from 'src/features/weather/domain/model/SeriesNumber';

export const currentDayCitiesSeriesNumberData: SeriesNumberItem[] = [
  {
    name: TaiwanCities.Yilan,
    seriesNumber: SeriesNumber.Yilan,
  },
  {
    name: TaiwanCities.Taoyuan,
    seriesNumber: SeriesNumber.Taoyuan,
  },
  {
    name: TaiwanCities.Taipei,
    seriesNumber: SeriesNumber.Taipei,
  },
];
