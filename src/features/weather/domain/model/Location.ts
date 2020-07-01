export type LocationData = {
  name: string;
  value: LocationValue;
  type: WeatherLocationType;
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
  Taipei = '台北市',
  Taoyuan = '桃園市',
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

