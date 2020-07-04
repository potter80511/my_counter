import { SpreadIndex } from "src/features/weather/domain/model/SpreadIndex";
import { CurrentDayDetails, WXType } from "src/features/weather/domain/model/Weather";
import { TaiwanCities } from "../domain/model/Location";

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

export type Action =
  SpreadOutAction |
  CurrentDayWeatherLoadedAction;

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
    default:
      return state;
  };
};

export default reducer;
