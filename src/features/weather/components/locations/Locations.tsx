import React from 'react';
import LocationItem from 'src/features/weather/components/locations/LocationItem';
import { CityWeatherDataFactory } from 'src/features/weather/domain/factories/CityWeatherDataFactory';
import { TemperatureType } from 'src/features/weather/domain/model/ToolsTypes';
import { WXType, CurrentDayDetails } from 'src/features/weather/domain/model/Weather';
import '@styles/features/weather/Locations.scss';

type LocationsProps = {
  spread: boolean;
  translateY: number;
  openedLocationIndex: number | null;
  temperatureType: TemperatureType;
  locationsData: CurrentDayDetails[];
  spreadOut: (tlY: number, spreadIndex: number | null) => void;
}

const Locations = (props: LocationsProps) => {
  const {
    spread,
    translateY,
    openedLocationIndex,
    temperatureType,
    locationsData,
    spreadOut,
  } = props;

  const locationItem = locationsData.map((item, index) => (
    <LocationItem
      key={'location-item-' + index}
      locationData={item}
      index={index}
      temperatureType={temperatureType}
      translateD={translateY}
      spread={openedLocationIndex === index ? true : false}
      spreadOut={(tlY, spreadIndex) => spreadOut(tlY, spreadIndex)}
    />
  ));
  const spreadClass = spread ? ' spread' : '';

  return (
    <div
      className={'locations' + spreadClass}
      style={{ transform: `translateY(-${translateY}px)` }}
    >
      {locationItem}
    </div>
  );
};

export default Locations;
