import React from 'react';
import LocationItem from 'src/features/weather/components/locations/LocationItem';
import { CityWeatherDataFactory } from 'src/features/weather/domain/factories/CityWeatherDataFactory';
import { TemperatureType } from 'src/features/weather/domain/model/ToolsTypes';
import { WXType, CurrentDayDetails, WeekTemperature } from 'src/features/weather/domain/model/Weather';
import { LocationValue, WeatherLocationType, TaiwanCities } from 'src/features/weather/domain/model/Location';
import '@styles/features/weather/Locations.scss';

type LocationsProps = {
  spread: boolean;
  translateY: number;
  openedLocationIndex: number | null;
  temperatureType: TemperatureType;
  locationsData: CurrentDayDetails[];
  weekTemperatureArray: WeekTemperature[];
  spreadOut: (tlY: number, spreadIndex: number | null) => void;
  getWeekWeather: (locationName: LocationValue, locationType: WeatherLocationType, city: TaiwanCities) => void;
}

const Locations = (props: LocationsProps) => {
  const {
    spread,
    translateY,
    openedLocationIndex,
    temperatureType,
    locationsData,
    weekTemperatureArray,
    spreadOut,
    getWeekWeather,
  } = props;

  const locationItem = locationsData.map((item, index) => (
    <LocationItem
      key={'location-item-' + index}
      locationData={item}
      weekTemperatureArray={weekTemperatureArray}
      index={index}
      temperatureType={temperatureType}
      translateD={translateY}
      spread={openedLocationIndex === index ? true : false}
      spreadOut={(tlY, spreadIndex) => spreadOut(tlY, spreadIndex)}
      getWeekWeather={(locationName, locationType, city) => getWeekWeather(locationName, locationType, city)}
    />
  ));
  const spreadClass = spread ? ' spread' : '';

  return (
    <div
      className={'locations' + spreadClass}
      style={{ transform: `translateY(-${translateY}px)` }}
    >
      {locationsData.length > 0 ?
        locationItem : (
        <div>loading</div>
      )}
    </div>
  );
};

export default Locations;
