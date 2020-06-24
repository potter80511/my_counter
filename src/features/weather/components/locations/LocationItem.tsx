import React from 'react';
import { WXType } from 'src/features/weather/domain/model/Weather';

type LocationItemProps = {
  name: string;
  currentTemperature: number;
  wX: WXType;
}

const LocationItem = (props: LocationItemProps) => {
  const {
    name,
    currentTemperature,
    wX,
  } = props;

  const weatherBg = (wX: WXType) => {
    switch (wX) {
      case WXType.SunnyCloudy:
        return '/img/weather/sunny.jpg'
      case WXType.Cloudy:
        return '/img/weather/cloudy.jpg'
    }
  }
  console.log(weatherBg(wX))
  return (
    <div className="location-item" style={{backgroundImage: `url(${weatherBg(wX)})`}}>
      <div className="overview">
        <div className="flex-left">
          <span className="moment">10:21</span>
          <strong className="location-name">{name}</strong>
        </div>
        <span className="temperature">{currentTemperature}°</span>
      </div>
    </div>
  );
};

export default LocationItem;
