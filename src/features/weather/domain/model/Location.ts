export type LocationData = {
  name: LocationName;
  type: WeatherLocationType;
};

export enum WeatherLocationType {
  Location = 'location',
  City = 'city',
}

export type LocationName = TaipeiLocationName | TaoyuanLocationName;

export enum TaipeiLocationName {
  Taipei = '台北市',
  Neihu = '台北市內湖區',
};
export enum TaoyuanLocationName {
  Taoyuan = '桃園市',
  TaoyuanArea = '桃園市桃園區',
  Luzhu = '桃園市蘆竹區',
};

