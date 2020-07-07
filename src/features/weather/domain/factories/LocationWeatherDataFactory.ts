import { WXType, CurrentDayDetails, TodayEveryHour, OthersData } from 'src/features/weather/domain/model/Weather';
import { ElementName } from 'src/features/weather/domain/model/WeatherElement';
import { WeatherElementItem } from 'src/features/weather/domain/model/WeatherElementForLocation';
import {
  WeatherDataFactory,
} from 'src/features/weather/domain/factories/WeatherDataFactory';
import moment from 'moment';
import { WXIcons } from 'src/features/weather/domain/model/WXIcons';
import { FindExtremeNumber } from 'src/features/weather/helper';

export class LocationWeatherDataFactory {
  static createCurrentDayDataFromNet(data, inputIndex: number): CurrentDayDetails {
    const {
      locationName,
      weatherElement,
    } = data;

    const wX = this.getCurrentWx(weatherElement);
    const currentTemperature = this.getLocationT(weatherElement);
    const minT = this.getExtremeT(weatherElement, ElementName.MinT);
    const maxT = this.getExtremeT(weatherElement, ElementName.MaxT);
    const todayEveryHourArray = this.createLocationTodayEveryHourArray(weatherElement);
    const othersDataArray = this.createOthersDataArray(weatherElement);
    const weatherBackgroundImage = WeatherDataFactory.createBackground(wX);

    return {
      inputIndex,
      locationName,
      wX,
      currentTemperature,
      minT,
      maxT,
      todayEveryHourArray,
      othersDataArray,
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
      return WeatherDataFactory.createTemperature(t);
    }
  }

  static getExtremeT(weatherElement: WeatherElementItem[], type: ElementName): string {
    const elementT = weatherElement.find(item => item.elementName === ElementName.T);
    const currentDate = moment().format('MM/DD');
    const tommorow = moment().add(3, 'hours').format('MM/DD'); // 因為是每竹三小時吧

    const filterToday = elementT.time.filter(item => {
      const date = moment(item.dataTime).format('MM/DD');
      return date === currentDate;
    });
    const filterTomorrow = elementT.time.filter(item => {
      const date = moment(item.dataTime).format('MM/DD');
      return date === tommorow;
    });

    // 今天已經準備過去時會找不到今天，只能用明天
    const filterData = filterToday.length > 0 ? filterToday : filterTomorrow;
    const tArray = filterData.map(item =>
      Number(item.elementValue[0].value)
    );

    switch (type) {
      case ElementName.MinT: {
        const result = FindExtremeNumber.findMin(tArray)
        return String(result)
      }
      case ElementName.MaxT: {
        const result = FindExtremeNumber.findMax(tArray)
        return String(result)
      }
    }
  }

  static createLocationTodayEveryHourArray(weatherElement: WeatherElementItem[]): TodayEveryHour[] {
    let wxArray = [];
    const wxData = weatherElement.find(item => item.elementName === ElementName.Wx);
    if (wxData) {
      wxArray = wxData.time.map(item => WeatherDataFactory.createWXIcon(item.elementValue[0].value as WXType));
    }

    const tData = weatherElement.find(item => item.elementName === ElementName.T);
    if (tData) {
      const tempArray = tData.time.map(item => {
        const temperature = WeatherDataFactory.createTemperature(item.elementValue[0].value);
        return {
          hourName: WeatherDataFactory.createEachHour(item.dataTime),
          temperature,
        };
      });

      const result = tempArray.map((item, index) => (
        {
          ...item,
          wXIcon: wxArray[index],
        }
      ));
      // console.log(result)
      return result;
    }
    return [];
  }

  static createOthersDataArray(weatherElement: WeatherElementItem[]): OthersData[] {
    const poP = this.createOtherDataItem(weatherElement, ElementName.PoP6H);
    const rH = this.createOtherDataItem(weatherElement, ElementName.RH);

    const wS = this.createOtherDataItem(weatherElement, ElementName.WS);
    const wD = this.createOtherDataItem(weatherElement, ElementName.WD);
    const wind = {
      name: wS.name,
      value: wD.value + wS.value,
      unit: wS.unit,
    }

    const aT = this.createOtherDataItem(weatherElement, ElementName.AT);
    const cI = this.createOtherDataItem(weatherElement, ElementName.CI);

    return [
      poP,
      rH,
      wind,
      aT,
      cI,
    ]
  }

  static createOtherDataItem(weatherElement: WeatherElementItem[], type: ElementName): OthersData {
    const element = weatherElement.find(item => item.elementName === type);
    const value = element.time[0].elementValue[0].value;
    const value2 = element.time[0].elementValue.length >= 2
      ? element.time[0].elementValue[1].value
      : undefined;
    const measures = element.time[0].elementValue[0].measures;
    const description = element.description;

    switch (type) {
      case ElementName.PoP6H: {
        return {
          name: '降雨機率',
          value,
          unit: '%',
        }
      }
      case ElementName.RH: {
        return {
          name: '濕度',
          value,
          unit: '%',
        }
      }
      case ElementName.WS: {
        return {
          name: '風',
          value,
          unit: measures,
        }
      }
      case ElementName.AT: {
        return {
          name: description,
          value,
          unit: '˚',
        }
      }
      case ElementName.WD: {
        return {
          name: description,
          value,
          unit: '',
        }
      }
      case ElementName.CI: {
        return {
          name: '舒適度',
          value: value2,
          unit: '',
        }
      }
    }
  }

};
