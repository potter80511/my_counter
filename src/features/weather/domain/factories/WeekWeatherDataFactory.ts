import {
  WeekTemperature,
  WXType,
} from 'src/features/weather/domain/model/Weather';
import {
  ElementName,
  WeatherElementItem,
  ElementTime,
} from 'src/features/weather/domain/model/WeatherElement';
import moment from 'moment';
import { WeatherDataFactory } from './WeatherDataFactory';

interface WXArray {
  dayName: string;
  wX: WXType;
  wXIcon: string;
}
export class WeekWeatherDataFactory {
  static createWeekDataFromNet(data): WeekTemperature[] {
    const { weatherElement } = data;

    const wXArray = this.createWXArray(weatherElement);
    const minTArray = this.createAverageExtremeT(
      weatherElement,
      ElementName.MinT,
    );
    const maxTArray = this.createAverageExtremeT(
      weatherElement,
      ElementName.MaxT,
    );

    return wXArray.map((item, index) => ({
      ...item,
      minT: minTArray[index],
      maxT: maxTArray[index],
    }));
  }

  static createWXArray(weatherElement: WeatherElementItem[]): WXArray[] {
    const timeArray = this.findElement(weatherElement, ElementName.Wx).time;

    // 每天的日期
    const dateArray = this.createDateArray(timeArray);

    const wXArray = dateArray.map(date => {
      const filterDay = timeArray.filter(time => {
        const timeDate = moment(time.startTime)
          .locale('zh-tw')
          .format('yyyy-MM-DD');
        return timeDate === date;
      });
      // console.log(filterDay)
      // 轉成「星期幾」
      const dayName = moment(date).locale('zh-tw').format('dddd');
      return {
        dayName,
        wX: filterDay[0].elementValue[0].value as WXType,
        wXIcon: WeatherDataFactory.createWXIcon(
          filterDay[0].elementValue[0].value as WXType,
        ),
      };
    });
    return wXArray;
  }

  static createAverageExtremeT(
    weatherElement: WeatherElementItem[],
    type: ElementName,
  ) {
    const timeArray = this.findElement(weatherElement, type).time;

    // 每天的日期
    const dateArray = this.createDateArray(timeArray);

    const averageTArray = [];

    dateArray.forEach(date => {
      const filterDay = timeArray.filter(time => {
        const timeDate = moment(time.startTime)
          .locale('zh-tw')
          .format('yyyy-MM-DD');
        return timeDate === date;
      });
      let sum = 0;

      filterDay.forEach(item => {
        sum += Number(item.elementValue[0].value);
      });
      const averageT = sum / filterDay.length;
      averageTArray.push(String(averageT));
    });
    return averageTArray.map(item =>
      WeatherDataFactory.createTemperature(item),
    );
  }

  static findElement(
    weatherElement: WeatherElementItem[],
    type: ElementName,
  ): WeatherElementItem {
    const result = weatherElement.find(item => item.elementName === type);
    return result;
  }

  static createDateArray(timeArray: ElementTime[]): string[] {
    // 找出星期幾
    const filterWithStartTime = timeArray.filter(item => {
      const startTimeHour = moment(item.startTime).format('HH');
      return startTimeHour === '18';
    });

    // 每天的日期
    const dateArray = filterWithStartTime.map(item =>
      moment(item.startTime).locale('zh-tw').format('yyyy-MM-DD'),
    );
    return dateArray;
  }
}
