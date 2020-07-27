import React from 'react';
import { OthersData } from 'src/features/weather/domain/model/Weather';

const OthersDataItem = (props: OthersData) => {
  const { name, value, unit } = props;
  return (
    <div className="other-item">
      <label>{name}</label>
      <span className="value">
        {value}
        <span className="unit">{unit}</span>
      </span>
    </div>
  );
};

export default OthersDataItem;
