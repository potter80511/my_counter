import { ActionType } from 'src/features/weather/reducers/locationsReducer';
import { SpreadIndex } from "src/features/weather/domain/model/SpreadIndex";
import { CurrentDayDetails } from 'src/features/weather/domain/model/Weather';
import { TemperatureType } from 'src/features/weather/domain/model/ToolsTypes';

export const spreadOut = (translateY: number, spreadIndex: SpreadIndex) => (
  {
    type: ActionType.SpreadOut,
    translateY,
    spreadIndex,
  }
);

export const calculateLocationsDataTemperature = (locationsData: CurrentDayDetails[], temperatureType: TemperatureType) => (
  {
    type: ActionType.CalculateTemperature,
    locationsData,
    temperatureType,
  }
);
