import React, { useState, useEffect, useRef } from 'react';
import LocationItemDetails from 'src/features/weather/components/locations/LocationItemDetails'
import { WXType } from 'src/features/weather/domain/model/Weather';
import { TemperatureFactory } from 'src/features/weather/domain/factories/TemperatureFactory';
import { WeatherBackgroundFactory } from 'src/features/weather/domain/factories/WeatherBackgroundFactory';
import { TemperatureType } from 'src/features/weather/domain/model/ToolsTypes';
import moment from 'moment';
import { Transition, CSSTransition } from 'react-transition-group';

type LocationItemProps = {
  name: string;
  index: number;
  currentTemperature: string;
  temperatureType: TemperatureType
  wX: WXType;
  weatherBackgroundImage: string;
  spread: boolean;
  spreadOut: (translateY: number, spreadIndex: number | null) => void;
}

const LocationItem = (props: LocationItemProps) => {
  const {
    name,
    index,
    currentTemperature,
    temperatureType,
    wX,
    weatherBackgroundImage,
    spread,
    spreadOut,
  } = props;

  const ref = useRef(null);
  const onItemClick = () => {
    spreadOut(spreadOutDistance + ref.current.clientHeight * index, index);
  }
  const onCloseSpread = () => {
    spreadOut(0, undefined);
  }

  const [viewHeight, setViewHeight] = useState<number>(0);
  const [spreadOutDistance, setSpreadOutDistance] = useState<number>(0);
  const [itemHeight, setItemHeight] = useState<number>(91);

  useEffect(() => {
    setViewHeight(window.innerHeight);
    spread ? setItemHeight(viewHeight) : setItemHeight(91);
    window.innerWidth >= 1024 ? setSpreadOutDistance(122) : setSpreadOutDistance(0);
  });

  const itemSpreadClass = spread ? ' item-spread' : '';

  return (
    <div
      className={'location-item' + itemSpreadClass}
      style={{
        backgroundImage: `url(${weatherBackgroundImage})`,
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
        {/* <span className="temperature">{TemperatureFactory.switchTemperatureType(currentTemperature, temperatureType)}°</span> */}
        <span className="temperature">{currentTemperature}</span>
      </div>
      <LocationItemDetails
        show={spread}
        onCloseSpread={onCloseSpread}
      />
    </div>
  );
};

export default LocationItem;
