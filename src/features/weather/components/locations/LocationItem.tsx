import React, { useState, useEffect, useRef } from 'react';
import LocationItemDetails from 'src/features/weather/components/locations/LocationItemDetails';
import {
  CurrentDayDetails,
  WeekTemperature,
} from 'src/features/weather/domain/model/Weather';
import { TemperatureType } from 'src/features/weather/domain/model/ToolsTypes';
import { TemperatureHelper } from 'src/features/weather/helper';
import moment from 'moment';
import {
  TaiwanCities,
  WeatherLocationType,
  LocationValue,
} from 'src/features/weather/domain/model/Location';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type LocationItemProps = {
  index: number;
  locationData: CurrentDayDetails;
  weekTemperatureArray: WeekTemperature[];
  temperatureType: TemperatureType;
  translateD: number;
  spread: boolean;
  spreadOut: (translateY: number, spreadIndex: number | null) => void;
  getWeekWeather: (
    locationName: LocationValue,
    locationType: WeatherLocationType,
    city: TaiwanCities,
  ) => void;
  onDelete: (deleteIndex: number) => void;
};

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
    onDelete,
  } = props;

  const { locationName, locationType, city } = locationData;

  const ref = useRef(null);
  const onItemClick = () => {
    spreadOut(ref.current.clientHeight * index, index);
    getWeekWeather(locationName, locationType, city);
  };
  const onCloseSpread = () => {
    spreadOut(0, undefined);
  };

  const onDeleteLocation = (e, deleteIndex: number) => {
    onDelete(deleteIndex);
    e.stopPropagation();
  };

  const [viewHeight, setViewHeight] = useState<number>(0);
  const [itemHeight, setItemHeight] = useState<number>(91);
  const [everyTimeFixed, setTodayEveryTimeFixed] = useState<boolean>(false);
  const [todayEveryTimeHeight, setTodayEveryTimeHeight] = useState<number>(0);

  const morePaddingTop =
    everyTimeFixed && spread ? 103 + todayEveryTimeHeight : 15;

  useEffect(() => {
    setViewHeight(window.innerHeight);
    spread ? setItemHeight(viewHeight) : setItemHeight(91);
  });

  const itemSpreadClass = spread ? ' item-spread' : '';

  return (
    <div
      className={`location-item${itemSpreadClass}`}
      ref={ref}
      style={{
        backgroundImage: `url(${locationData.weatherBackgroundImage})`,
        minHeight: `${itemHeight}px`,
        maxHeight: `${itemHeight}px`,
        paddingTop: morePaddingTop,
      }}
    >
      <div className="bg" />
      {!spread && (
        <div className="overview" onClick={onItemClick}>
          <div className="flex-left">
            <span className="moment">{moment().format('HH:mm')}</span>
            <strong className="location-name">
              {locationData.locationName}
              {locationData.cityName && (
                <span className="city-name">（{locationData.cityName}）</span>
              )}
            </strong>
          </div>
          <span className="temperature">
            {TemperatureHelper.CalculateTemperature(
              locationData.currentTemperature,
              temperatureType,
            )}
          </span>
          <button
            className="delete"
            onClick={e => onDeleteLocation(e, index)}
            type="button"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
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
        onSetTodayEveryTimeFixed={fix => setTodayEveryTimeFixed(fix)}
        onSetTodayEveryTimeHeight={height => setTodayEveryTimeHeight(height)}
      />
    </div>
  );
};

export default LocationItem;
