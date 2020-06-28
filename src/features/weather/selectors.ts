import { StoreState } from 'src/Store';

// tools
export const temperatureTypeSelector = (store: StoreState) =>
  store.weather.tools.temperatureType;
