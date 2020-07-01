import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  translateYSelector,
  openedLocationIndexSelector,
  temperatureTypeSelector,
  showCreateLocationItemModalSelector,
  locationOptionsSelector,
  searchValueSelector,
} from 'src/features/weather/selectors';
import {
  switchTemperatureType,
  showCreateLocationItemModal,
  searchInputChange,
} from 'src/features/weather/actions/toolsAction';
import {
  spreadOut,
} from 'src/features/weather/actions/locationsActions';

import Locations from 'src/features/weather/components/locations/Locations';
import Tools from 'src/features/weather/components/Tools';
import CreateLocationItemModal from 'src/features/weather/components/CreateLocationItemModal';
import { TemperatureType } from 'src/features/weather/domain/model/ToolsTypes';
import { LocationData } from 'src/features/weather/domain/model/Location';
import { SpreadIndex } from "src/features/weather/domain/model/SpreadIndex";
import '@styles/features/weather/weather.scss';

const WeatherContainer = () => {
  const dispatch = useDispatch();
  const translateY = useSelector(translateYSelector);
  const openedLocationIndex = useSelector(openedLocationIndexSelector);

  const temperatureType = useSelector(temperatureTypeSelector);
  const isShowCreateLocationItemModal = useSelector(showCreateLocationItemModalSelector);
  const locationOptions = useSelector(locationOptionsSelector);
  const searchValue = useSelector(searchValueSelector);

  const [viewHeight, setViewHeight] = useState<number>(0);
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

  useEffect(() => {
    setViewHeight(window.innerHeight);
  });

  return (
    <div
      className="weather wrap"
      style={{ height: locationSpread ? viewHeight + 'px' : 'auto' }}
    >
      <h1 className="main-title">Weather</h1>
      <Locations
        spread={locationSpread}
        translateY={translateY}
        openedLocationIndex={openedLocationIndex}
        temperatureType={temperatureType}
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
        onCancel={(show) => onShowCreateLocationItemModal(show)}
        onSearchInputChange={(value) => onSearchInputChange(value)}
      />
    </div>
  );
};

export default WeatherContainer;
