import { StoreState } from 'src/Store';

// locations
export const translateYSelector = (store: StoreState) =>
  store.weather.locations.translateY

export const openedLocationIndexSelector = (store: StoreState) =>
  store.weather.locations.openedLocationIndex

export const locationsDataSelector = (store: StoreState) =>
  store.weather.locations.locationsData

// tools
export const temperatureTypeSelector = (store: StoreState) =>
  store.weather.tools.temperatureType;

export const locationItemInputDataArraySelector = (store: StoreState) =>
  store.weather.tools.locationItemInputDataArray;

export const showCreateLocationItemModalSelector = (store: StoreState) =>
  store.weather.tools.showCreateLocationItemModal;

export const locationOptionsSelector = (store: StoreState) =>
  store.weather.tools.locationOptions;

export const searchValueSelector = (store: StoreState) =>
  store.weather.tools.searchValue;
