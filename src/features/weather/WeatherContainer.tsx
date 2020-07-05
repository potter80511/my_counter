import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  translateYSelector,
  openedLocationIndexSelector,
  locationsDataSelector,
  temperatureTypeSelector,
  locationItemInputDataArraySelector,
  showCreateLocationItemModalSelector,
  locationOptionsSelector,
  searchValueSelector,
} from 'src/features/weather/selectors';
import {
  switchTemperatureType,
  showCreateLocationItemModal,
  searchInputChange,
  createNewLocationInputAction,
} from 'src/features/weather/actions/toolsAction';
import {
  spreadOut,
  calculateLocationsDataTemperature,
} from 'src/features/weather/actions/locationsActions';
import {
  getCurrentDayWeather,
} from 'src/features/weather/actions/fetchActions';

import Locations from 'src/features/weather/components/locations/Locations';
import Tools from 'src/features/weather/components/Tools';
import CreateLocationItemModal from 'src/features/weather/components/CreateLocationItemModal';
import { TemperatureType } from 'src/features/weather/domain/model/ToolsTypes';
import { LocationData, TaiwanCities, WeatherLocationType } from 'src/features/weather/domain/model/Location';
import { SpreadIndex } from "src/features/weather/domain/model/SpreadIndex";
import '@styles/features/weather/weather.scss';

const WeatherContainer = () => {
  const dispatch = useDispatch();
  const translateY = useSelector(translateYSelector);
  const openedLocationIndex = useSelector(openedLocationIndexSelector);
  const locationsData = useSelector(locationsDataSelector);
  console.log(locationsData)

  const temperatureType = useSelector(temperatureTypeSelector);
  const locationItemInputDataArray = useSelector(locationItemInputDataArraySelector);
  // console.log(locationItemInputDataArray)
  const isShowCreateLocationItemModal = useSelector(showCreateLocationItemModalSelector);
  const locationOptions = useSelector(locationOptionsSelector);
  const searchValue = useSelector(searchValueSelector);

  const [viewHeight, setViewHeight] = useState<number>(0);
  const [isFirstCalculateTemperature, setIsFirstCalculateTemperature] = useState<boolean>(true);
  // const [translateY, setTranslateY] = useState<number>(0);  //  122 是title到頂部的距離
  // const [translateY, setTranslateY] = useState<number>(0 + 182);  //  122 是title到頂部的距離

  const locationSpread = openedLocationIndex >= 0

  const onSpreadOut = (tlY: number, spreadIndex: SpreadIndex) => {
    dispatch(spreadOut(tlY, spreadIndex));
  };

  const onSwitchTemperatureType = (value: TemperatureType) => {
    dispatch(switchTemperatureType(value));
  }

  const onShowCreateLocationItemModal = (show: boolean) => {
    dispatch(showCreateLocationItemModal(show));
  };

  const onSearchInputChange = (value: string) => {
    dispatch(searchInputChange(value));
  }

  const onCreateLocation = (newLocation: LocationData, nextIndex: number) => {
    const {
      value,
      type,
      city,
    } = newLocation;
    dispatch(searchInputChange(''));
    dispatch(showCreateLocationItemModal(false));
    dispatch(createNewLocationInputAction(newLocation));
    dispatch(getCurrentDayWeather(value, type, nextIndex, city));
  };

  useEffect(() => {
    setViewHeight(window.innerHeight);
    locationItemInputDataArray.forEach((item, index) => {
      dispatch(getCurrentDayWeather(item.value, item.type, index, item.city));
    });
  }, []);

  useEffect(() => {
    dispatch(calculateLocationsDataTemperature(locationsData, temperatureType))
  }, [temperatureType]);

  return (
    <div
      className="weather wrap"
      style={{ height: locationSpread ? viewHeight + 'px' : 'auto' }}
    >
      {/* <h1 className="main-title">Weather</h1> */}
      <Locations
        spread={locationSpread}
        translateY={translateY}
        openedLocationIndex={openedLocationIndex}
        temperatureType={temperatureType}
        locationsData={locationsData}
        spreadOut={(tlY, spreadIndex) => onSpreadOut(tlY, spreadIndex)}
      />
      <Tools
        show={!locationSpread}
        showCreateItemModal={(show) => onShowCreateLocationItemModal(show)}
        temperatureType={temperatureType}
        onSwitchTemperatureType={onSwitchTemperatureType}
      />
      <CreateLocationItemModal
        show={isShowCreateLocationItemModal}
        locationOptions={locationOptions}
        searchValue={searchValue}
        nextIndex={locationItemInputDataArray.length}
        onCancel={(show) => onShowCreateLocationItemModal(show)}
        onSearchInputChange={(value) => onSearchInputChange(value)}
        onCreateLocation={(newLocation, nextIndex) => onCreateLocation(newLocation, nextIndex)}
      />
    </div>
  );
};

export default WeatherContainer;
