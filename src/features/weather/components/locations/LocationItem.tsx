import React, { useState, useEffect } from 'react';
import { WXType } from 'src/features/weather/domain/model/Weather';
import { Transition, CSSTransition } from 'react-transition-group';

type LocationItemProps = {
  name: string;
  currentTemperature: number;
  wX: WXType;
  spread: boolean;
  spreadOut: (on: boolean) => void;
}

const LocationItem = (props: LocationItemProps) => {
  const {
    name,
    currentTemperature,
    wX,
    spread,
    spreadOut,
  } = props;

  const [currentSpread, setCurrentSpread] = useState<boolean>(false);

  const weatherBg = (wX: WXType) => {
    switch (wX) {
      case WXType.SunnyCloudy:
        return '/img/weather/sunny.jpg'
      case WXType.Cloudy:
        return '/img/weather/cloudy.jpg'
    }
  }
  const onItemClick = () => {
    // setSpread(true);
    spreadOut(true);
    setCurrentSpread(true);
    setItemHeight(viewHeight);
  }
  const onCloseSpread = () => {
    spreadOut(false);
    setCurrentSpread(false);
    console.log('adf')
    setItemHeight(61);
  }

  const [viewHeight, setViewHeight] = useState<number>(0);
  const [itemHeight, setItemHeight] = useState<number>(61);
  useEffect(() => {
    setViewHeight(window.innerHeight);
  });

  const itemSpreadClass = currentSpread ? ' item-spread' : '';
  return (
    // <CSSTransition
    //   appear={true}
    //   in={spread}
    //   timeout={300}
    //   classNames="spread"
    // >
    <div
      className={'location-item' + itemSpreadClass}
      style={{
        backgroundImage: `url(${weatherBg(wX)})`,
        minHeight: itemHeight + 'px',
        maxHeight: itemHeight + 'px',
      }}
    >
      <div className="overview" onClick={onItemClick}>
        <div className="flex-left">
          <span className="moment">10:21</span>
          <strong className="location-name">{name}</strong>
        </div>
        <span className="temperature">{currentTemperature}°</span>
      </div>
      <button onClick={onCloseSpread}>關閉</button>
    </div>
    // </CSSTransition>
  );
};

export default LocationItem;
