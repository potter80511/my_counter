import { WeatherDataFactory } from "./domain/factories/WeatherDataFactory";

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
