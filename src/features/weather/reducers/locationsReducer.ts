import { SpreadIndex } from "src/features/weather/domain/model/SpreadIndex";

export type State = {
  translateY: number;
  openedLocationIndex: number | undefined;
};

export const defaultState: State = {
  translateY: 0,
  openedLocationIndex: undefined,
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

export type Action =
  SpreadOutAction;

const reducer = (state: State = defaultState, action: Action) => {
  switch (action.type) {
    case ActionType.SpreadOut: {
      return {
        ...state,
        translateY: action.translateY,
        openedLocationIndex: action.spreadIndex,
      }
    }
    default:
      return state;
  };
};

export default reducer;
