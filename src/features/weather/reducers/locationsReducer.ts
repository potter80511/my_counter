import { SpreadIndex } from "src/features/weather/domain/model/SpreadIndex";
import { CurrentDayDetails, WXType, WeekTemperature } from "src/features/weather/domain/model/Weather";
import { TaiwanCities } from "src/features/weather/domain/model/Location";
import { TemperatureType } from "src/features/weather/domain/model/ToolsTypes";
import { WeatherHelper } from "src/features/weather/helper";

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
  SpreadOut = 'spread_out',
  WeekWeatherLoaded = 'week_weather_loaded',
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
  SpreadOutAction |
  WeekWeatherLoadedAction;

const reducer = (state: State = defaultState, action: Action) => {
  switch (action.type) {
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
