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
