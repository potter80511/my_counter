import { WeekTemperature, WXType } from "src/features/weather/domain/model/Weather";
import { ElementName, WeatherElementItem } from "src/features/weather/domain/model/WeatherElement";
import moment from "moment";


export class WeekWeatherDataFactory {
  static createCurrentDayDataFromNet(data): WeekTemperature[] {
    const {
      weatherElement,
    } = data;

    const wXArray = this.createWXArray(weatherElement);

    // const result = wXTimeArray.map();


    return
  }

  static createWXArray(weatherElement: WeatherElementItem[]) {
    const timeArray = this.findElement(weatherElement, ElementName.Wx).time;
    const newTimeArray = timeArray.map((item, index) => {
      return {
        ...item,
        index
      }
    });

    // const filterWithStartTime

    // 找出星期幾
    const filterWithEndTime = timeArray.filter(item => {
      const endTimeHour = moment(item.endTime).format('HH')
      return endTimeHour === '18'
    });
    const timeNameArray = filterWithEndTime.map(item =>
      moment(item.endTime).locale('zh-tw').format('dddd')
    );

    // filterWithEndTime.map(item => {
    //   const
    // });
    console.log(timeArray)
    console.log(filterWithEndTime)
    console.log(timeNameArray)
  }

  static findElement(weatherElement: WeatherElementItem[], type: ElementName): WeatherElementItem {
    const result = weatherElement.find(item => item.elementName = type)
    return result
  }
}
