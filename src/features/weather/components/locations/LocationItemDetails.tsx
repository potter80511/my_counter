import React from 'react';
import '@styles/transition_group.scss';
import { CSSTransition } from 'react-transition-group';
import { CurrentDayDetails } from 'src/features/weather/domain/model/Weather';
import moment from 'moment';

type LocationItemDetailsProps = {
  show: boolean;
  locationData: CurrentDayDetails;
  translateD: number;
  onCloseSpread: () => void;
};

const LocationItemDetails = (props: LocationItemDetailsProps) => {
  const {
    show,
    locationData,
    translateD,
    onCloseSpread,
  } = props;
  return (
    <CSSTransition
      in={show}
      timeout={600}
      classNames="fade"
      unmountOnExit
    >
      <div className="location-details">
        <div className="bg"></div>
        <div className="content">
          <div className="location-wx" style={{top: translateD + 'px'}}>
            <h2>{locationData.locationName}</h2>
            <span className="wx">{locationData.wX}</span>
            <span className="current-temperature">{locationData.currentTemperature}</span>
          </div>
          <div className="more">
            <div className="today">
              <div className="day-name">星期六</div>
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
