import React from 'react';
import LocationItem from 'src/features/weather/components/locations/LocationItem';
import { CityWeatherDataFactory } from 'src/features/weather/domain/factories/CityWeatherDataFactory';
import { TemperatureType } from 'src/features/weather/domain/model/ToolsTypes';
import { WXType } from 'src/features/weather/domain/model/Weather';
import '@styles/features/weather/Locations.scss';

const locationData = [
  {
    id: 1,
    name: '內湖區',
    currentTemperature: 30,
    wX: WXType.SunnyCloudy,
  },
  {
    id: 2,
    name: '台北市',
    currentTemperature: 33,
    wX: WXType.Cloudy,
  },
  {
    id: 3,
    name: '蘆竹區',
    currentTemperature: 29,
    wX: WXType.SunnyCloudy,
  },
];

type LocationsProps = {
  spread: boolean;
  translateY: number;
  openedLocationIndex: number | null;
  temperatureType: TemperatureType;
  spreadOut: (tlY: number, spreadIndex: number | null) => void;
}

const Locations = (props: LocationsProps) => {
  const {
    spread,
    translateY,
    openedLocationIndex,
    temperatureType,
    spreadOut,
  } = props;

  const locationItem = locationData.map((item, index) => (
    <LocationItem
      key={'location-item-' + index}
      name={item.name}
      index={index}
      currentTemperature={item.currentTemperature}
      temperatureType={temperatureType}
      wX={item.wX}
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
