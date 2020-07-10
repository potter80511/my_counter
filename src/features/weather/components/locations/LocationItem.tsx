import React, { useState, useEffect, useRef } from 'react';
import LocationItemDetails from 'src/features/weather/components/locations/LocationItemDetails';
import { WXType, CurrentDayDetails, WeekTemperature } from 'src/features/weather/domain/model/Weather';
import { TemperatureType } from 'src/features/weather/domain/model/ToolsTypes';
import moment from 'moment';
import { Transition, CSSTransition } from 'react-transition-group';
import { TaiwanCities, WeatherLocationType, LocationValue } from 'src/features/weather/domain/model/Location';

type LocationItemProps = {
  index: number;
  locationData: CurrentDayDetails;
  weekTemperatureArray: WeekTemperature[];
  temperatureType: TemperatureType;
  translateD: number;
  spread: boolean;
  spreadOut: (translateY: number, spreadIndex: number | null) => void;
  getWeekWeather: (locationName: LocationValue, locationType: WeatherLocationType, city: TaiwanCities) => void;
}

const LocationItem = (props: LocationItemProps) => {
  const {
    index,
    locationData,
    weekTemperatureArray,
    temperatureType,
    translateD,
    spread,
    spreadOut,
    getWeekWeather,
  } = props;

  const {
    locationName,
    locationType,
    city,
  } = locationData;

  const ref = useRef(null);
  const onItemClick = () => {
    spreadOut(ref.current.clientHeight * index, index);
    getWeekWeather(locationName, locationType, city);
  }
  const onCloseSpread = () => {
    spreadOut(0, undefined);
  }

  const [viewHeight, setViewHeight] = useState<number>(0);
  const [spreadOutDistance, setSpreadOutDistance] = useState<number>(0);
  const [itemHeight, setItemHeight] = useState<number>(91);
  const [everyTimeFixed, setTodayEveryTimeFixed] = useState<boolean>(false);
  const [todayEveryTimeHeight, setTodayEveryTimeHeight] = useState<number>(0);

  const morePaddingTop = everyTimeFixed ? 100 + todayEveryTimeHeight : 15;

  useEffect(() => {
    setViewHeight(window.innerHeight);
    spread ? setItemHeight(viewHeight) : setItemHeight(91);
    // window.innerWidth >= 1024 ? setSpreadOutDistance(122) : setSpreadOutDistance(0);
  });

  const itemSpreadClass = spread ? ' item-spread' : '';

  return (
    <div
      className={'location-item' + itemSpreadClass}
      ref={ref}
      style={{
        backgroundImage: `url(${locationData.weatherBackgroundImage})`,
        minHeight: itemHeight + 'px',
        maxHeight: itemHeight + 'px',
        paddingTop: morePaddingTop,
      }}
    >
      {!spread && (
        <div className="overview" onClick={onItemClick}>
          <div className="flex-left">
            <span className="moment">{moment().format("HH:mm")}</span>
            <strong className="location-name">{locationData.locationName}</strong>
          </div>
          <span className="temperature">{locationData.currentTemperature}</span>
        </div>
      )}
      <LocationItemDetails
        show={spread}
        temperatureType={temperatureType}
        locationData={locationData}
        weekTemperatureArray={weekTemperatureArray}
        translateD={translateD}
        everyTimeFixed={everyTimeFixed}
        todayEveryTimeHeight={todayEveryTimeHeight}
        onCloseSpread={onCloseSpread}
        onSetTodayEveryTimeFixed={(fix) => setTodayEveryTimeFixed(fix)}
        onSetTodayEveryTimeHeight={(height) => setTodayEveryTimeHeight(height)}
      />
    </div>
  );
};

export default LocationItem;
