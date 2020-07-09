import React, { useRef, useState } from 'react';
import OthersDataItem from 'src/features/weather/components/locations/OthersDataItem';
import WeekItem from 'src/features/weather/components/locations/WeekItem';
import { CSSTransition } from 'react-transition-group';
import { CurrentDayDetails, WeekTemperature } from 'src/features/weather/domain/model/Weather';
import moment from 'moment';
import '@styles/transition_group.scss';

type LocationItemDetailsProps = {
  show: boolean;
  locationData: CurrentDayDetails;
  weekTemperatureArray: WeekTemperature[];
  translateD: number;
  onCloseSpread: () => void;
};

const LocationItemDetails = (props: LocationItemDetailsProps) => {
  const {
    show,
    locationData,
    weekTemperatureArray,
    translateD,
    onCloseSpread,
  } = props;

  const [everyTimeFixed, setTodayEveryTimeFixed] = useState<boolean>(false);
  const [opacityValue, setOpacityValue] = useState<number>(1);
  const [todayEveryTimeHeight, setTodayEveryTimeHeight] = useState<number>(0);
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
      setTodayEveryTimeFixed(true)
      setTodayEveryTimeHeight(todayEveryTimeRef.current.clientHeight);
    } else {
      setTodayEveryTimeFixed(false)
    };
  };

  const todayEveryTimePosition = everyTimeFixed ? 'fixed' : 'unset';
  const fixedBackgroundColor = everyTimeFixed ? 'rgba(0, 0, 0, .5)' : 'none';
  const todayEveryTimeTop = everyTimeFixed ? ((translateD + todayEveryTimeHeight + 42) + 'px') : 'auto';
  const morePaddingTop = everyTimeFixed ? 143 + todayEveryTimeHeight : 143;

  const everyTimeItem = locationData.todayEveryHourArray.map((item, index) => {
    return (
      <div
        className="item"
        key={'location-item-' + index}
      >
        <span className="hour">{item.hourName}</span>
        <span className="t">{item.temperature}</span>
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
      minT={item.minT}
      maxT={item.maxT}
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
          <div className="location-wx" style={{top: (translateD + 15) + 'px', background: fixedBackgroundColor}}>
            <h2>{locationData.locationName}</h2>
            <span className="wx">{locationData.wX}</span>
            <span
              className="current-temperature"
              style={{ opacity: opacityValue }}
            >
              {locationData.currentTemperature}
            </span>
          </div>
          <div className="more" style={{ paddingTop: morePaddingTop }}>
            <div className="today" style={{ opacity: opacityValue }}>
              <div className="day">
                <span className="day-name">{moment().locale('zh-tw').format('dddd')}</span>
                <span className="today-today">今天</span>
              </div>
              <div className="temperature-range">
                <span className="max-t">{locationData.maxT}</span>
                <span className="min-t">{locationData.minT}</span>
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
              <p>今天：目前{locationData.wX}。最高溫可達{locationData.maxT}˚，最低溫可達 {locationData.minT}˚</p>
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
