import { SpreadIndex } from "src/features/weather/domain/model/SpreadIndex";
import { WeekTemperature } from "src/features/weather/domain/model/Weather";
import { Cookies } from 'react-cookie';

export type State = {
  translateY: number;
  openedLocationIndex: number | undefined;
  weekTemperatureArray: WeekTemperature[];
};

export const defaultState: State = {
  translateY: 0,
  openedLocationIndex: undefined,
  weekTemperatureArray: [],
  // locationsData: [
  //   {
  //     locationName: TaiwanCities.Taoyuan,
  //     wX: WXType.Cloudy,
  //     currentTemperature: '30',
  //     todayEveryHourArray: [],
  //   },
  // ],
};

export enum ActionType {
  SaveSettingsToCookie = 'save_settings_to_cookie',
  InitialLocationsState = 'initial_locations_state',
  SpreadOut = 'spread_out',
  WeekWeatherLoaded = 'week_weather_loaded',
};

export type SaveSettingsToCookieAction = {
  type: ActionType.SaveSettingsToCookie;
};

export type InitialLocationsStateAction = {
  type: ActionType.InitialLocationsState;
};

export type SpreadOutAction = {
  type: ActionType.SpreadOut;
  translateY: number;
  spreadIndex: SpreadIndex;
};

export type WeekWeatherLoadedAction = {
  type: ActionType.WeekWeatherLoaded;
  weekTemperatureArray: WeekTemperature[];
};

export type Action =
  SaveSettingsToCookieAction |
  InitialLocationsStateAction |
  SpreadOutAction |
  WeekWeatherLoadedAction;

const reducer = (state: State = defaultState, action: Action) => {
  const cookies = new Cookies();
  const weather_settings = cookies.get('weather_settings') ? cookies.get('weather_settings') : {};
  switch (action.type) {
    case ActionType.SaveSettingsToCookie: {
      cookies.set(
        'weather_settings',
        {
          ...weather_settings,
          translateY: state.translateY,
          openedLocationIndex: state.openedLocationIndex,
        },
      );
      return {
        ...state,
      }
    }
    case ActionType.InitialLocationsState: {
      return {
        ...state,
        translateY: weather_settings.translateY,
        openedLocationIndex: weather_settings.openedLocationIndex,
      }
    }
    case ActionType.SpreadOut: {
      return {
        ...state,
        translateY: action.translateY,
        openedLocationIndex: action.spreadIndex,
      }
    }
    case ActionType.WeekWeatherLoaded: {
      return {
        ...state,
        weekTemperatureArray: action.weekTemperatureArray,
      }
    }
    default:
      return state;
  };
};

export default reducer;
