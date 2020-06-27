export enum TemperatureType {
  Celsius = 'celsius',
  Fahrenheit = 'fahrenheit',
}

export type SwitchButtonDataType = {
  value: TemperatureType;
  name: string;
}
