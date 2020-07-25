import {
  TaiwanCities,
} from 'src/features/weather/domain/model/Location';

export enum SeriesNumber {
  Yilan = 'F-D0047-001',
  Taoyuan = 'F-D0047-005',
  Hsinchu = 'F-D0047-009',
  Miaoli = 'F-D0047-013',
  Changhua = 'F-D0047-017',
  Nantou = 'F-D0047-021',
  Yunlin = 'F-D0047-025',
  Chiayi = 'F-D0047-029',
  Pingtung = 'F-D0047-033',
  Taitung = 'F-D0047-037',
  Hualien = 'F-D0047-041',
  Penghu = 'F-D0047-045',
  Keelung = 'F-D0047-049',
  HsinchuCity = 'F-D0047-053',
  ChiayiCity = 'F-D0047-057',
  Taipei = 'F-D0047-061',
  Kaohsiung = 'F-D0047-065',
  NewTaipei = 'F-D0047-069',
  Taichung = 'F-D0047-073',
  Tainan = 'F-D0047-077',
  Lianjiang = 'F-D0047-081',
  Kinmen = 'F-D0047-085',
};

export enum WeekSeriesNumber {
  Yilan = 'F-D0047-003',
  Taoyuan = 'F-D0047-007',
  Hsinchu = 'F-D0047-011',
  Miaoli = 'F-D0047-015',
  Changhua = 'F-D0047-019',
  Nantou = 'F-D0047-023',
  Yunlin = 'F-D0047-027',
  Chiayi = 'F-D0047-031',
  Pingtung = 'F-D0047-035',
  Taitung = 'F-D0047-039',
  Hualien = 'F-D0047-043',
  Penghu = 'F-D0047-047',
  Keelung = 'F-D0047-051',
  HsinchuCity = 'F-D0047-055',
  ChiayiCity = 'F-D0047-059',
  Taipei = 'F-D0047-063',
  Kaohsiung = 'F-D0047-067',
  NewTaipei = 'F-D0047-071',
  Taichung = 'F-D0047-075',
  Tainan = 'F-D0047-079',
  Lianjiang = 'F-D0047-083',
  Kinmen = 'F-D0047-087',
};

export interface SeriesNumberItem {
  name: TaiwanCities;
  seriesNumber: string;
};
