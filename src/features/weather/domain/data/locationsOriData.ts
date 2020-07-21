import {
  TaiwanCities,
  LocationValue,
  YilanLocationValue,
  TaipeiLocationValue,
} from "src/features/weather/domain/model/Location";

export interface OriLocation {
  city: TaiwanCities;
  districts: Districts[];
}
export interface Districts {
  name: LocationValue;
  zip: string;
}

export const locationsOriData: OriLocation[] = [
  {
    city: TaiwanCities.Yilan,
    districts: [
      {
        name: YilanLocationValue.LuoDong,
        zip: '265',
      },
      {
        name: YilanLocationValue.YilanCity,
        zip: '260',
      },
    ],
  },
  {
    city: TaiwanCities.Taipei,
    districts: [
      {
        name: TaipeiLocationValue.Neihu,
        zip: '114',
      },
      {
        name: TaipeiLocationValue.Zhongzheng,
        zip: '100',
      },
    ],
  },
];
