import { WXType, CurrentDayDetails, TodayEveryHour } from 'src/features/weather/domain/model/Weather';
import { WeatherElementItem, ElementName, ElementTime } from 'src/features/weather/domain/model/WeatherElement';
import moment from 'moment';

enum TType {
  Min = 'min',
  Max = 'max',
}

export class CityWeatherDataFactory {
  static createCurrentDayDataFromNet(data): CurrentDayDetails {
    const {
      locationName,
      weatherElement,
    } = data;

    const wX = this.getCurrentWx(weatherElement);
    // console.log(wX)
    const currentTemperature = this.getCityAverageT(weatherElement);
    const todayEveryHourArray = this.createCityTodayEveryHourArray(weatherElement);

    return {
      locationName,
      wX,
      currentTemperature,
      todayEveryHourArray,
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
    const averageMinT = this.getAverageT(weatherElement, TType.Min);
    const averageMaxT = this.getAverageT(weatherElement, TType.Max);
    const averageT = (averageMinT + averageMaxT) / 2;
    return String(averageT);
  }

  static getAverageT(weatherElement: WeatherElementItem[], tType: TType): number {
    switch (tType) {
      case TType.Min: {
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
      case TType.Max: {
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
        hourName: moment(wXTimeArray[index].startTime),
        wX: wXTimeArray[index].parameter.parameterName as WXType,
        temperature: String(averageT),
      }
    });
    return result;
  }

};
