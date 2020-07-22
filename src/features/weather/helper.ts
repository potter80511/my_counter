import { WeatherDataFactory } from "src/features/weather/domain/factories/WeatherDataFactory";
import { TemperatureType } from 'src/features/weather/domain/model/ToolsTypes';
import { WeatherLocationType, LocationData, TaiwanCities } from "src/features/weather/domain/model/Location";
import { OriLocation, Districts } from "src/features/weather/domain/data/locationsOriData";

export class WeatherHelper {
  static switchTemperatureToFahrenheit(value: string, noUnit?: boolean): string {
    const tempNumber = Number(value.substring(0, value.length - 1));
    const newNumber = Math.round((tempNumber * (9/5)) + 32);
    return WeatherDataFactory.createTemperature(String(newNumber), noUnit)
  }
  static switchTemperatureToCelsius(value: string, noUnit?: boolean): string {
    const tempNumber = Number(value.substring(0, value.length - 1));
    const newNumber = Math.round((tempNumber - 32) * 5/9);
    return WeatherDataFactory.createTemperature(String(newNumber), noUnit)
  }
};

export class FindExtremeNumber {
  static findMax(inputArray: number[]) {
    // 將陣列第一個元素的值賦給max
    let max = inputArray[0];
    // 使用for 迴圈從陣列第一個值開始做遍歷
    for (let i = 1; i < inputArray.length; i++) {
      // 如果元素當前值大於max,就把這個當前值賦值給max
      if (inputArray[i] > max) {
        max = inputArray[i];
      }
    }
    // 返回最大的值
    return max;
  }
  static findMin(inputArray: number[]) {
    let min = inputArray[0];
    for (let i = 1; i < inputArray.length; i++) {
      if (inputArray[i] < min) {
        min = inputArray[i];
      }
    }
    return min;
  }
}

export class TemperatureHelper {
  static CalculateTemperature(value: string, type: TemperatureType, noUnit?: boolean): string {
    switch (type) {
      case TemperatureType.Celsius:
        return value;
      case TemperatureType.Fahrenheit:
        let num = 0;
        num = noUnit ? Number(value) : Number(value.substring(0, value.length - 1))
        const newValue = String(Math.round((num * (9/5)) + 32))
        return noUnit ? newValue : newValue + '˚';
    }
  }
};

export class LocationHelper {
  static createLocationOptions(oriData: OriLocation[]): LocationData[] {
    let result: LocationData[] = [];
    oriData.forEach(item => {
      const city: LocationData = {
        city: item.city,
        name: item.city,
        value: item.city,
        type: WeatherLocationType.City,
      };
      const districts = this.createDistrictArray(item.districts, item.city);
      result.push(city)
      result = result.concat(districts);
    });
    return result
  }
  static createDistrictArray(districts: Districts[], city: TaiwanCities): LocationData[] {
    const result = districts.map(item => (
      {
        city: city,
        name: item.zip + ' ' + city + item.name,
        value: item.name,
        type: WeatherLocationType.Location,
      }
    ));
    return result;
  }
}
