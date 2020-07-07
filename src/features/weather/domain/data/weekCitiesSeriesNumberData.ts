import {
  TaiwanCities,
} from 'src/features/weather/domain/model/Location';
import {
  SeriesNumberItem,
  WeekSeriesNumber,
} from 'src/features/weather/domain/model/SeriesNumber';

export const weekCitiesSeriesNumberData: SeriesNumberItem[] = [
  {
    name: TaiwanCities.Yilan,
    seriesNumber: WeekSeriesNumber.Yilan,
  },
  {
    name: TaiwanCities.Taoyuan,
    seriesNumber: WeekSeriesNumber.Taoyuan,
  },
  {
    name: TaiwanCities.Taipei,
    seriesNumber: WeekSeriesNumber.Taipei,
  },
  {
    name: TaiwanCities.NewTaipei,
    seriesNumber: WeekSeriesNumber.NewTaipei,
  },
];
