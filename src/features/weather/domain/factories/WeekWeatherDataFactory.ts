import { WeekTemperature, WXType } from "src/features/weather/domain/model/Weather";
import { ElementName, WeatherElementItem } from "src/features/weather/domain/model/WeatherElement";
import moment, { Moment } from "moment";
import { WeatherDataFactory } from "./WeatherDataFactory";

interface WXArray {
  dayName: Moment;
  wXIcon: string;
};
export class WeekWeatherDataFactory {
  static createWeekDataFromNet(data): WeekTemperature[] {
    const {
      weatherElement,
    } = data;

    const wXArray = this.createWXArray(weatherElement);
    console.log(wXArray)

    // const result = wXTimeArray.map();


    return
  }

  static createWXArray(weatherElement: WeatherElementItem[]): WXArray[] {
    const timeArray = this.findElement(weatherElement, ElementName.Wx).time;

    // 找出星期幾
    const filterWithStartTime = timeArray.filter(item => {
      const startTimeHour = moment(item.startTime).format('HH')
      return startTimeHour === '18'
    });

    // 每天的日期
    const dateArray = filterWithStartTime.map(item => moment(item.startTime).locale('zh-tw').format('yyyy-MM-DD'));

    const wXArray = dateArray.map((date, index) => {
      const filterDay = timeArray.filter(time => {
        const timeDate = moment(time.startTime).locale('zh-tw').format('yyyy-MM-DD')
        return timeDate === date
      });
      // 轉成「星期幾」
      const dayName = moment(date).locale('zh-tw').format('dddd')
      return {
        dayName: dayName as unknown as Moment,
        wXIcon: WeatherDataFactory.createWXIcon(filterDay[0].elementValue[0].value as WXType)
      }
    });
    return wXArray
  }

  static findElement(weatherElement: WeatherElementItem[], type: ElementName): WeatherElementItem {
    const result = weatherElement.find(item => item.elementName === type)
    return result
  }
}
