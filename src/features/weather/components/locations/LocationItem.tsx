import React, { useState, useEffect, useRef } from 'react';
import { WXType } from 'src/features/weather/domain/model/Weather';
import { TemperatureFactory } from 'src/features/weather/domain/factories/TemperatureFactory';
import { LocationsFactory } from 'src/features/weather/domain/factories/LocationsFactory';
import { TemperatureType } from 'src/features/weather/domain/model/ToolsTypes';
import moment from 'moment';
import { Transition, CSSTransition } from 'react-transition-group';

type LocationItemProps = {
  name: string;
  index: number;
  currentTemperature: number;
  temperatureType: TemperatureType
  wX: WXType;
  spread: boolean;
  spreadOut: (on: boolean, translateY: number, spreadIndex: number | null) => void;
}

const LocationItem = (props: LocationItemProps) => {
  const {
    name,
    index,
    currentTemperature,
    temperatureType,
    wX,
    spread,
    spreadOut,
  } = props;

  const ref = useRef(null);
  const onItemClick = () => {
    spreadOut(true, spreadOutDistance + ref.current.clientHeight * index, index);
  }
  const onCloseSpread = () => {
    spreadOut(false, 0, null);
  }

  const [viewHeight, setViewHeight] = useState<number>(0);
  const [spreadOutDistance, setSpreadOutDistance] = useState<number>(0);
  const [itemHeight, setItemHeight] = useState<number>(91);

  useEffect(() => {
    setViewHeight(window.innerHeight);
    console.log(spread, index)
    spread ? setItemHeight(viewHeight) : setItemHeight(91);
    window.innerWidth >= 1024 ? setSpreadOutDistance(122) : setSpreadOutDistance(0);
  });

  const itemSpreadClass = spread ? ' item-spread' : '';

  return (
    <div
      className={'location-item' + itemSpreadClass}
      style={{
        backgroundImage: `url(${LocationsFactory.createWeatherBackground(wX)})`,
        minHeight: itemHeight + 'px',
        maxHeight: itemHeight + 'px',
      }}
      ref={ref}
    >
      <div className="overview" onClick={onItemClick}>
        <div className="flex-left">
          <span className="moment">{moment().format("HH:mm")}</span>
          <strong className="location-name">{name}</strong>
        </div>
        <span className="temperature">{TemperatureFactory.switchTemperatureType(currentTemperature, temperatureType)}°</span>
      </div>
      <button onClick={onCloseSpread}>關閉</button>
    </div>
  );
};

export default LocationItem;
