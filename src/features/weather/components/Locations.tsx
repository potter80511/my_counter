import React from 'react';
import { locations } from 'src/features/weather/domain/data';
import { LocationsFactory } from 'src/features/weather/domain/factories/LocationsFactory';

const locationData = [
  {
    id: 1,
    name: '內湖區',
    currentTemperature: 30
  },
  {
    id: 2,
    name: '台北市',
    currentTemperature: 33
  },
  {
    id: 3,
    name: '蘆竹區',
    currentTemperature: 29
  },
];


const Locations = () => {
  const LocationItem = locationData.map((item, index) => (
    <div className="location-item" key={'location-item-' + index}>
      <div className="overview">
        <div className="">
          <span className="moment">10:21</span>
          <strong className="location-name">{item.name}</strong>
        </div>
        <strong className="temperature">{item.currentTemperature}°</strong>
      </div>
    </div>
  ));
  return (
    <div className="locations">
      {LocationItem}
    </div>
  );
};

export default Locations;
