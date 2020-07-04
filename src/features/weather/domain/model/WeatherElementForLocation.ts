import { Moment } from 'moment';
import { WXType } from 'src/features/weather/domain/model/Weather';
import { ElementName } from 'src/features/weather/domain/model/WeatherElement';

export interface WeatherElementItem {
  elementName: ElementName;
  time: ElementTime[];
};

export interface ElementTime {
  startTime?: Moment;
  endTime?: Moment;
  elementValue: parameter[];
  dataTime?: Moment;
};

interface parameter {
  value: string | WXType;
  measures: string;
};
