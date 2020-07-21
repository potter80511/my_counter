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
    city: TaiwanCities.Changhua,
    districts: [
      {
        name: ChanghuaLocationValue.ChanghuaCity,
        zip: '500',
      },
      {
        name: ChanghuaLocationValue.Fenyuan,
        zip: '502',
      },
      {
        name: ChanghuaLocationValue.Huatan,
        zip: '503',
      },
      {
        name: ChanghuaLocationValue.Xiushui,
        zip: '504',
      },
      {
        name: ChanghuaLocationValue.Lugang,
        zip: '505',
      },
      {
        name: ChanghuaLocationValue.Fuxing,
        zip: '506',
      },
      {
        name: ChanghuaLocationValue.Xianxixiang,
        zip: '507',
      },
      {
        name: ChanghuaLocationValue.Hemei,
        zip: '508',
      },
      {
        name: ChanghuaLocationValue.Shengang,
        zip: '509',
      },
      {
        name: ChanghuaLocationValue.Yuanlin,
        zip: '510',
      },
      {
        name: ChanghuaLocationValue.Shetou,
        zip: '511',
      },
      {
        name: ChanghuaLocationValue.Yongjing,
        zip: '512',
      },
      {
        name: ChanghuaLocationValue.Puxin,
        zip: '513',
      },
      {
        name: ChanghuaLocationValue.Xihu,
        zip: '514',
      },
      {
        name: ChanghuaLocationValue.Dacun,
        zip: '515',
      },
      {
        name: ChanghuaLocationValue.Puyan,
        zip: '516',
      },
      {
        name: ChanghuaLocationValue.Tianzhong,
        zip: '520',
      },
      {
        name: ChanghuaLocationValue.Beidou,
        zip: '521',
      },
      {
        name: ChanghuaLocationValue.Tianwei,
        zip: '522',
      },
      {
        name: ChanghuaLocationValue.Pitou,
        zip: '523',
      },
      {
        name: ChanghuaLocationValue.Xizhou,
        zip: '524',
      },
      {
        name: ChanghuaLocationValue.Zhutang,
        zip: '525',
      },
      {
        name: ChanghuaLocationValue.Erlin,
        zip: '526',
      },
      {
        name: ChanghuaLocationValue.Dacheng,
        zip: '527',
      },
      {
        name: ChanghuaLocationValue.Fangyuan,
        zip: '528',
      },
      {
        name: ChanghuaLocationValue.Ershui,
        zip: '530',
      },
    ],
  },
  {
    city: TaiwanCities.Yunlin,
    districts: [
      {
        name: YunlinLocationValue.Dounan,
        zip: '630',
      },
      {
        name: YunlinLocationValue.Dapi,
        zip: '631',
      },
      {
        name: YunlinLocationValue.Huwei,
        zip: '632',
      },
      {
        name: YunlinLocationValue.Tukuzhen,
        zip: '633',
      },
      {
        name: YunlinLocationValue.Baozhong,
        zip: '634',
      },
      {
        name: YunlinLocationValue.Dongshi,
        zip: '635',
      },
      {
        name: YunlinLocationValue.Taixi,
        zip: '636',
      },
      {
        name: YunlinLocationValue.Lunbei,
        zip: '637',
      },
      {
        name: YunlinLocationValue.Mailiao,
        zip: '638',
      },
      {
        name: YunlinLocationValue.Douliu,
        zip: '640',
      },
      {
        name: YunlinLocationValue.Linnei,
        zip: '643',
      },
      {
        name: YunlinLocationValue.Gukeng,
        zip: '646',
      },
      {
        name: YunlinLocationValue.Cihtong,
        zip: '647',
      },
      {
        name: YunlinLocationValue.Xiluo,
        zip: '648',
      },
      {
        name: YunlinLocationValue.Erlun,
        zip: '649',
      },
      {
        name: YunlinLocationValue.Beigang,
        zip: '651',
      },
      {
        name: YunlinLocationValue.Shuilin,
        zip: '652',
      },
      {
        name: YunlinLocationValue.Kouhu,
        zip: '653',
      },
      {
        name: YunlinLocationValue.Sihu,
        zip: '654',
      },
      {
        name: YunlinLocationValue.Yuanchang,
        zip: '655',
      },
    ],
  },
  {
    city: TaiwanCities.Chiayi,
    districts: [
      {
        name: ChiayiLocationValue.Fanlu,
        zip: '602',
      },
      {
        name: ChiayiLocationValue.Meishan,
        zip: '603',
      },
      {
        name: ChiayiLocationValue.Zhuqi,
        zip: '604',
      },
      {
        name: ChiayiLocationValue.Alishan,
        zip: '605',
      },
      {
        name: ChiayiLocationValue.Zhongpu,
        zip: '606',
      },
      {
        name: ChiayiLocationValue.Dapu,
        zip: '607',
      },
      {
        name: ChiayiLocationValue.Shuishang,
        zip: '608',
      },
      {
        name: ChiayiLocationValue.Lucao,
        zip: '611',
      },
      {
        name: ChiayiLocationValue.Taibao,
        zip: '612',
      },
      {
        name: ChiayiLocationValue.Puzishi,
        zip: '613',
      },
      {
        name: ChiayiLocationValue.Dongshi,
        zip: '614',
      },
      {
        name: ChiayiLocationValue.Liujiao,
        zip: '615',
      },
      {
        name: ChiayiLocationValue.Xingang,
        zip: '616',
      },
      {
        name: ChiayiLocationValue.Minxiong,
        zip: '621',
      },
      {
        name: ChiayiLocationValue.Dalin,
        zip: '622',
      },
      {
        name: ChiayiLocationValue.Xikou,
        zip: '623',
      },
      {
        name: ChiayiLocationValue.Yizhu,
        zip: '624',
      },
      {
        name: ChiayiLocationValue.Budai,
        zip: '625',
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
