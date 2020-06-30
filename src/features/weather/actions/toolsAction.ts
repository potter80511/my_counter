import { TemperatureType } from 'src/features/weather/domain/model/ToolsTypes';
import { ActionType } from 'src/features/weather/reducers/toolsReducer';
import { LocationData } from 'src/features/weather/domain/model/Location';

export const switchTemperatureType = (newType: TemperatureType) => (
  {
    type: ActionType.SwitchTemperatureType,
    temperatureType: newType,
  }
);

export const createLocationItemAction = (newItem: LocationData) => (
  {
    type: ActionType.CreateLocationItem,
    newItem,
  }
);

export const showCreateLocationItemModal = (show: boolean) => (
  {
    type: ActionType.ShowCreateLocationItemModal,
    show,
  }
);
