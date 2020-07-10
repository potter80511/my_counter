import React, { useRef, useState } from 'react';
import OthersDataItem from 'src/features/weather/components/locations/OthersDataItem';
import WeekItem from 'src/features/weather/components/locations/WeekItem';
import { CSSTransition } from 'react-transition-group';
import { CurrentDayDetails, WeekTemperature } from 'src/features/weather/domain/model/Weather';
import { TemperatureHelper } from 'src/features/weather/helper';
import moment from 'moment';
import '@styles/transition_group.scss';
import { TemperatureType } from 'src/features/weather/domain/model/ToolsTypes';

type LocationItemDetailsProps = {
  show: boolean;
  temperatureType: TemperatureType;
  locationData: CurrentDayDetails;
  weekTemperatureArray: WeekTemperature[];
  translateD: number;
  everyTimeFixed: boolean;
  todayEveryTimeHeight: number;
  onCloseSpread: () => void;
  onSetTodayEveryTimeFixed: (fix: boolean) => void;
  onSetTodayEveryTimeHeight: (height: number) => void;
};

const LocationItemDetails = (props: LocationItemDetailsProps) => {
  const {
    show,
    temperatureType,
    locationData,
    weekTemperatureArray,
    translateD,
    everyTimeFixed,
    todayEveryTimeHeight,
    onCloseSpread,
    onSetTodayEveryTimeFixed,
    onSetTodayEveryTimeHeight,
  } = props;

  // const [everyTimeFixed, setTodayEveryTimeFixed] = useState<boolean>(false);
  const [opacityValue, setOpacityValue] = useState<number>(1);
  // const [todayEveryTimeHeight, setTodayEveryTimeHeight] = useState<number>(0);
  const fixedDistance = 130 - 7 - 20;
  const opacityDistance = 100;

  const contentRef = useRef(null);
  const todayEveryTimeRef = useRef(null);

  const onWeekScroll = () => {
    const scrollTop = contentRef.current.scrollTop;
    const opacityRate = 1 - (scrollTop / opacityDistance);
    const opacity = opacityRate >= 0 ? opacityRate : 0;
    setOpacityValue(opacity);
    if (scrollTop >= fixedDistance) {
      onSetTodayEveryTimeFixed(true)
      onSetTodayEveryTimeHeight(todayEveryTimeRef.current.clientHeight);
    } else {
      onSetTodayEveryTimeFixed(false)
    };
  };

  const todayEveryTimePosition = everyTimeFixed ? 'fixed' : 'unset';
  // const fixedBackgroundColor = everyTimeFixed ? 'rgba(0, 0, 0, .5)' : 'none';
  const todayEveryTimeTop = everyTimeFixed ? ((translateD + todayEveryTimeHeight + 3) + 'px') : 'auto';
  const morePaddingTop = everyTimeFixed ? 63 : 143;

  const everyTimeItem = locationData.todayEveryHourArray.map((item, index) => {
    return (
      <div
        className="item"
        key={'location-item-' + index}
      >
        <span className="hour">{item.hourName}</span>
        <span className="wx">
          <img src={item.wXIcon} height="16" />
        </span>
        <span className="t">{TemperatureHelper.CalculateTemperature(item.temperature, temperatureType)}</span>
      </div>
    );
  });

  const othersDataItem = locationData.othersDataArray.map((item, index) =>
    <OthersDataItem
      key={name + '_' + index}
      name={item.name}
      value={item.value}
      unit={item.unit}
    />
  );

  const weekItems = weekTemperatureArray.map((item, index) =>
    <WeekItem
      key={'week-item-' + index}
      dayName={item.dayName}
      wXIcon={item.wXIcon}
      minT={TemperatureHelper.CalculateTemperature(item.minT, temperatureType)}
      maxT={TemperatureHelper.CalculateTemperature(item.maxT, temperatureType)}
    />
  );

  return (
    <CSSTransition
      in={show}
      timeout={600}
      classNames="fade"
      unmountOnExit
    >
      <div className="location-details">
        <div className="bg"></div>
        <div className="content" onScroll={onWeekScroll} ref={contentRef}>
          <div className="location-wx" style={{top: (translateD + 15) + 'px'}}>
            <h2>{locationData.locationName}</h2>
            <span className="wx">{locationData.wX}</span>
            <span
              className="current-temperature"
              style={{ opacity: opacityValue }}
            >
              {locationData.currentTemperature}
            </span>
          </div>
          <div className="more" style={{paddingTop: morePaddingTop}}>
            <div className="today" style={{ opacity: opacityValue }}>
              <div className="day">
                <span className="day-name">{moment().locale('zh-tw').format('dddd')}</span>
                <span className="today-today">今天</span>
              </div>
              <div className="temperature-range">
                <span className="max-t">
                  {TemperatureHelper.CalculateTemperature(locationData.maxT, temperatureType, true)}
                </span>
                <span className="min-t">
                  {TemperatureHelper.CalculateTemperature(locationData.minT, temperatureType, true)}
                </span>
              </div>
            </div>
            <div
              className="today-every-time"
              ref={todayEveryTimeRef}
              style={{
                position: todayEveryTimePosition,
                top: todayEveryTimeTop,
              }}
            >
              {everyTimeItem}
            </div>
            <div className="week-weather wrap">
              {weekItems}
            </div>
            <div className="current-description wrap">
              <p>今天：目前{locationData.wX}。最高溫可達 {TemperatureHelper.CalculateTemperature(locationData.maxT, temperatureType, true)}˚，最低溫可達 {TemperatureHelper.CalculateTemperature(locationData.minT, temperatureType, true)}˚</p>
            </div>
            <div className="others flex wrap">
              {othersDataItem}
            </div>
          </div>
        </div>
        <div className="details-tools">
          <button className="close" onClick={onCloseSpread}>關閉</button>
        </div>
      </div>
    </CSSTransition>
  );
};

export default LocationItemDetails;
