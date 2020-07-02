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
    value: TaiwanCities.Yilan,
    seriesNumber: SeriesNumber.Yilan,
  },
  {
    value: TaiwanCities.Taoyuan,
    seriesNumber: SeriesNumber.Taoyuan,
  },
];
