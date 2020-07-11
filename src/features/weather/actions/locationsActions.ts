import { ActionType } from 'src/features/weather/reducers/locationsReducer';
import { SpreadIndex } from "src/features/weather/domain/model/SpreadIndex";

export const spreadOut = (translateY: number, spreadIndex: SpreadIndex) => (
  {
    type: ActionType.SpreadOut,
    translateY,
    spreadIndex,
  }
);
