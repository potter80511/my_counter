import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  temperatureTypeSelector,
} from 'src/features/weather/selectors';
import {
  switchTemperatureType,
} from 'src/features/weather/actions/toolsAction';

import Locations from 'src/features/weather/components/locations/Locations';
import Tools from 'src/features/weather/components/Tools';
import { TemperatureType } from 'src/features/weather/domain/model/ToolsTypes';
import '@styles/features/weather/weather.scss';

const WeatherContainer = () => {
  const dispatch = useDispatch();
  const temperatureType = useSelector(temperatureTypeSelector);

  const [viewHeight, setViewHeight] = useState<number>(0);
  const [translateY, setTranslateY] = useState<number>(0 + 182);  //  122 是title到頂部的距離
  const [openedLocationIndex, setOpenedLocationIndex] = useState<number | undefined>(2);

  const locationSpread = openedLocationIndex >= 0

  const onSpreadOut = (tlY: number, spreadIndex: number | null) => {
    setTranslateY(tlY);
    setOpenedLocationIndex(spreadIndex);
  };

  const onSwitchTemperatureType = (value: TemperatureType) => {
    dispatch(switchTemperatureType(value));
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
        temperatureType={temperatureType}
        onSwitchTemperatureType={onSwitchTemperatureType}
      />
    </div>
  );
};

export default WeatherContainer;
