import { StoreState } from 'src/Store';

// tools
export const temperatureTypeSelector = (store: StoreState) =>
  store.weather.tools.temperatureType;

export const showCreateLocationItemModalSelector = (store: StoreState) =>
  store.weather.tools.showCreateLocationItemModal;
