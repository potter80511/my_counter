import { WXType } from 'src/features/weather/domain/model/Weather';

export enum ExtremeType {
  Min = 'min',
  Max = 'max',
}

export enum ElementName {
  Wx = 'Wx',
  MinT = 'MinT',
  MaxT = 'MaxT',
  T = 'T',
  PoP12H = 'PoP12h',
  PoP6H = 'PoP6h',
  RH = 'RH',
  AT = 'AT',
  WS = 'WS',
  WD = 'WD',
  CI = 'CI',
}

export interface WeatherElementItem {
  elementName: ElementName;
  time: ElementTime[];
}

export interface ElementTime {
  startTime: string;
  endTime: string;
  parameter?: parameter;
  elementValue?: ElementValueValue[];
}

interface ElementValueValue {
  value: string;
  measures: string;
}

interface parameter {
  parameterName: string | WXType;
  parameterValue: string;
}
