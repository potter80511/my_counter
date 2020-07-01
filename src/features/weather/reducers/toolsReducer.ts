import { TemperatureType } from 'src/features/weather/domain/model/ToolsTypes';
import { LocationData, TaipeiLocationValue, WeatherLocationType } from 'src/features/weather/domain/model/Location';

export type State = {
  temperatureType: TemperatureType;
  locationItemInputDataArray: LocationData[];
  showCreateLocationItemModal: boolean;
};

export const defaultState:State = {
  temperatureType: TemperatureType.Celsius,
  locationItemInputDataArray: [
    {
      name: TaipeiLocationValue.Taipei + TaipeiLocationValue.Neihu,
      value: TaipeiLocationValue.Neihu,
      type: WeatherLocationType.Location,
    },
  ],
  showCreateLocationItemModal: true,
};

export enum ActionType {
  SwitchTemperatureType = 'switch_temperature_type',
  CreateLocationItem = 'create_location_item',
  ShowCreateLocationItemModal = 'show_create_location_item_modal',
}

export type SwitchTemperatureTypeAction = {
  type: ActionType.SwitchTemperatureType;
  temperatureType: TemperatureType;
};

export type CreateLocationItemAction = {
  type: ActionType.CreateLocationItem;
  newItem: LocationData;
};

export type ShowCreateLocationItemModalAction = {
  type: ActionType.ShowCreateLocationItemModal;
  show: boolean;
};

export type Action =
  SwitchTemperatureTypeAction |
  CreateLocationItemAction |
  ShowCreateLocationItemModalAction;

const reducer = (state: State = defaultState, action: Action) => {
  switch (action.type) {
    case ActionType.SwitchTemperatureType: {
      return {
        ...state,
        temperatureType: action.temperatureType,
      };
    }
    case ActionType.CreateLocationItem: {
      const newLocationItemArray = [...state.locationItemInputDataArray];
      return {
        ...state,
        locationItemInputDataArray: [
          ...state.locationItemInputDataArray,
          action.newItem,
        ]
      }
    }
    case ActionType.ShowCreateLocationItemModal: {
      return {
        ...state,
        showCreateLocationItemModal: action.show,
      }
    }
    default:{
      return state;
    }
  };
};

export default reducer;
