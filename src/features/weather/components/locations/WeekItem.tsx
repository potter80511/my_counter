import React from 'react';
import { WeekTemperature } from 'src/features/weather/domain/model/Weather';

type WeekItemProps = WeekTemperature;

const WeekItem = (props: WeekItemProps) => {
  const { dayName, wX, wXIcon, maxT, minT } = props;
  return (
    <div className="week-item flex">
      <div className="day-name">{dayName}</div>
      <div className="wx">
        <img height="15" src={wXIcon} alt={wX} />
      </div>
      <div className="extreame-t">
        <span className="max">{maxT}</span>
        <span className="min">{minT}</span>
      </div>
    </div>
  );
};

export default WeekItem;
