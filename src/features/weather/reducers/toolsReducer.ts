import { TemperatureType } from 'src/features/weather/domain/model/ToolsTypes';
import {
  LocationData,
  TaiwanCities,
  TaipeiLocationValue,
  WeatherLocationType,
  TaoyuanLocationValue
} from 'src/features/weather/domain/model/Location';
import { allLocationsData } from 'src/features/weather/domain/data/allLocationsData';
import { CurrentDayDetails } from '../domain/model/Weather';
import { Cookies } from 'react-cookie';

export type State = {
  temperatureType: TemperatureType;
  locationItemInputDataArray: LocationData[];
  locationsData: CurrentDayDetails[];
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
    // {
    //   city: TaiwanCities.Yilan,
    //   name: TaiwanCities.Yilan,
    //   value: TaiwanCities.Yilan,
    //   type: WeatherLocationType.City,
    // },
    // {
    //   city: TaiwanCities.Taoyuan,
    //   name: TaiwanCities.Taoyuan,
    //   value: TaoyuanLocationValue.Luzhu,
    //   type: WeatherLocationType.Location,
    // },
    // {
    //   city: TaiwanCities.Taipei,
    //   name: TaiwanCities.Taipei,
    //   value: TaipeiLocationValue.Neihu,
    //   type: WeatherLocationType.Location,
    // },
  ],
  locationsData: [],
  showCreateLocationItemModal: false,
  locationOptions: [],
  searchValue: '',
};

export enum ActionType {
  SaveSettingsToCookie = 'save_settings_to_cookie',
  InitialToolsState = 'initial_tools_state',
  SwitchTemperatureType = 'switch_temperature_type',
  CurrentDayWeatherLoaded = 'current_day_weather_loaded',
  CreateNewLocationInput = 'create_location_item',
  DeleteLocationInput = 'delete_location_item',
  ShowCreateLocationItemModal = 'show_create_location_item_modal',
  SearchInputChange = 'search_input_change',
}

export type SaveSettingsToCookieAction = {
  type: ActionType.SaveSettingsToCookie;
};

export type InitialToolsStateAction = {
  type: ActionType.InitialToolsState;
};

export type SwitchTemperatureTypeAction = {
  type: ActionType.SwitchTemperatureType;
  temperatureType: TemperatureType;
};

export type CurrentDayWeatherLoadedAction = {
  type: ActionType.CurrentDayWeatherLoaded;
  data: CurrentDayDetails;
};

export type CreateNewLocationInputAction = {
  type: ActionType.CreateNewLocationInput;
  newLocation: LocationData;
};

export type DeleteLocationInputAction = {
  type: ActionType.DeleteLocationInput;
  deleteIndex: number;
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
  SaveSettingsToCookieAction |
  InitialToolsStateAction |
  SwitchTemperatureTypeAction |
  CurrentDayWeatherLoadedAction |
  CreateNewLocationInputAction |
  DeleteLocationInputAction |
  ShowCreateLocationItemModalAction |
  SearchInputChangeAction;

const reducer = (state: State = defaultState, action: Action) => {
  const cookies = new Cookies();
  const weather_settings = cookies.get('weather_settings') ? cookies.get('weather_settings') : {};
  switch (action.type) {
    case ActionType.SaveSettingsToCookie: {
      cookies.set(
        'weather_settings',
        {
          ...weather_settings,
          temperatureType: state.temperatureType,
          locationItemInputDataArray: state.locationItemInputDataArray,
        },
      );
      return {
        ...state,
      }
    }
    case ActionType.InitialToolsState: {
      return {
        ...state,
        temperatureType: weather_settings.temperatureType,
        locationItemInputDataArray: weather_settings.locationItemInputDataArray,
      }
    }
    case ActionType.SwitchTemperatureType: {
      return {
        ...state,
        temperatureType: action.temperatureType,
      };
    }
    case ActionType.CurrentDayWeatherLoaded: {
      return {
        ...state,
        locationsData: [
          ...state.locationsData,
          action.data,
        ],
      }
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
    case ActionType.DeleteLocationInput: {
      const newLocationInputData = state.locationItemInputDataArray.filter((item, index) =>
        index !== action.deleteIndex
      );

      const newLoaciotionsData = state.locationsData.map((item, index) => {
        const correctItem = state.locationsData.find(c => c.inputIndex === index);
        return correctItem
      }).filter((item) =>
        item.inputIndex !== action.deleteIndex
      ).map((item, index) =>
        ({
          ...item,
          inputIndex: index,
        })
      );

      return {
        ...state,
        locationItemInputDataArray: newLocationInputData,
        locationsData: newLoaciotionsData,
      }
    }
    case ActionType.ShowCreateLocationItemModal: {
      return {
        ...state,
        showCreateLocationItemModal: action.show,
      }
    }
    case ActionType.SearchInputChange: {
      const filterData = allLocationsData.map(item => {
        return item.name.search('臺') != -1 ? {
          ...item,
          name: item.name.replace('臺', '台')
        } : item;
      }).filter(item => {
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
