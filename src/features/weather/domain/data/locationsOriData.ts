import {
  TaiwanCities,
  LocationValue,
  YilanLocationValue,
  TaoyuanLocationValue,
  HsinchuLocationValue,
  MiaoliLocationValue,
  ChanghuaLocationValue,
  YunlinLocationValue,
  ChiayiLocationValue,
  PingtungLocationValue,
  HualienLocationValue,
  KeelungLocationValue,
  TaipeiLocationValue,
  NewTaipeiLocationValue,
  TaichungLocationValue,
  TaiNanValue,
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
        name: YilanLocationValue.YilanCity,
        zip: '260',
      },
      {
        name: YilanLocationValue.LuoDong,
        zip: '265',
      },
      {
        name: YilanLocationValue.Suao,
        zip: '270',
      },
      {
        name: YilanLocationValue.Toucheng,
        zip: '261',
      },
      {
        name: YilanLocationValue.Jiaoxi,
        zip: '262',
      },
      {
        name: YilanLocationValue.ZhuangWai,
        zip: '263',
      },
      {
        name: YilanLocationValue.Yuanshan,
        zip: '264',
      },
      {
        name: YilanLocationValue.Dongshan,
        zip: '269',
      },
      {
        name: YilanLocationValue.Wujie,
        zip: '268',
      },
      {
        name: YilanLocationValue.Sunshin,
        zip: '266',
      },
      {
        name: YilanLocationValue.Datong,
        zip: '267',
      },
      {
        name: YilanLocationValue.NanAo,
        zip: '272',
      },
    ],
  },
  {
    city: TaiwanCities.Taoyuan,
    districts: [
      {
        name: TaoyuanLocationValue.Zhongli,
        zip: '320',
      },
      {
        name: TaoyuanLocationValue.Pingzhen,
        zip: '324',
      },
      {
        name: TaoyuanLocationValue.Longtan,
        zip: '325',
      },
      {
        name: TaoyuanLocationValue.Yangmei,
        zip: '326',
      },
      {
        name: TaoyuanLocationValue.Xinwu,
        zip: '327',
      },
      {
        name: TaoyuanLocationValue.Guanyin,
        zip: '328',
      },
      {
        name: TaoyuanLocationValue.TaoyuanArea,
        zip: '330',
      },
      {
        name: TaoyuanLocationValue.Guishan,
        zip: '333',
      },
      {
        name: TaoyuanLocationValue.Bade,
        zip: '334',
      },
      {
        name: TaoyuanLocationValue.Daxi,
        zip: '335',
      },
      {
        name: TaoyuanLocationValue.Fuxing,
        zip: '336',
      },
      {
        name: TaoyuanLocationValue.Dayuan,
        zip: '337',
      },
      {
        name: TaoyuanLocationValue.Luzhu,
        zip: '338',
      },
    ],
  },
  {
    city: TaiwanCities.Hsinchu,
    districts: [
      {
        name: HsinchuLocationValue.Baoshan,
        zip: '308',
      },
      {
        name: HsinchuLocationValue.Zhubei,
        zip: '302',
      },
      {
        name: HsinchuLocationValue.Hukou,
        zip: '303',
      },
      {
        name: HsinchuLocationValue.Xinfeng,
        zip: '304',
      },
      {
        name: HsinchuLocationValue.Xinpu,
        zip: '305',
      },
      {
        name: HsinchuLocationValue.Kansai,
        zip: '306',
      },
      {
        name: HsinchuLocationValue.Qionglin,
        zip: '307',
      },
      {
        name: HsinchuLocationValue.Zhudong,
        zip: '310',
      },
      {
        name: HsinchuLocationValue.Wufeng,
        zip: '311',
      },
      {
        name: HsinchuLocationValue.Hengshan,
        zip: '312',
      },
      {
        name: HsinchuLocationValue.Jianshi,
        zip: '313',
      },
      {
        name: HsinchuLocationValue.Beipu,
        zip: '314',
      },
      {
        name: HsinchuLocationValue.Emei,
        zip: '315',
      },
    ],
  },
  {
    city: TaiwanCities.Miaoli,
    districts: [
      {
        name: MiaoliLocationValue.Zhunan,
        zip: '350',
      },
      {
        name: MiaoliLocationValue.Toufen,
        zip: '351',
      },
      {
        name: MiaoliLocationValue.Sanwan,
        zip: '352',
      },
      {
        name: MiaoliLocationValue.Nanzhuang,
        zip: '353',
      },
      {
        name: MiaoliLocationValue.Shitan,
        zip: '354',
      },
      {
        name: MiaoliLocationValue.Houlong,
        zip: '356',
      },
      {
        name: MiaoliLocationValue.Tongxiao,
        zip: '357',
      },
      {
        name: MiaoliLocationValue.Yuanli,
        zip: '358',
      },
      {
        name: MiaoliLocationValue.MiaoliCity,
        zip: '360',
      },
      {
        name: MiaoliLocationValue.Zaoqiao,
        zip: '361',
      },
      {
        name: MiaoliLocationValue.Touwu,
        zip: '362',
      },
      {
        name: MiaoliLocationValue.Gongguan,
        zip: '363',
      },
      {
        name: MiaoliLocationValue.Dahu,
        zip: '364',
      },
      {
        name: MiaoliLocationValue.Taian,
        zip: '365',
      },
      {
        name: MiaoliLocationValue.Tongluo,
        zip: '366',
      },
      {
        name: MiaoliLocationValue.Sanyi,
        zip: '367',
      },
      {
        name: MiaoliLocationValue.Xihu,
        zip: '368',
      },
      {
        name: MiaoliLocationValue.Zhuolan,
        zip: '369',
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
