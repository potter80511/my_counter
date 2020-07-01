import { StoreState } from 'src/Store';

// locations
export const translateYSelector = (store: StoreState) =>
  store.weather.locations.translateY

export const openedLocationIndexSelector = (store: StoreState) =>
  store.weather.locations.openedLocationIndex

// tools
export const temperatureTypeSelector = (store: StoreState) =>
  store.weather.tools.temperatureType;

export const showCreateLocationItemModalSelector = (store: StoreState) =>
  store.weather.tools.showCreateLocationItemModal;
