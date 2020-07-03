export type LocationData = {
  city: TaiwanCities;
  name: string;
  value: LocationValue;
  type: WeatherLocationType;
};
export type CurrentDayCitiesSeriesNumberData = {
  value: LocationValue;
  number: WeatherLocationType;
};

export enum WeatherLocationType {
  Location = 'location',
  City = 'city',
}

export type LocationValue =
  TaiwanCities |
  TaipeiLocationValue |
  TaoyuanLocationValue;

export enum TaiwanCities {
  Yilan = '宜蘭縣',
  Taipei = '臺北市',
  Taoyuan = '桃園市',
};

export enum YilanLocationValue {
  YilanCity = '宜蘭市',
  LuoDong = '羅東鎮',
};
export enum TaipeiLocationValue {
  Neihu = '內湖區',
  Yonghe = '永和區',
  Zhongshan = '中山區',
};
export enum TaoyuanLocationValue {
  TaoyuanArea = '桃園區',
  Luzhu = '蘆竹區',
};

