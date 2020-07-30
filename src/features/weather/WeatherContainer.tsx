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
  saveSettingsToCookie as saveSettingsToToolsCookie,
  initialToolsState,
  switchTemperatureType,
  showCreateLocationItemModal,
  searchInputChange,
  createNewLocationInputAction,
  deleteLocationInputAction,
  clearLocationsDataAction,
} from 'src/features/weather/actions/toolsAction';
import {
  saveSettingsToCookie as saveSettingsToLocationsCookie,
  spreadOut,
  initialLocationsState,
} from 'src/features/weather/actions/locationsActions';
import {
  getCurrentDayWeather,
  getWeekWeather,
} from 'src/features/weather/actions/fetchActions';

import Locations from 'src/features/weather/components/locations/Locations';
import Tools from 'src/features/weather/components/Tools';
import CreateLocationItemModal from 'src/features/weather/components/CreateLocationItemModal';
import Alert from 'src/components/modals/Alert';
import { TemperatureType } from 'src/features/weather/domain/model/ToolsTypes';
import {
  LocationData,
  TaiwanCities,
  WeatherLocationType,
  LocationValue,
} from 'src/features/weather/domain/model/Location';
import { SpreadIndex } from 'src/features/weather/domain/model/SpreadIndex';
import { Cookies } from 'react-cookie';
import '@styles/features/weather/weather.scss';

const WeatherContainer = () => {
  const dispatch = useDispatch();
  const translateY = useSelector(translateYSelector);
  const openedLocationIndex = useSelector(openedLocationIndexSelector);
  const weekTemperatureArray = useSelector(weekTemperatureArraySelector);

  const temperatureType = useSelector(temperatureTypeSelector);
  const locationItemInputDataArray = useSelector(
    locationItemInputDataArraySelector,
  );
  const locationsData = useSelector(locationsDataSelector);
  console.log(locationsData, 'locationsData');
  console.log(locationItemInputDataArray);
  const isShowCreateLocationItemModal = useSelector(
    showCreateLocationItemModalSelector,
  );
  const locationOptions = useSelector(locationOptionsSelector);
  const searchValue = useSelector(searchValueSelector);

  const [viewHeight, setViewHeight] = useState<number>(0);
  const [stateIsInitial, setStateIsInitial] = useState<boolean>(false);
  const [deleteLocationIndex, setDeleteLocationIndex] = useState<
    number | undefined
  >(undefined);
  const [showDeleteAlert, setShowDeleteAlert] = useState<boolean>(false);
  const [showCannotDeleteAlert, setShowCannotDeleteAlert] = useState<boolean>(
    false,
  );
  const deleteLocationName =
    deleteLocationIndex !== undefined
      ? locationsData.find((item, index) => index === deleteLocationIndex)
          .locationName
      : '';
  // const [translateY, setTranslateY] = useState<number>(0);  //  122 是title到頂部的距離
  // const [translateY, setTranslateY] = useState<number>(0 + 182);  //  122 是title到頂部的距離

  const locationSpread = openedLocationIndex >= 0;

  const onSpreadOut = (tlY: number, spreadIndex: SpreadIndex) => {
    dispatch(spreadOut(tlY, spreadIndex));
  };

  const onGetWeekWeather = (
    locationName: LocationValue,
    locationType: WeatherLocationType,
    city: TaiwanCities,
  ) => {
    dispatch(getWeekWeather(locationName, locationType, city));
  };

  const onSwitchTemperatureType = (value: TemperatureType) => {
    dispatch(switchTemperatureType(value));
  };

  const onShowCreateLocationItemModal = (show: boolean) => {
    dispatch(showCreateLocationItemModal(show));
  };

  const onSearchInputChange = (value: string) => {
    dispatch(searchInputChange(value));
  };

  const onCreateLocation = (newLocation: LocationData, nextIndex: number) => {
    const { value, type, city } = newLocation;
    dispatch(searchInputChange(''));
    dispatch(showCreateLocationItemModal(false));
    dispatch(createNewLocationInputAction(newLocation));
    dispatch(getCurrentDayWeather(value, type, nextIndex, city));
  };

  const onDeleteLocation = (deleteIndex: number) => {
    if (locationsData.length === 1) {
      setShowCannotDeleteAlert(true);
    } else {
      setShowDeleteAlert(true);
      setDeleteLocationIndex(deleteIndex);
    }
  };

  const onDeleteYes = (deleteIndex: number) => {
    dispatch(deleteLocationInputAction(deleteIndex));
  };
  const onDeleteNo = () => {
    setShowDeleteAlert(false);
    setDeleteLocationIndex(undefined);
  };

  const cookies = new Cookies();
  const weather_settings = cookies.get('weather_settings')
    ? cookies.get('weather_settings')
    : undefined;
  // console.log(weather_settings)
  useEffect(() => {
    setViewHeight(window.innerHeight);
    dispatch(clearLocationsDataAction());

    if (weather_settings && !stateIsInitial) {
      console.log(weather_settings, 'weather_settings2');
      dispatch(initialToolsState());
      dispatch(initialLocationsState());
    }
    setStateIsInitial(true);
  }, []);

  useEffect(() => {
    if (stateIsInitial) {
      locationItemInputDataArray.forEach((item, index) => {
        dispatch(getCurrentDayWeather(item.value, item.type, index, item.city));
      });
    }
  }, [stateIsInitial]);

  useEffect(() => {
    dispatch(saveSettingsToToolsCookie());
    // dispatch(saveSettingsToLocationsCookie())
    if (openedLocationIndex !== undefined) {
      const openInputData = locationItemInputDataArray.find(
        (item, index) => index === openedLocationIndex,
      );
      const { value, type, city } = openInputData;
      dispatch(getWeekWeather(value, type, city));
    }
  }, [
    temperatureType,
    locationItemInputDataArray,
    translateY,
    openedLocationIndex,
  ]);

  return (
    <div
      className="weather wrap"
      style={{ height: locationSpread ? viewHeight + 'px' : 'auto' }}
    >
      {/* <h1 className="main-title">Weather</h1> */}
      <Locations
        spread={locationSpread}
        getWeekWeather={(locationName, locationType, city) =>
          onGetWeekWeather(locationName, locationType, city)
        }
        translateY={translateY}
        openedLocationIndex={openedLocationIndex}
        temperatureType={temperatureType}
        locationsData={locationsData}
        weekTemperatureArray={weekTemperatureArray}
        spreadOut={(tlY, spreadIndex) => onSpreadOut(tlY, spreadIndex)}
        onDelete={deleteIndex => onDeleteLocation(deleteIndex)}
      />
      <Tools
        show={!locationSpread}
        showCreateItemModal={show => onShowCreateLocationItemModal(show)}
        temperatureType={temperatureType}
        onSwitchTemperatureType={onSwitchTemperatureType}
      />
      <CreateLocationItemModal
        show={isShowCreateLocationItemModal}
        locationOptions={locationOptions}
        searchValue={searchValue}
        nextIndex={locationItemInputDataArray.length}
        onCancel={show => onShowCreateLocationItemModal(show)}
        onSearchInputChange={value => onSearchInputChange(value)}
        onCreateLocation={(newLocation, nextIndex) =>
          onCreateLocation(newLocation, nextIndex)
        }
      />
      <Alert
        show={showDeleteAlert}
        message={'確定要刪除' + deleteLocationName + '嗎？'}
        viewHeight={viewHeight}
        yesText="確定"
        noText="取消"
        yes={() => onDeleteYes(deleteLocationIndex)}
        no={onDeleteNo}
      />
      <Alert
        show={showCannotDeleteAlert}
        message={'請至少保留一項地區天氣'}
        viewHeight={viewHeight}
        yes={() => setShowCannotDeleteAlert(false)}
        yesText="確定"
      />
    </div>
  );
};

export default WeatherContainer;
