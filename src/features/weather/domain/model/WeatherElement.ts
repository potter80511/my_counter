import { Moment } from 'moment';
import { WXType } from 'src/features/weather/domain/model/Weather';

export enum ElementName {
  Wx = 'Wx',
  MinT = 'MinT',
  MaxT = 'MaxT',
}

export interface WeatherElementItem {
  elementName: ElementName;
  time: ElementTime[];
};

export interface ElementTime {
  startTime: Moment;
  endTime: Moment;
  parameter: parameter;
};

interface parameter {
  parameterName: string | WXType;
  parameterValue: string;
};