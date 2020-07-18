import React, { useRef, useState, useEffect } from 'react';
import OthersDataItem from 'src/features/weather/components/locations/OthersDataItem';
import WeekItem from 'src/features/weather/components/locations/WeekItem';
import { CurrentDayDetails, WeekTemperature } from 'src/features/weather/domain/model/Weather';
import { TemperatureHelper } from 'src/features/weather/helper';
import { TemperatureType } from 'src/features/weather/domain/model/ToolsTypes';
import {
  locationsDataSelector,
} from 'src/features/weather/selectors';
import { useSelector } from 'react-redux';
import Link from 'next/link';

import {
  faSpinner,
  faListUl,
  faHome,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CSSTransition } from 'react-transition-group';
import moment from 'moment';
import '@styles/transition_group.scss';

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

  const [opacityValue, setOpacityValue] = useState<number>(1);
  const [moreHeight, setMoreHeight] = useState<number>(0);
  const [oriMoreHeight, setOriMoreHeight] = useState<number>(0);
  const fixedDistance = 130 - 7 - 20;
  const opacityDistance = 100;

  const contentRef = useRef(null);
  const todayEveryTimeRef = useRef(null);
  const moreRef = useRef(null);

  const locationsData = useSelector(locationsDataSelector);
  const locationsLength = locationsData.length;

  const onWeekScroll = () => {
    const scrollTop = contentRef.current.scrollTop;
    const opacityRate = 1 - (scrollTop / opacityDistance);
    const opacity = opacityRate >= 0 ? opacityRate : 0;
    setOpacityValue(opacity);
    if (scrollTop >= fixedDistance) {
      onSetTodayEveryTimeFixed(true)
    } else {
      onSetTodayEveryTimeFixed(false)
    };
  };

  useEffect(() => {
    if (todayEveryTimeRef.current && todayEveryTimeHeight === 0) {
      onSetTodayEveryTimeHeight(todayEveryTimeRef.current.clientHeight);
    }
    setMoreHeight(oriMoreHeight + 40 + (15 * (locationsLength - 1)) + (81 * (locationsLength - 1)))
  });
  useEffect(() => {
    if (moreRef.current && weekTemperatureArray.length > 0 && oriMoreHeight === 0) {
      setOriMoreHeight(moreRef.current.clientHeight)
    }
  }, [weekTemperatureArray]);

  const todayEveryTimePosition = everyTimeFixed ? 'fixed' : 'unset';
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
          <img src={item.wXIcon} height="16" alt={item.wX} />
        </span>
        <span className="t">{TemperatureHelper.CalculateTemperature(item.temperature, temperatureType)}</span>
      </div>
    );
  });

  const othersDataItem = locationData.othersDataArray.map((item, index) => {
    if (item.name === '體感溫度') {
      const value = TemperatureHelper.CalculateTemperature(item.value, temperatureType, true)
      return (
        <OthersDataItem
          key={name + '_' + index}
          name={item.name}
          value={value}
          unit={item.unit}
        />
      )
    } else {
      return (
        <OthersDataItem
          key={name + '_' + index}
          name={item.name}
          value={item.value}
          unit={item.unit}
        />
      )
    }
  }
  );

  const weekItems = weekTemperatureArray.map((item, index) =>
    <WeekItem
      key={'week-item-' + index}
      dayName={item.dayName}
      wX={item.wX}
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
        <div className="details-bg"></div>
          <div
            className="location-wx-fixed location-wx-common"
            style={{
              display: everyTimeFixed ? 'flex' : 'none',
            }}
          >
            <h2>{locationData.locationName}</h2>
            <span className="wx">
              {locationData.wX}
            </span>
            <div
              className="today-every-time"
            >
              {everyTimeItem}
            </div>
          </div>
        <div className="content" onScroll={onWeekScroll} ref={contentRef}>
          {!everyTimeFixed && (
            <div className="location-wx location-wx-common" style={{top: (translateD + 15) + 'px'}}>
              <h2>{locationData.locationName}</h2>
              <span className="wx">
                {locationData.wX}
              </span>
              <span
                className="current-temperature"
                style={{ opacity: opacityValue }}
              >
                {TemperatureHelper.CalculateTemperature(locationData.currentTemperature, temperatureType)}
              </span>
            </div>
          )}
          <div
            className="more"
            ref={moreRef}
            style={{
              paddingTop: morePaddingTop,
              height: oriMoreHeight > 0 ? moreHeight : 'auto',
            }}
          >
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
                display: everyTimeFixed ? 'none' : 'flex',
              }}
            >
              {everyTimeItem}
            </div>
            <div className="week-weather wrap">
              {weekTemperatureArray.length > 0
                ? weekItems
                : (
                  <div className="flex-center loading">
                    <FontAwesomeIcon icon={faSpinner} spin />
                  </div>
                )
              }
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
          <Link href="/">
            <a className="home" ><FontAwesomeIcon icon={faHome} /></a>
          </Link>
          <button className="close" onClick={onCloseSpread}><FontAwesomeIcon icon={faListUl} /></button>
        </div>
      </div>
    </CSSTransition>
  );
};

export default LocationItemDetails;
