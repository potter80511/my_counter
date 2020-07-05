import { TemperatureType } from 'src/features/weather/domain/model/ToolsTypes';
import {
  LocationData,
  TaiwanCities,
  TaipeiLocationValue,
  WeatherLocationType,
  TaoyuanLocationValue
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
    {
      city: TaiwanCities.Taoyuan,
      name: TaiwanCities.Taoyuan,
      value: TaoyuanLocationValue.Luzhu,
      type: WeatherLocationType.Location,
    },
    {
      city: TaiwanCities.Taipei,
      name: TaiwanCities.Taipei,
      value: TaipeiLocationValue.Neihu,
      type: WeatherLocationType.Location,
    },
  ],
  showCreateLocationItemModal: false,
  locationOptions: [],
  searchValue: '',
};

export enum ActionType {
  SwitchTemperatureType = 'switch_temperature_type',
  CreateNewLocationInput = 'create_location_item',
  ShowCreateLocationItemModal = 'show_create_location_item_modal',
  SearchInputChange = 'search_input_change',
}

export type SwitchTemperatureTypeAction = {
  type: ActionType.SwitchTemperatureType;
  temperatureType: TemperatureType;
};

export type CreateNewLocationInputAction = {
  type: ActionType.CreateNewLocationInput;
  newLocation: LocationData;
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
  CreateNewLocationInputAction |
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
    case ActionType.CreateNewLocationInput: {
      const newLocationItemArray = [...state.locationItemInputDataArray];
      return {
        ...state,
        locationItemInputDataArray: [
          ...state.locationItemInputDataArray,
          action.newLocation,
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
