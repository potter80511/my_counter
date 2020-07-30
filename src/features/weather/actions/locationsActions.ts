import { ActionType } from 'src/features/weather/reducers/locationsReducer';
import { SpreadIndex } from 'src/features/weather/domain/model/SpreadIndex';

export const saveSettingsToCookie = () => ({
  type: ActionType.SaveSettingsToCookie,
});

export const initialLocationsState = () => ({
  type: ActionType.InitialLocationsState,
});

export const spreadOut = (translateY: number, spreadIndex: SpreadIndex) => ({
  type: ActionType.SpreadOut,
  translateY,
  spreadIndex,
});
