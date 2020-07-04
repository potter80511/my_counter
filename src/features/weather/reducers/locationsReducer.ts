import { SpreadIndex } from "src/features/weather/domain/model/SpreadIndex";
import { CurrentDayDetails, WXType } from "src/features/weather/domain/model/Weather";
import { TaiwanCities } from "src/features/weather/domain/model/Location";
import { TemperatureType } from "src/features/weather/domain/model/ToolsTypes";
import { WeatherHelper } from "src/features/weather/helper";

export type State = {
  translateY: number;
  openedLocationIndex: number | undefined;
  locationsData: CurrentDayDetails[];
};

export const defaultState: State = {
  translateY: 0,
  openedLocationIndex: undefined,
  locationsData: [],
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
export type CalculateTemperatureAction = {
  type: ActionType.CalculateTemperature;
  locationsData: CurrentDayDetails[];
  temperatureType: TemperatureType;
};

export type Action =
  SpreadOutAction |
  CurrentDayWeatherLoadedAction |
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
    case ActionType.CalculateTemperature: {
      console.log(action.locationsData)
      const isFahrenheit = action.temperatureType === TemperatureType.Fahrenheit ? true : false;
      const newLocationsData = action.locationsData.map(item => {
        const newCurrentTemperature = isFahrenheit
          ? WeatherHelper.switchTemperatureToFahrenheit(item.currentTemperature)
          : WeatherHelper.switchTemperatureToCelsius(item.currentTemperature);
        return {
          ...item,
          currentTemperature: newCurrentTemperature,
        }
      });
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
