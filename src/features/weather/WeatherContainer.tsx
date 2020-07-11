import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  translateYSelector,
  openedLocationIndexSelector,
  locationsDataSelector,
  weekTemperatureArraySelector,
  temperatureTypeSelector,
  locationItemInputDataArraySelector,
  showCreateLocationItemModalSelector,
  locationOptionsSelector,
  searchValueSelector,
} from 'src/features/weather/selectors';
import {
  saveSettingsToCookie,
  initialToolsState,
  switchTemperatureType,
  showCreateLocationItemModal,
  searchInputChange,
  createNewLocationInputAction,
  deleteLocationInputAction,
} from 'src/features/weather/actions/toolsAction';
import {
  spreadOut,
} from 'src/features/weather/actions/locationsActions';
import {
  getCurrentDayWeather,
  getWeekWeather,
} from 'src/features/weather/actions/fetchActions';

import Locations from 'src/features/weather/components/locations/Locations';
import Tools from 'src/features/weather/components/Tools';
import CreateLocationItemModal from 'src/features/weather/components/CreateLocationItemModal';
import { TemperatureType } from 'src/features/weather/domain/model/ToolsTypes';
import { LocationData, TaiwanCities, WeatherLocationType, LocationValue } from 'src/features/weather/domain/model/Location';
import { SpreadIndex } from "src/features/weather/domain/model/SpreadIndex";
import { Cookies } from 'react-cookie';
import '@styles/features/weather/weather.scss';

const WeatherContainer = () => {
  const dispatch = useDispatch();
  const translateY = useSelector(translateYSelector);
  const openedLocationIndex = useSelector(openedLocationIndexSelector);
  const weekTemperatureArray = useSelector(weekTemperatureArraySelector);
  
  const temperatureType = useSelector(temperatureTypeSelector);
  const locationItemInputDataArray = useSelector(locationItemInputDataArraySelector);
  const locationsData = useSelector(locationsDataSelector);
  console.log(locationsData, 'locationsData')
  console.log(locationItemInputDataArray)
  const isShowCreateLocationItemModal = useSelector(showCreateLocationItemModalSelector);
  const locationOptions = useSelector(locationOptionsSelector);
  const searchValue = useSelector(searchValueSelector);

  const [viewHeight, setViewHeight] = useState<number>(0);
  const [stateIsInitial, setStateIsInitial] = useState<boolean>(false);
  // const [translateY, setTranslateY] = useState<number>(0);  //  122 是title到頂部的距離
  // const [translateY, setTranslateY] = useState<number>(0 + 182);  //  122 是title到頂部的距離

  const locationSpread = openedLocationIndex >= 0

  const onSpreadOut = (tlY: number, spreadIndex: SpreadIndex) => {
    dispatch(spreadOut(tlY, spreadIndex));
  };

  const onGetWeekWeather = (locationName: LocationValue, locationType: WeatherLocationType, city: TaiwanCities) => {
    dispatch(getWeekWeather(locationName, locationType, city));
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

  const onDeleteLocation = (deleteIndex: number) => {
    dispatch(deleteLocationInputAction(deleteIndex));
  };

  const cookies = new Cookies();
  const weather_settings = cookies.get('weather_settings') ? cookies.get('weather_settings') : undefined;

  useEffect(() => {
    setViewHeight(window.innerHeight);
    
    if (weather_settings) {
      console.log(weather_settings, 'weather_settings2')
      dispatch(initialToolsState());
    }
    setStateIsInitial(true);
  }, []);

  useEffect(() => {
    if (stateIsInitial) {
      // console.log(546456)
      locationItemInputDataArray.forEach((item, index) => {
        dispatch(getCurrentDayWeather(item.value, item.type, index, item.city));
      });
    }
  }, [stateIsInitial]);

  // console.log(weather_settings, temperatureType)
  useEffect(() => {
    dispatch(saveSettingsToCookie())
  }, [temperatureType, locationItemInputDataArray]);

  return (
    <div
      className="weather wrap"
      style={{ height: locationSpread ? viewHeight + 'px' : 'auto' }}
    >
      {/* <h1 className="main-title">Weather</h1> */}
      <Locations
        spread={locationSpread}
        getWeekWeather={(locationName, locationType, city) => onGetWeekWeather(locationName, locationType, city)}
        translateY={translateY}
        openedLocationIndex={openedLocationIndex}
        temperatureType={temperatureType}
        locationsData={locationsData}
        weekTemperatureArray={weekTemperatureArray}
        spreadOut={(tlY, spreadIndex) => onSpreadOut(tlY, spreadIndex)}
        onDelete={(deleteIndex) => onDeleteLocation(deleteIndex)}
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
