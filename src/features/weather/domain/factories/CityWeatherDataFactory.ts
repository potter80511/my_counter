import { WXType, CurrentDayDetails, TodayEveryHour } from 'src/features/weather/domain/model/Weather';
import {
  WeatherElementItem,
  ElementName,
  ElementTime,
  ExtremeType
} from 'src/features/weather/domain/model/WeatherElement';
import {
  WeatherDataFactory,
} from 'src/features/weather/domain/factories/WeatherDataFactory';
import moment from 'moment';

export class CityWeatherDataFactory {
  static createCurrentDayDataFromNet(data, inputIndex: number): CurrentDayDetails {
    const {
      locationName,
      weatherElement,
    } = data;

    const wX = this.getCurrentWx(weatherElement);
    const currentTemperature = this.getCityAverageT(weatherElement);
    const minT = this.getExtremeT(weatherElement, ElementName.MinT);
    const maxT = this.getExtremeT(weatherElement, ElementName.MaxT);
    const todayEveryHourArray = this.createCityTodayEveryHourArray(weatherElement);
    const weatherBackgroundImage = WeatherDataFactory.createBackground(wX);

    return {
      inputIndex,
      locationName,
      wX,
      currentTemperature,
      minT,
      maxT,
      todayEveryHourArray,
      weatherBackgroundImage,
    };
  }

  static getCurrentWx(weatherElement: WeatherElementItem[]): WXType {
    const wxData = weatherElement.find(item => item.elementName === ElementName.Wx);
    // console.log(wxData)
    if (wxData) {
      const wx = wxData.time[0].parameter.parameterName as WXType
      return wx;
    }
  }

  static getCityAverageT(weatherElement: WeatherElementItem[]): string {
    const averageMinT = this.getAverageT(weatherElement, ExtremeType.Min);
    const averageMaxT = this.getAverageT(weatherElement, ExtremeType.Max);
    const averageT = (averageMinT + averageMaxT) / 2;
    return WeatherDataFactory.createTemperature(String(Math.round(averageT)));
  }

  static getAverageT(weatherElement: WeatherElementItem[], tType: ExtremeType): number {
    switch (tType) {
      case ExtremeType.Min: {
        const tData = weatherElement.find(item => item.elementName === ElementName.MinT);
        if (tData) {
          const timeArray = tData.time;
          let sum = 0;
          timeArray.forEach(item => {
            sum = sum + Number(item.parameter.parameterName)
          })
          const averageMinT = sum / timeArray.length;
          return averageMinT;
        }
      }
      case ExtremeType.Max: {
        const tData = weatherElement.find(item => item.elementName === ElementName.MaxT);
        if (tData) {
          const timeArray = tData.time;
          let sum = 0;
          timeArray.forEach(item => {
            sum = sum + Number(item.parameter.parameterName)
          })
          const averageMaxT = sum / timeArray.length;
          return averageMaxT;
        }
      }
    }
  }

  static getExtremeT(weatherElement: WeatherElementItem[], type: ElementName): string {
    const element = weatherElement.find(item => item.elementName === type);
    return element.time[0].parameter.parameterName;
  }

  static createCityTodayEveryHourArray(weatherElement: WeatherElementItem[]): TodayEveryHour[] {
    const minT = weatherElement.find(item => item.elementName === ElementName.MinT);
    const maxT = weatherElement.find(item => item.elementName === ElementName.MaxT);
    const currentWx = weatherElement.find(item => item.elementName === ElementName.Wx);
    let minTTimeArray: ElementTime[] = [];
    let maxTTimeArray: ElementTime[] = [];
    let wXTimeArray: ElementTime[] = [];

    if (minT) {
      minTTimeArray = minT.time;
    }
    if (maxT) {
      maxTTimeArray = maxT.time;
    }
    if (currentWx) {
      wXTimeArray = currentWx.time;
    }

    const result = minTTimeArray.map((item, index) => {
      const averageT = (Number(item.parameter.parameterName) + Number(maxTTimeArray[index].parameter.parameterName)) / 2;
      return {
        hourName: WeatherDataFactory.createEachHour(wXTimeArray[index].startTime),
        wXIcon: WeatherDataFactory.createWXIcon(wXTimeArray[index].parameter.parameterName as WXType),
        temperature: WeatherDataFactory.createTemperature(String(averageT)),
      }
    });
    return result;
  }

};
