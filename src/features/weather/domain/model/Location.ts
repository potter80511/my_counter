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
  YilanLocationValue |
  TaoyuanLocationValue |
  HsinchuLocationValue |
  ChanghuaLocationValue |
  ChiayiLocationValue |
  HualienLocationValue |
  KeelungLocationValue |
  TaipeiLocationValue |
  NewTaipeiLocationValue |
  TaichungLocationValue |
  TaiNanValue;

export enum TaiwanCities {
  Yilan = '宜蘭縣',
  Taoyuan = '桃園市',
  Hsinchu = '新竹縣',
  Miaoli = '苗栗縣',
  Changhua = '彰化縣',
  Nantou = '南投縣',
  Yunlin = '雲林縣',
  Chiayi = '嘉義縣',
  Pingtung = '屏東縣',
  Taitung = '臺東縣',
  Hualien = '花蓮縣',
  Penghu = '澎湖縣',
  Keelung = '基隆市',
  HsinchuCity = '新竹市',
  ChiayiCity = '嘉義市',
  Taipei = '臺北市',
  Kaohsiung = '高雄市',
  NewTaipei = '新北市',
  Taichung = '臺中市',
  Tainan = '臺南市',
  Kinmen = '金門縣',
};

export enum YilanLocationValue { // 宜蘭
  YilanCity = '宜蘭市',
  LuoDong = '羅東鎮',
  Suao = '蘇澳鎮',
  Toucheng = '頭城鎮',
  Jiaoxi = '礁溪鄉',
  ZhuangWai = '壯圍鄉',
  Yuanshan = '員山鄉',
  Dongshan = '冬山鄉',
  Wujie = '五結鄉',
  Sunshin = '三星鄉',
  Datong = '大同鄉',
  NanAo = '南澳鄉',
};
export enum TaoyuanLocationValue { // 桃園
  Zhongli = '中壢區',
  Pingzhen = '平鎮區',
  Longtan = '龍潭區',
  Yangmei = '楊梅區',
  Xinwu = '新屋區',
  Guanyin = '觀音區',
  TaoyuanArea = '桃園區',
  Guishan = '龜山區',
  Bade = '八德區',
  Daxi = '大溪區',
  Fuxing = '復興區',
  Dayuan = '大園區',
  Luzhu = '蘆竹區',
};
export enum HsinchuLocationValue { // 新竹
  Xinfeng = '新豐鄉',
  Hukou = '湖口鄉',
  Xinpu = '新埔鎮',
  Zhubei = '竹北市',
  Kansai = '關西鎮',
  Qionglin = '芎林鄉',
  Zhudong = '竹東鎮',
  Baoshan = '寶山鄉',
  Jianshi = '尖石鄉',
  Hengshan = '橫山鄉',
  Beipu = '北埔鄉',
  Emei = '峨眉鄉',
  Wufeng = '五峰鄉',
  North = '北區',
  Xiangshan = '香山區',
  Eastern = '東區',
};
export enum ChanghuaLocationValue { // 彰化
  Shengang = '伸港鄉',
  Hemei = '和美鎮',
  Xianxixiang = '線西鄉',
  Lugang = '鹿港鎮',
  ChanghuaCity = '彰化市',
  Xiushui = '秀水鄉',
  Fuxing = '福興鄉',
  Huatan = '花壇鄉',
  Fenyuan = '芬園鄉',
  Fangyuan = '芳苑鄉',
  Puyan = '埔鹽鄉',
  Dacun = '大村鄉',
  Erlin = '二林鎮',
  Yuanlin = '員林市',
  Xihu = '溪湖鎮',
  Puxin = '埔心鄉',
  Yongjing = '永靖鄉',
  Shetou = '社頭鄉',
  Pitou = '埤頭鄉',
  Tianwei = '田尾鄉',
  Dacheng = '大城鄉',
  Tianzhong = '田中鎮',
  Beidou = '北斗鎮',
  Zhutang = '竹塘鄉',
  Xizhou = '溪州鄉',
  Ershui = '二水鄉',
};
export enum ChiayiLocationValue { // 嘉義
  Dalin = '大林鎮',
  Xikou = '溪口鄉',
  Alishan = '阿里山鄉',
  Meishan = '梅山鄉',
  Xingang = '新港鄉',
  Minxiong = '民雄鄉',
  Liujiao = '六腳鄉',
  Zhuqi = '竹崎鄉',
  Dongshi = '東石鄉',
  Taibao = '太保市',
  Fanlu = '番路鄉',
  Puzishi = '朴子市',
  Shuishang = '水上鄉',
  Zhongpu = '中埔鄉',
  Budai = '布袋鎮',
  Lucao = '鹿草鄉',
  Yizhu = '義竹鄉',
  Dapu = '大埔鄉',
  Eastern = '東區',
  West = '西區',
};
export enum HualienLocationValue { // 花蓮
  Xiulin = '秀林鄉',
  Xincheng = '新城鄉',
  HualienCity = '花蓮市',
  Jian = '吉安鄉',
  Shoufeng = '壽豐鄉',
  Wanrung = '萬榮鄉',
  Fenglin = '鳳林鎮',
  Fengbin = '豐濱鄉',
  Guangfu = '光復鄉',
  Zhuoxi = '卓溪鄉',
  Ruisui = '瑞穗鄉',
  Yuli = '玉里鎮',
  Fuli = '富里鄉',
};
export enum KeelungLocationValue { // 基隆
  Anle = '安樂區',
  Zhongshan = '中山區',
  Zhongzheng = '中正區',
  Qidu = '七堵區',
  Xinyi = '信義區',
  RenAi = '仁愛區',
  Nuannuan = '暖暖區',
};
export enum TaipeiLocationValue { // 台北
  Zhongzheng = '中正區',
  Datong = '大同區',
  Zhongshan = '中山區',
  Songshan = '松山區',
  Daan = '大安區',
  Wanhua = '萬華區',
  Xinyi = '信義區',
  Shilin = '士林區',
  Beitou = '北投區',
  Neihu = '內湖區',
  Nangang = '南港區',
  Wenshan = '文山區',
};
export enum NewTaipeiLocationValue { // 新北
  Wanli = '萬里區',
  Jinshan = '金山區',
  Banqiao = '板橋區',
  Xizhi = '汐止區',
  Shenkeng = '深坑區',
  Shiding = '石碇區',
  Ruifang = '瑞芳區',
  Pingxi = '平溪區',
  Shuangxi = '雙溪區',
  Gongliao = '貢寮區',
  Xindian = '新店區',
  Pinglin = '坪林區',
  Wulai = '烏來區',
  Yonghe = '永和區',
  Zhonghe = '中和區',
  Tucheng = '土城區',
  Sanxia = '三峽區',
  Woodland = '樹林區',
  Yingge = '鶯歌區',
  Sanchong = '三重區',
  Xinzhuang = '新莊區',
  Taishan = '泰山區',
  Linkou = '林口區',
  Luzhou = '蘆洲區',
  Wugu = '五股區',
  Bali = '八里區',
  Tamsui = '淡水區',
  Sanzhi = '三芝區',
  Shimen = '石門區',
};
export enum TaichungLocationValue { // 台中
  Beitun = '北屯區',
  Xitun = '西屯區',
  North = '北區',
  Nantun = '南屯區',
  Western = '西區',
  East = '東區',
  Central = '中區',
  South = '南區',
  Heping = '和平區',
  Dajia = '大甲區',
  Daan = '大安區',
  Waipu = '外埔區',
  Houli = '后里區',
  Qingshui = '清水區',
  Dongshi = '東勢區',
  Shengang = '神岡區',
  Longjing = '龍井區',
  Shigang = '石岡區',
  Fengyuan = '豐原區',
  Wuqi = '梧棲區',
  Xinshe = '新社區',
  Shalu = '沙鹿區',
  Daya = '大雅區',
  Tanzi = '潭子區',
  Dadu = '大肚區',
  Taiping = '太平區',
  Uri = '烏日區',
  Dali = '大里區',
  Wufeng = '霧峰區',
};
export enum TaiNanValue { // 台南
  Annan = '安南區',
  WestCentral = '中西區',
  Anping = '安平區',
  Eastern = '東區',
  South = '南區',
  North = '北區',
  Baihe = '白河區',
  Houbi = '後壁區',
  Yanshuei = '鹽水區',
  Xinying = '新營區',
  Dongshan = '東山區',
  Beimen = '北門區',
  Liuying = '柳營區',
  Xuejia = '學甲區',
  Xiaying = '下營區',
  Liujia = '六甲區',
  Nanhua = '南化區',
  Jiangjun = '將軍區',
  Nanxi = '楠西區',
  Madou = '麻豆區',
  Guantian = '官田區',
  Jiali = '佳里區',
  Danei = '大內區',
  Qigu = '七股區',
  Yujing = '玉井區',
  Shanhua = '善化區',
  Westport = '西港區',
  Shanshang = '山上區',
  Anding = '安定區',
  Xinshi = '新市區',
  Zuozhen = '左鎮區',
  Xinhua = '新化區',
  Yongkang = '永康區',
  Guiren = '歸仁區',
  Guanmiao = '關廟區',
  Longci = '龍崎區',
  Rende = '仁德區',
}
