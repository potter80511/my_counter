import {
  TaiwanCities,
} from 'src/features/weather/domain/model/Location';

export enum SeriesNumber {
  Yilan = 'F-D0047-001',
  Taoyuan = 'F-D0047-005',
  Taipei = 'F-D0047-061',
  NewTaipei = 'F-D0047-069',
};

export interface SeriesNumberItem {
  name: TaiwanCities;
  seriesNumber: string;
};
