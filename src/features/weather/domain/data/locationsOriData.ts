import {
  TaiwanCities,
  LocationValue,
  YilanLocationValue,
  TaoyuanLocationValue,
  HsinchuLocationValue,
  MiaoliLocationValue,
  ChanghuaLocationValue,
  NantouLocationValue,
  YunlinLocationValue,
  ChiayiLocationValue,
  PingtungLocationValue,
  TaitungLocationValue,
  HualienLocationValue,
  KeelungLocationValue,
  TaipeiLocationValue,
  NewTaipeiLocationValue,
  TaichungLocationValue,
  TaiNanValue,
  KaohsiungLocationValue,
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
    city: TaiwanCities.HsinchuCity,
    districts: [
      {
        name: HsinchuLocationValue.Eastern,
        zip: '300',
      },
      {
        name: HsinchuLocationValue.North,
        zip: '300',
      },
      {
        name: HsinchuLocationValue.Xiangshan,
        zip: '300',
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
    city: TaiwanCities.Nantou,
    districts: [
      {
        name: NantouLocationValue.NantouCity,
        zip: '540',
      },
      {
        name: NantouLocationValue.Zhongliao,
        zip: '541',
      },
      {
        name: NantouLocationValue.Caotun,
        zip: '542',
      },
      {
        name: NantouLocationValue.Guoxing,
        zip: '544',
      },
      {
        name: NantouLocationValue.Puli,
        zip: '545',
      },
      {
        name: NantouLocationValue.Renai,
        zip: '546',
      },
      {
        name: NantouLocationValue.Mingjian,
        zip: '551',
      },
      {
        name: NantouLocationValue.Jiji,
        zip: '552',
      },
      {
        name: NantouLocationValue.Shuili,
        zip: '553',
      },
      {
        name: NantouLocationValue.Yuchi,
        zip: '555',
      },
      {
        name: NantouLocationValue.Xinyi,
        zip: '556',
      },
      {
        name: NantouLocationValue.Zhushan,
        zip: '557',
      },
      {
        name: NantouLocationValue.Lugu,
        zip: '558',
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
    city: TaiwanCities.ChiayiCity,
    districts: [
      {
        name: ChiayiLocationValue.West,
        zip: '600',
      },
      {
        name: ChiayiLocationValue.Eastern,
        zip: '601',
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
    city: TaiwanCities.Pingtung,
    districts: [
      {
        name: PingtungLocationValue.PingtungCity,
        zip: '900',
      },
      {
        name: PingtungLocationValue.Sandimen,
        zip: '901',
      },
      {
        name: PingtungLocationValue.Wutai,
        zip: '902',
      },
      {
        name: PingtungLocationValue.Majia,
        zip: '903',
      },
      {
        name: PingtungLocationValue.Jiuru,
        zip: '904',
      },
      {
        name: PingtungLocationValue.Ligang,
        zip: '905',
      },
      {
        name: PingtungLocationValue.Gaoshu,
        zip: '906',
      },
      {
        name: PingtungLocationValue.Yanpu,
        zip: '907',
      },
      {
        name: PingtungLocationValue.Changzhi,
        zip: '908',
      },
      {
        name: PingtungLocationValue.Linluo,
        zip: '909',
      },
      {
        name: PingtungLocationValue.Zhutian,
        zip: '911',
      },
      {
        name: PingtungLocationValue.Neipu,
        zip: '912',
      },
      {
        name: PingtungLocationValue.Wandan,
        zip: '913',
      },
      {
        name: PingtungLocationValue.Chaozhou,
        zip: '920',
      },
      {
        name: PingtungLocationValue.Taiwu,
        zip: '921',
      },
      {
        name: PingtungLocationValue.Laiyi,
        zip: '922',
      },
      {
        name: PingtungLocationValue.Wanluan,
        zip: '923',
      },
      {
        name: PingtungLocationValue.Kanding,
        zip: '924',
      },
      {
        name: PingtungLocationValue.Xinpi,
        zip: '925',
      },
      {
        name: PingtungLocationValue.Nanzhou,
        zip: '926',
      },
      {
        name: PingtungLocationValue.Linbian,
        zip: '927',
      },
      {
        name: PingtungLocationValue.Donggang,
        zip: '928',
      },
      {
        name: PingtungLocationValue.Liuqiu,
        zip: '929',
      },
      {
        name: PingtungLocationValue.Jiadong,
        zip: '931',
      },
      {
        name: PingtungLocationValue.Xinyuan,
        zip: '932',
      },
      {
        name: PingtungLocationValue.Fangliao,
        zip: '940',
      },
      {
        name: PingtungLocationValue.Fangshan,
        zip: '941',
      },
      {
        name: PingtungLocationValue.Chunri,
        zip: '942',
      },
      {
        name: PingtungLocationValue.Lion,
        zip: '943',
      },
      {
        name: PingtungLocationValue.Checheng,
        zip: '944',
      },
      {
        name: PingtungLocationValue.Mudan,
        zip: '945',
      },
      {
        name: PingtungLocationValue.Hengchun,
        zip: '946',
      },
      {
        name: PingtungLocationValue.Manzhou,
        zip: '947',
      },
    ],
  },
  {
    city: TaiwanCities.Hualien,
    districts: [
      {
        name: HualienLocationValue.HualienCity,
        zip: '970',
      },
      {
        name: HualienLocationValue.Xincheng,
        zip: '971',
      },
      {
        name: HualienLocationValue.Xiulin,
        zip: '972',
      },
      {
        name: HualienLocationValue.Jian,
        zip: '973',
      },
      {
        name: HualienLocationValue.Shoufeng,
        zip: '974',
      },
      {
        name: HualienLocationValue.Fenglin,
        zip: '975',
      },
      {
        name: HualienLocationValue.Guangfu,
        zip: '976',
      },
      {
        name: HualienLocationValue.Fengbin,
        zip: '977',
      },
      {
        name: HualienLocationValue.Ruisui,
        zip: '978',
      },
      {
        name: HualienLocationValue.Wanrung,
        zip: '979',
      },
      {
        name: HualienLocationValue.Yuli,
        zip: '981',
      },
      {
        name: HualienLocationValue.Zhuoxi,
        zip: '982',
      },
      {
        name: HualienLocationValue.Fuli,
        zip: '983',
      },
    ],
  },
  {
    city: TaiwanCities.Keelung,
    districts: [
      {
        name: KeelungLocationValue.RenAi,
        zip: '200',
      },
      {
        name: KeelungLocationValue.Xinyi,
        zip: '201',
      },
      {
        name: KeelungLocationValue.Zhongzheng,
        zip: '202',
      },
      {
        name: KeelungLocationValue.Zhongshan,
        zip: '203',
      },
      {
        name: KeelungLocationValue.Anle,
        zip: '204',
      },
      {
        name: KeelungLocationValue.Nuannuan,
        zip: '205',
      },
      {
        name: KeelungLocationValue.Qidu,
        zip: '206',
      },
    ],
  },
  {
    city: TaiwanCities.Taipei,
    districts: [
      {
        name: TaipeiLocationValue.Zhongzheng,
        zip: '100',
      },
      {
        name: TaipeiLocationValue.Datong,
        zip: '103',
      },
      {
        name: TaipeiLocationValue.Zhongshan,
        zip: '104',
      },
      {
        name: TaipeiLocationValue.Songshan,
        zip: '105',
      },
      {
        name: TaipeiLocationValue.Daan,
        zip: '106',
      },
      {
        name: TaipeiLocationValue.Wanhua,
        zip: '108',
      },
      {
        name: TaipeiLocationValue.Xinyi,
        zip: '110',
      },
      {
        name: TaipeiLocationValue.Shilin,
        zip: '111',
      },
      {
        name: TaipeiLocationValue.Beitou,
        zip: '112',
      },
      {
        name: TaipeiLocationValue.Neihu,
        zip: '114',
      },
      {
        name: TaipeiLocationValue.Nangang,
        zip: '115',
      },
      {
        name: TaipeiLocationValue.Wenshan,
        zip: '116',
      },
    ],
  },
  {
    city: TaiwanCities.Kaohsiung,
    districts: [
      {
        name: KaohsiungLocationValue.Xinxing,
        zip: '800',
      },
      {
        name: KaohsiungLocationValue.Qianjin,
        zip: '801',
      },
      {
        name: KaohsiungLocationValue.Lingya,
        zip: '802',
      },
      {
        name: KaohsiungLocationValue.Yancheng,
        zip: '803',
      },
      {
        name: KaohsiungLocationValue.Gushan,
        zip: '804',
      },
      {
        name: KaohsiungLocationValue.Qijin,
        zip: '805',
      },
      {
        name: KaohsiungLocationValue.Qianzhen,
        zip: '806',
      },
      {
        name: KaohsiungLocationValue.Sanmin,
        zip: '807',
      },
      {
        name: KaohsiungLocationValue.Nanzi,
        zip: '811',
      },
      {
        name: KaohsiungLocationValue.Xiaogang,
        zip: '812',
      },
      {
        name: KaohsiungLocationValue.Zuoying,
        zip: '813',
      },
      {
        name: KaohsiungLocationValue.Renwu,
        zip: '814',
      },
      {
        name: KaohsiungLocationValue.Dashe,
        zip: '815',
      },
      {
        name: KaohsiungLocationValue.Gangshan,
        zip: '820',
      },
      {
        name: KaohsiungLocationValue.Luzhu,
        zip: '821',
      },
      {
        name: KaohsiungLocationValue.Alian,
        zip: '822',
      },
      {
        name: KaohsiungLocationValue.Tianliao,
        zip: '823',
      },
      {
        name: KaohsiungLocationValue.Yanchao,
        zip: '824',
      },
      {
        name: KaohsiungLocationValue.Qiaotou,
        zip: '825',
      },
      {
        name: KaohsiungLocationValue.Ziguan,
        zip: '826',
      },
      {
        name: KaohsiungLocationValue.Mido,
        zip: '827',
      },
      {
        name: KaohsiungLocationValue.Yongan,
        zip: '828',
      },
      {
        name: KaohsiungLocationValue.Hunei,
        zip: '829',
      },
      {
        name: KaohsiungLocationValue.Fengshan,
        zip: '830',
      },
      {
        name: KaohsiungLocationValue.Daliao,
        zip: '831',
      },
      {
        name: KaohsiungLocationValue.Linyuan,
        zip: '832',
      },
      {
        name: KaohsiungLocationValue.Niaosong,
        zip: '833',
      },
      {
        name: KaohsiungLocationValue.Dashu,
        zip: '840',
      },
      {
        name: KaohsiungLocationValue.Qishan,
        zip: '842',
      },
      {
        name: KaohsiungLocationValue.Mino,
        zip: '843',
      },
      {
        name: KaohsiungLocationValue.Liugui,
        zip: '844',
      },
      {
        name: KaohsiungLocationValue.Neimen,
        zip: '845',
      },
      {
        name: KaohsiungLocationValue.Shanlin,
        zip: '846',
      },
      {
        name: KaohsiungLocationValue.Jiaxian,
        zip: '847',
      },
      {
        name: KaohsiungLocationValue.Taoyuan,
        zip: '848',
      },
      {
        name: KaohsiungLocationValue.Namasia,
        zip: '849',
      },
      {
        name: KaohsiungLocationValue.Maolin,
        zip: '851',
      },
      {
        name: KaohsiungLocationValue.Qieding,
        zip: '852',
      },
    ],
  },
  {
    city: TaiwanCities.NewTaipei,
    districts: [
      {
        name: NewTaipeiLocationValue.Wanli,
        zip: '207',
      },
      {
        name: NewTaipeiLocationValue.Jinshan,
        zip: '208',
      },
      {
        name: NewTaipeiLocationValue.Banqiao,
        zip: '220',
      },
      {
        name: NewTaipeiLocationValue.Xizhi,
        zip: '221',
      },
      {
        name: NewTaipeiLocationValue.Shenkeng,
        zip: '222',
      },
      {
        name: NewTaipeiLocationValue.Shiding,
        zip: '223',
      },
      {
        name: NewTaipeiLocationValue.Ruifang,
        zip: '224',
      },
      {
        name: NewTaipeiLocationValue.Pingxi,
        zip: '226',
      },
      {
        name: NewTaipeiLocationValue.Shuangxi,
        zip: '227',
      },
      {
        name: NewTaipeiLocationValue.Gongliao,
        zip: '228',
      },
      {
        name: NewTaipeiLocationValue.Xindian,
        zip: '231',
      },
      {
        name: NewTaipeiLocationValue.Pinglin,
        zip: '232',
      },
      {
        name: NewTaipeiLocationValue.Wulai,
        zip: '233',
      },
      {
        name: NewTaipeiLocationValue.Yonghe,
        zip: '234',
      },
      {
        name: NewTaipeiLocationValue.Zhonghe,
        zip: '235',
      },
      {
        name: NewTaipeiLocationValue.Tucheng,
        zip: '236',
      },
      {
        name: NewTaipeiLocationValue.Sanxia,
        zip: '237',
      },
      {
        name: NewTaipeiLocationValue.Woodland,
        zip: '238',
      },
      {
        name: NewTaipeiLocationValue.Yingge,
        zip: '239',
      },
      {
        name: NewTaipeiLocationValue.Sanchong,
        zip: '241',
      },
      {
        name: NewTaipeiLocationValue.Xinzhuang,
        zip: '242',
      },
      {
        name: NewTaipeiLocationValue.Taishan,
        zip: '243',
      },
      {
        name: NewTaipeiLocationValue.Linkou,
        zip: '244',
      },
      {
        name: NewTaipeiLocationValue.Luzhou,
        zip: '247',
      },
      {
        name: NewTaipeiLocationValue.Wugu,
        zip: '248',
      },
      {
        name: NewTaipeiLocationValue.Bali,
        zip: '249',
      },
      {
        name: NewTaipeiLocationValue.Tamsui,
        zip: '251',
      },
      {
        name: NewTaipeiLocationValue.Sanzhi,
        zip: '252',
      },
      {
        name: NewTaipeiLocationValue.Shimen,
        zip: '253',
      },
    ],
  },
  {
    city: TaiwanCities.Taichung,
    districts: [
      {
        name: TaichungLocationValue.Central,
        zip: '400',
      },
      {
        name: TaichungLocationValue.East,
        zip: '401',
      },
      {
        name: TaichungLocationValue.South,
        zip: '402',
      },
      {
        name: TaichungLocationValue.Western,
        zip: '403',
      },
      {
        name: TaichungLocationValue.North,
        zip: '404',
      },
      {
        name: TaichungLocationValue.Beitun,
        zip: '406',
      },
      {
        name: TaichungLocationValue.Xitun,
        zip: '407',
      },
      {
        name: TaichungLocationValue.Nantun,
        zip: '408',
      },
      {
        name: TaichungLocationValue.Taiping,
        zip: '411',
      },
      {
        name: TaichungLocationValue.Dali,
        zip: '412',
      },
      {
        name: TaichungLocationValue.Wufeng,
        zip: '413',
      },
      {
        name: TaichungLocationValue.Uri,
        zip: '414',
      },
      {
        name: TaichungLocationValue.Fengyuan,
        zip: '420',
      },
      {
        name: TaichungLocationValue.Houli,
        zip: '421',
      },
      {
        name: TaichungLocationValue.Shigang,
        zip: '422',
      },
      {
        name: TaichungLocationValue.Dongshi,
        zip: '423',
      },
      {
        name: TaichungLocationValue.Heping,
        zip: '424',
      },
      {
        name: TaichungLocationValue.Xinshe,
        zip: '426',
      },
      {
        name: TaichungLocationValue.Tanzi,
        zip: '427',
      },
      {
        name: TaichungLocationValue.Daya,
        zip: '428',
      },
      {
        name: TaichungLocationValue.Shengang,
        zip: '429',
      },
      {
        name: TaichungLocationValue.Dadu,
        zip: '432',
      },
      {
        name: TaichungLocationValue.Shalu,
        zip: '433',
      },
      {
        name: TaichungLocationValue.Longjing,
        zip: '434',
      },
      {
        name: TaichungLocationValue.Wuqi,
        zip: '435',
      },
      {
        name: TaichungLocationValue.Qingshui,
        zip: '436',
      },
      {
        name: TaichungLocationValue.Dajia,
        zip: '437',
      },
      {
        name: TaichungLocationValue.Waipu,
        zip: '438',
      },
      {
        name: TaichungLocationValue.Daan,
        zip: '439',
      },
    ],
  },
  {
    city: TaiwanCities.Tainan,
    districts: [
      {
        name: TaiNanValue.WestCentral,
        zip: '700',
      },
      {
        name: TaiNanValue.Eastern,
        zip: '701',
      },
      {
        name: TaiNanValue.South,
        zip: '702',
      },
      {
        name: TaiNanValue.North,
        zip: '704',
      },
      {
        name: TaiNanValue.Anping,
        zip: '708',
      },
      {
        name: TaiNanValue.Annan,
        zip: '709',
      },
      {
        name: TaiNanValue.Yongkang,
        zip: '710',
      },
      {
        name: TaiNanValue.Guiren,
        zip: '711',
      },
      {
        name: TaiNanValue.Xinhua,
        zip: '712',
      },
      {
        name: TaiNanValue.Zuozhen,
        zip: '713',
      },
      {
        name: TaiNanValue.Yujing,
        zip: '714',
      },
      {
        name: TaiNanValue.Nanxi,
        zip: '715',
      },
      {
        name: TaiNanValue.Nanhua,
        zip: '716',
      },
      {
        name: TaiNanValue.Rende,
        zip: '717',
      },
      {
        name: TaiNanValue.Guanmiao,
        zip: '718',
      },
      {
        name: TaiNanValue.Longci,
        zip: '719',
      },
      {
        name: TaiNanValue.Guantian,
        zip: '720',
      },
      {
        name: TaiNanValue.Madou,
        zip: '721',
      },
      {
        name: TaiNanValue.Jiali,
        zip: '722',
      },
      {
        name: TaiNanValue.Westport,
        zip: '723',
      },
      {
        name: TaiNanValue.Qigu,
        zip: '724',
      },
      {
        name: TaiNanValue.Jiangjun,
        zip: '725',
      },
      {
        name: TaiNanValue.Xuejia,
        zip: '726',
      },
      {
        name: TaiNanValue.Beimen,
        zip: '727',
      },
      {
        name: TaiNanValue.Xinying,
        zip: '730',
      },
      {
        name: TaiNanValue.Houbi,
        zip: '731',
      },
      {
        name: TaiNanValue.Baihe,
        zip: '732',
      },
      {
        name: TaiNanValue.Dongshan,
        zip: '733',
      },
      {
        name: TaiNanValue.Liujia,
        zip: '734',
      },
      {
        name: TaiNanValue.Xiaying,
        zip: '735',
      },
      {
        name: TaiNanValue.Liuying,
        zip: '736',
      },
      {
        name: TaiNanValue.Yanshuei,
        zip: '737',
      },
      {
        name: TaiNanValue.Shanhua,
        zip: '741',
      },
      {
        name: TaiNanValue.Xinshi,
        zip: '744',
      },
      {
        name: TaiNanValue.Danei,
        zip: '742',
      },
      {
        name: TaiNanValue.Shanshang,
        zip: '743',
      },
      {
        name: TaiNanValue.Anding,
        zip: '745',
      },
    ],
  },
  {
    city: TaiwanCities.Taitung,
    districts: [
      {
        name: TaitungLocationValue.TaitungCity,
        zip: '950',
      },
      {
        name: TaitungLocationValue.Ludao,
        zip: '951',
      },
      {
        name: TaitungLocationValue.Lanyu,
        zip: '952',
      },
      {
        name: TaitungLocationValue.Yanping,
        zip: '953',
      },
      {
        name: TaitungLocationValue.Beinan,
        zip: '954',
      },
      {
        name: TaitungLocationValue.Luye,
        zip: '955',
      },
      {
        name: TaitungLocationValue.Guanshan,
        zip: '956',
      },
      {
        name: TaitungLocationValue.Haiduan,
        zip: '957',
      },
      {
        name: TaitungLocationValue.Chishang,
        zip: '958',
      },
      {
        name: TaitungLocationValue.Donghe,
        zip: '959',
      },
      {
        name: TaitungLocationValue.Chenggong,
        zip: '961',
      },
      {
        name: TaitungLocationValue.Changbin,
        zip: '962',
      },
      {
        name: TaitungLocationValue.Taimali,
        zip: '963',
      },
      {
        name: TaitungLocationValue.Jinfeng,
        zip: '964',
      },
      {
        name: TaitungLocationValue.Dawu,
        zip: '965',
      },
      {
        name: TaitungLocationValue.Daren,
        zip: '966',
      },
    ],
  },
  {
    city: TaiwanCities.Taichung,
    districts: [
      {
        name: TaichungLocationValue.Western,
        zip: '',
      },
      {
        name: TaichungLocationValue.East,
        zip: '',
      },
    ],
  },
];
