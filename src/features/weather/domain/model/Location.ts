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
  TaipeiLocationValue |
  TaoyuanLocationValue;

export enum TaipeiLocationValue {
  Taipei = '台北市',
  Neihu = '內湖區',
  Yonghe = '永和區',
  Zhongshan = '中山區',
};
export enum TaoyuanLocationValue {
  Taoyuan = '桃園市',
  TaoyuanArea = '桃園區',
  Luzhu = '蘆竹區',
};

