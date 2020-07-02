import {
  TaiwanCities,
} from 'src/features/weather/domain/model/Location';

export enum SeriesNumber {
  Yilan = 'F-D0047-001',
  Taoyuan = 'F-D0047-005',
  Taipei = 'F-D0047-061',
};

export interface SeriesNumberItem {
  value: TaiwanCities;
  seriesNumber: string;
};
