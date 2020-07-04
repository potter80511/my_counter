import { TemperatureType } from 'src/features/weather/domain/model/ToolsTypes';
import {
  LocationData,
  TaiwanCities,
  TaipeiLocationValue,
  WeatherLocationType
} from 'src/features/weather/domain/model/Location';
import { allLocationsData } from 'src/features/weather/domain/data/allLocationsData';

export type State = {
  temperatureType: TemperatureType;
  locationItemInputDataArray: LocationData[];
  showCreateLocationItemModal: boolean;
  locationOptions: LocationData[];
  searchValue: string;
};

export const defaultState: State = {
  temperatureType: TemperatureType.Celsius,
  locationItemInputDataArray: [
    {
      city: TaiwanCities.Taipei,
      name: TaiwanCities.Taipei,
      value: TaiwanCities.Taipei,
      type: WeatherLocationType.City,
    },
    {
      city: TaiwanCities.Yilan,
      name: TaiwanCities.Yilan,
      value: TaiwanCities.Yilan,
      type: WeatherLocationType.City,
    },
    // {
    //   city: TaiwanCities.Taipei,
    //   name: TaiwanCities.Taipei,
    //   value: TaipeiLocationValue.Neihu,
    //   type: WeatherLocationType.Location,
    // },
  ],
  showCreateLocationItemModal: true,
  locationOptions: [],
  searchValue: '',
};

export enum ActionType {
  SwitchTemperatureType = 'switch_temperature_type',
  CreateLocationItem = 'create_location_item',
  ShowCreateLocationItemModal = 'show_create_location_item_modal',
  SearchInputChange = 'search_input_change',
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

export type SearchInputChangeAction = {
  type: ActionType.SearchInputChange;
  value: string;
};

export type Action =
  SwitchTemperatureTypeAction |
  CreateLocationItemAction |
  ShowCreateLocationItemModalAction |
  SearchInputChangeAction;

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
    case ActionType.SearchInputChange: {
      const filterData = allLocationsData.filter(item => {
        return item.name.search(action.value) != -1;
      });
      return {
        ...state,
        locationOptions: filterData,
        searchValue: action.value,
      }
    }
    default: {
      return state;
    }
  };
};

export default reducer;
