import { TemperatureType } from 'src/features/weather/domain/model/ToolsTypes';

export class TemperatureFactory {
  static switchTemperatureType(value: number, type: TemperatureType): number {
    switch (type) {
      case TemperatureType.Celsius:
        return value;
      case TemperatureType.Fahrenheit:
        return Math.round((value * (9/5)) + 32);
    }
  }
};
