import { TemperatureType } from 'src/features/weather/domain/model/ToolsTypes';
import { ActionType } from 'src/features/weather/reducers/toolsReducer';

export const switchTemperatureType = (newType: TemperatureType) => (
  {
    type: ActionType.SwitchTemperatureType,
    temperatureType: newType,
  }
);
