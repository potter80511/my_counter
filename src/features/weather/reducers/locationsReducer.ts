import { SpreadIndex } from "src/features/weather/domain/model/SpreadIndex";
import { CurrentDayDetails, WXType, WeekTemperature } from "src/features/weather/domain/model/Weather";
import { TaiwanCities } from "src/features/weather/domain/model/Location";
import { TemperatureType } from "src/features/weather/domain/model/ToolsTypes";
import { WeatherHelper } from "src/features/weather/helper";

export type State = {
  translateY: number;
  openedLocationIndex: number | undefined;
  locationsData: CurrentDayDetails[];
  weekTemperatureArray: WeekTemperature[];
};

export const defaultState: State = {
  translateY: 0,
  openedLocationIndex: undefined,
  locationsData: [],
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
  CurrentDayWeatherLoaded = 'current_day_weather_loaded',
  CalculateTemperature = 'calculate_temperature',
  WeekWeatherLoaded = 'week_weather_loaded',
};

export type SpreadOutAction = {
  type: ActionType.SpreadOut;
  translateY: number;
  spreadIndex: SpreadIndex;
};

export type CurrentDayWeatherLoadedAction = {
  type: ActionType.CurrentDayWeatherLoaded;
  data: CurrentDayDetails;
};

export type WeekWeatherLoadedAction = {
  type: ActionType.WeekWeatherLoaded;
  weekTemperatureArray: WeekTemperature[];
};

export type CalculateTemperatureAction = {
  type: ActionType.CalculateTemperature;
  locationsData: CurrentDayDetails[];
  temperatureType: TemperatureType;
};

export type Action =
  SpreadOutAction |
  CurrentDayWeatherLoadedAction |
  WeekWeatherLoadedAction |
  CalculateTemperatureAction;

const reducer = (state: State = defaultState, action: Action) => {
  switch (action.type) {
    case ActionType.SpreadOut: {
      return {
        ...state,
        translateY: action.translateY,
        openedLocationIndex: action.spreadIndex,
      }
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
    case ActionType.WeekWeatherLoaded: {
      return {
        ...state,
        weekTemperatureArray: action.weekTemperatureArray,
      }
    }
    case ActionType.CalculateTemperature: {
      const toFahrenheit = action.temperatureType === TemperatureType.Fahrenheit ? true : false;
      const newLocationsData = action.locationsData.map(item => {
        const newCurrentTemperature = toFahrenheit
          ? WeatherHelper.switchTemperatureToFahrenheit(item.currentTemperature)
          : WeatherHelper.switchTemperatureToCelsius(item.currentTemperature);
        return {
          ...item,
          currentTemperature: newCurrentTemperature,
        }
      });
      console.log(newLocationsData)
      return {
        ...state,
        locationsData: newLocationsData,
      }
    }
    default:
      return state;
  };
};

export default reducer;
