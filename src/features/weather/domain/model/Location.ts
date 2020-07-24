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
  MiaoliLocationValue |
  ChanghuaLocationValue |
  NantouLocationValue |
  YunlinLocationValue |
  ChiayiLocationValue |
  PingtungLocationValue |
  TaitungLocationValue |
  HualienLocationValue |
  PenghuLocationValue |
  KeelungLocationValue |
  TaipeiLocationValue |
  KaohsiungLocationValue |
  NewTaipeiLocationValue |
  TaichungLocationValue |
  TaiNanValue |
  LianjiangValue |
  KinmenValue;

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
  Lianjiang = '連江縣',
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
export enum MiaoliLocationValue { // 苗栗
  Zhunan = '竹南鎮',
  Toufen = '頭份市',
  Sanwan = '三灣鄉',
  Zaoqiao = '造橋鄉',
  Houlong = '後龍鎮',
  Nanzhuang = '南庄鄉',
  Touwu = '頭屋鄉',
  Shitan = '獅潭鄉',
  MiaoliCity = '苗栗市',
  Xihu = '西湖鄉',
  Tongxiao = '通霄鎮',
  Gongguan = '公館鄉',
  Tongluo = '銅鑼鄉',
  Taian = '泰安鄉',
  Yuanli = '苑裡鎮',
  Dahu = '大湖鄉',
  Sanyi = '三義鄉',
  Zhuolan = '卓蘭鎮',
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
export enum NantouLocationValue { // 南投
  Renai = '仁愛鄉',
  Guoxing = '國姓鄉',
  Puli = '埔里鎮',
  Caotun = '草屯鎮',
  Zhongliao = '中寮鄉',
  NantouCity = '南投市',
  Yuchi = '魚池鄉',
  Shuili = '水里鄉',
  Mingjian = '名間鄉',
  Xinyi = '信義鄉',
  Jiji = '集集鎮',
  Zhushan = '竹山鎮',
  Lugu = '鹿谷鄉',
};
export enum YunlinLocationValue { // 雲林
  Mailiao = '麥寮鄉',
  Erlun = '二崙鄉',
  Lunbei = '崙背鄉',
  Xiluo = '西螺鎮',
  Cihtong = '莿桐鄉',
  Linnei = '林內鄉',
  Taixi = '臺西鄉',
  Tukuzhen = '土庫鎮',
  Huwei = '虎尾鎮',
  Baozhong = '褒忠鄉',
  Dongshi = '東勢鄉',
  Dounan = '斗南鎮',
  Sihu = '四湖鄉',
  Gukeng = '古坑鄉',
  Yuanchang = '元長鄉',
  Dapi = '大埤鄉',
  Kouhu = '口湖鄉',
  Beigang = '北港鎮',
  Shuilin = '水林鄉',
  Douliu = '斗六市',
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
export enum PingtungLocationValue { // 屏東
  Gaoshu = '高樹鄉',
  Sandimen = '三地門鄉',
  Wutai = '霧臺鄉',
  Ligang = '里港鄉',
  Yanpu = '鹽埔鄉',
  Jiuru = '九如鄉',
  Changzhi = '長治鄉',
  Majia = '瑪家鄉',
  PingtungCity = '屏東市',
  Neipu = '內埔鄉',
  Linluo = '麟洛鄉',
  Taiwu = '泰武鄉',
  Wanluan = '萬巒鄉',
  Zhutian = '竹田鄉',
  Wandan = '萬丹鄉',
  Laiyi = '來義鄉',
  Chaozhou = '潮州鎮',
  Xinyuan = '新園鄉',
  Kanding = '崁頂鄉',
  Xinpi = '新埤鄉',
  Nanzhou = '南州鄉',
  Donggang = '東港鎮',
  Linbian = '林邊鄉',
  Jiadong = '佳冬鄉',
  Chunri = '春日鄉',
  Lion = '獅子鄉',
  Liuqiu = '琉球鄉',
  Fangshan = '枋山鄉',
  Mudan = '牡丹鄉',
  Manzhou = '滿州鄉',
  Checheng = '車城鄉',
  Hengchun = '恆春鎮',
  Fangliao = '枋寮鄉',
};
export enum TaitungLocationValue { // 台東
  Changbin = '長濱鄉',
  Haiduan = '海端鄉',
  Chishang = '池上鄉',
  Chenggong = '成功鎮',
  Guanshan = '關山鎮',
  Donghe = '東河鄉',
  Luye = '鹿野鄉',
  Yanping = '延平鄉',
  Beinan = '卑南鄉',
  TaitungCity = '臺東市',
  Taimali = '太麻里鄉',
  Ludao = '綠島鄉',
  Daren = '達仁鄉',
  Dawu = '大武鄉',
  Lanyu = '蘭嶼鄉',
  Jinfeng = '金峰鄉',
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
export enum PenghuLocationValue { // 澎湖
  Baisha = '白沙鄉',
  Siyu = '西嶼鄉',
  Huxi = '湖西鄉',
  Magong = '馬公市',
  Wangan = '望安鄉',
  Qimei = '七美鄉',
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
export enum KaohsiungLocationValue { // 高雄
  Nanzi = '楠梓區',
  Zuoying = '左營區',
  Sanmin = '三民區',
  Gushan = '鼓山區',
  Lingya = '苓雅區',
  Xinxing = '新興區',
  Qianjin = '前金區',
  Yancheng = '鹽埕區',
  Qianzhen = '前鎮區',
  Qijin = '旗津區',
  Xiaogang = '小港區',
  Namasia = '那瑪夏區',
  Jiaxian = '甲仙區',
  Liugui = '六龜區',
  Shanlin = '杉林區',
  Neimen = '內門區',
  Maolin = '茂林區',
  Mino = '美濃區',
  Qishan = '旗山區',
  Tianliao = '田寮區',
  Hunei = '湖內區',
  Qieding = '茄萣區',
  Alian = '阿蓮區',
  Luzhu = '路竹區',
  Yongan = '永安區',
  Gangshan = '岡山區',
  Yanchao = '燕巢區',
  Mido = '彌陀區',
  Qiaotou = '橋頭區',
  Dashu = '大樹區',
  Ziguan = '梓官區',
  Dashe = '大社區',
  Renwu = '仁武區',
  Niaosong = '鳥松區',
  Daliao = '大寮區',
  Fengshan = '鳳山區',
  Linyuan = '林園區',
  Taoyuan = '桃源區',
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
export enum LianjiangValue { // 連江
  Nangan = '南竿鄉',
  Beigan = '北竿鄉',
  Jyuguang = '莒光鄉',
  Dongyin = '東引鄉',
}
export enum KinmenValue { // 金門
  Golden = '金城鎮',
  Jinhu = '金湖鎮',
  Jinsha = '金沙鎮',
  Jinning = '金寧鄉',
  Lieyu = '烈嶼鄉',
  Wuqiu = '烏坵鄉',
}
