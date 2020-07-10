import { StoreState } from 'src/Store';

// locations
export const translateYSelector = (store: StoreState) =>
  store.weather.locations.translateY

export const openedLocationIndexSelector = (store: StoreState) =>
  store.weather.locations.openedLocationIndex

export const locationsDataSelector = (store: StoreState) => {
  const loading = store.weather.tools.locationsData.length === store.weather.tools.locationItemInputDataArray.length
    ? false : true;
  const data = store.weather.tools.locationsData
  
  const newData = data.map((item, index) => {
    const newItem = data.find(correctItem =>
      correctItem.inputIndex === index
    );
    return newItem ? newItem : {}
  });
  return loading ? [] : newData;
}

export const weekTemperatureArraySelector = (store: StoreState) =>
  store.weather.locations.weekTemperatureArray

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
