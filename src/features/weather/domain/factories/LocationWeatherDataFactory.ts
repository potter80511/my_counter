import { WXType, CurrentDayDetails, TodayEveryHour } from 'src/features/weather/domain/model/Weather';
import { ElementName, ElementTime, TType } from 'src/features/weather/domain/model/WeatherElement';
import { WeatherElementItem } from 'src/features/weather/domain/model/WeatherElementForLocation';
import {
  WeatherBackgroundFactory,
} from 'src/features/weather/domain/factories/WeatherBackgroundFactory';
import moment from 'moment';
import { WXIcons } from 'src/features/weather/domain/model/WXIcons';

export class LocationWeatherDataFactory {
  static createCurrentDayDataFromNet(data): CurrentDayDetails {
    const {
      locationName,
      weatherElement,
    } = data;
    console.log(data)
    // console.log(weatherElement, 'we')

    const wX = this.getCurrentWx(weatherElement);
    const currentTemperature = this.getLocationT(weatherElement) + '˚';
    console.log(currentTemperature)
    const todayEveryHourArray = this.createLocationTodayEveryHourArray(weatherElement);
    const weatherBackgroundImage = WeatherBackgroundFactory.createBackground(wX);

    return {
      locationName,
      wX,
      currentTemperature,
      todayEveryHourArray,
      weatherBackgroundImage,
    };
  }

  static getCurrentWx(weatherElement: WeatherElementItem[]): WXType {
    const wxData = weatherElement.find(item => item.elementName === ElementName.Wx);
    if (wxData) {
      const wx = wxData.time[0].elementValue[0].value as WXType
      return wx;
    }
  }

  static getLocationT(weatherElement: WeatherElementItem[]): string {
    const tData = weatherElement.find(item => item.elementName === ElementName.T);
    if (tData) {
      const t = tData.time[0].elementValue[0].value
      return t;
    }
  }

  static createLocationTodayEveryHourArray(weatherElement: WeatherElementItem[]): TodayEveryHour[] {
    let wxArray = [];
    const wxData = weatherElement.find(item => item.elementName === ElementName.Wx);
    if (wxData) {
      wxArray = wxData.time.map(item => this.createWXIcon(item.elementValue[0].value as WXType));
    }

    const tData = weatherElement.find(item => item.elementName === ElementName.T);
    if (tData) {
      const tempArray = tData.time.map(item => {
        const hourName = item.dataTime;
        const temperature = item.elementValue[0].value;
        return {
          hourName,
          temperature,
        };
      });
      
      const result = tempArray.map((item, index) => (
        {
          ...item,
          wXIcon: '/img/weather/wx_icons/' + wxArray[index],
        }
      ));
      // console.log(result)
      return result;
    }
    return [];
  }

  static createWXIcon(wx: WXType): string {
    switch (wx) {
      case WXType.Sunny:
        return WXIcons.Sunny
      case WXType.SunnyCloudy:
        return WXIcons.SunnyCloudy
      case WXType.Cloudy:
        return WXIcons.Cloudy
      case WXType.CloudyTempRainyOrThunder:
        return WXIcons.CloudyTempRainyOrThunder
      case WXType.TempRainyOrThunder:
        return WXIcons.TempRainyOrThunder
    }
  }

};
