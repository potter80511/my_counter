import { TemperatureType } from 'src/features/weather/domain/model/ToolsTypes';

export type State = {
  temperatureType: TemperatureType;
};

export const defaultState:State = {
  temperatureType: TemperatureType.Celsius,
}

export enum ActionType {
  SwitchTemperatureType = 'switch_temperature_type',
}

export type SwitchTemperatureTypeAction = {
  type: ActionType.SwitchTemperatureType,
  temperatureType: TemperatureType,
}

export type Action = SwitchTemperatureTypeAction;

const reducer = (state: State = defaultState, action: Action) => {
  switch (action.type) {
    case ActionType.SwitchTemperatureType: {
      return {
        temperatureType: action.temperatureType,
      };
    }
    default:{
      return state;
    }
  };
};

export default reducer;
