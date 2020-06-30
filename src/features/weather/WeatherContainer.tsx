import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  temperatureTypeSelector, showCreateLocationItemModalSelector,
} from 'src/features/weather/selectors';
import {
  switchTemperatureType,
  showCreateLocationItemModal,
} from 'src/features/weather/actions/toolsAction';

import Locations from 'src/features/weather/components/locations/Locations';
import Tools from 'src/features/weather/components/Tools';
import CreateLocationItemModal from 'src/features/weather/components/CreateLocationItemModal';
import { TemperatureType } from 'src/features/weather/domain/model/ToolsTypes';
import { LocationData } from 'src/features/weather/domain/model/Location';
import '@styles/features/weather/weather.scss';
import { allLocationsData } from './domain/data';

const WeatherContainer = () => {
  const dispatch = useDispatch();
  const temperatureType = useSelector(temperatureTypeSelector);
  const isShowCreateLocationItemModal = useSelector(showCreateLocationItemModalSelector);

  const [viewHeight, setViewHeight] = useState<number>(0);
  const [translateY, setTranslateY] = useState<number>(0);  //  122 是title到頂部的距離
  // const [translateY, setTranslateY] = useState<number>(0 + 182);  //  122 是title到頂部的距離
  const [openedLocationIndex, setOpenedLocationIndex] = useState<number | undefined>(undefined);
  const [locationOptions, setLocationOptions] = useState<LocationData[]>([]);

  const locationSpread = openedLocationIndex >= 0

  const onSpreadOut = (tlY: number, spreadIndex: number | null) => {
    setTranslateY(tlY);
    setOpenedLocationIndex(spreadIndex);
  };

  const onSwitchTemperatureType = (value: TemperatureType) => {
    dispatch(switchTemperatureType(value));
  }

  const onShowCreateLocationItemModal = (show: boolean) => {
    dispatch(showCreateLocationItemModal(show));
  };

  const onSearchInputChange = (value: string) => {
    const filterData = allLocationsData.filter(item => {
      return item.name.search(value) != -1;
    });
    setLocationOptions(filterData);
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
        onCancel={(show) => onShowCreateLocationItemModal(show)}
        onSearchInputChange={(value) => onSearchInputChange(value)}
      />
    </div>
  );
};

export default WeatherContainer;
