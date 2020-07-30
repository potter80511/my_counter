import { Moment } from 'moment';
import { WXType } from 'src/features/weather/domain/model/Weather';
import { ElementName } from 'src/features/weather/domain/model/WeatherElement';

export interface WeatherElementItem {
  elementName: ElementName;
  description: string;
  time: ElementTime[];
}

export interface ElementTime {
  startTime?: string;
  endTime?: string;
  elementValue: parameter[];
  dataTime?: Moment;
}

interface parameter {
  value: string | WXType;
  measures: string;
}
