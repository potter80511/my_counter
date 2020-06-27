export enum SwitchButtonType {
  Celsius = 'celsius',
  Fahrenheit = 'fahrenheit',
}

export type SwitchButtonDataType = {
  value: SwitchButtonType;
  name: string;
}
